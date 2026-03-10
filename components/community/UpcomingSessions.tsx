"use client";

import { useState, useEffect, useMemo } from "react";
import { Calendar, Clock, MapPin, CalendarPlus, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type CalendarEvent = {
    summary?: string;
    description?: string;
    location?: string;
    start: string;
    end?: string;
    isAllDay?: boolean;
};

type CalendarResult = {
    events?: CalendarEvent[];
    error?: string;
};

function unfoldICSLines(icsString: string): string[] {
    const rawLines = icsString.split(/\r?\n/);
    const unfolded: string[] = [];

    for (const line of rawLines) {
        if ((line.startsWith(" ") || line.startsWith("\t")) && unfolded.length > 0) {
            unfolded[unfolded.length - 1] += line.slice(1);
            continue;
        }
        unfolded.push(line);
    }

    return unfolded;
}

function parseICalDate(raw: string): { iso: string; isAllDay: boolean } | null {
    // DATE format (all day): 20260309
    if (/^\d{8}$/.test(raw)) {
        const iso = `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}T00:00:00Z`;
        return { iso, isAllDay: true };
    }

    // DATE-TIME format: 20260309T093000Z or without Z
    const match = raw.match(/^(\d{8})T(\d{6})Z?$/);
    if (!match) return null;

    const [, date, time] = match;
    const iso = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}T${time.slice(0, 2)}:${time.slice(2, 4)}:${time.slice(4, 6)}Z`;
    return { iso, isAllDay: false };
}

function parseICS(icsString: string): CalendarEvent[] {
    const events: CalendarEvent[] = [];
    const lines = unfoldICSLines(icsString);
    let currentEvent: Partial<CalendarEvent> | null = null;

    for (const line of lines) {
        const separatorIndex = line.indexOf(":");
        if (separatorIndex === -1) continue;

        const rawKey = line.slice(0, separatorIndex);
        const value = line.slice(separatorIndex + 1);
        const key = rawKey.split(";")[0];

        if (line.startsWith('BEGIN:VEVENT')) {
            currentEvent = {};
        } else if (line.startsWith('END:VEVENT')) {
            if (currentEvent && currentEvent.start) {
                events.push(currentEvent as CalendarEvent);
            }
            currentEvent = null;
        } else if (currentEvent) {
            if (key === "SUMMARY") currentEvent.summary = value;
            if (key === "DESCRIPTION") currentEvent.description = value.replace(/\\n/g, "\n");
            if (key === "LOCATION") currentEvent.location = value;

            if (key === "DTSTART") {
                const parsed = parseICalDate(value);
                if (parsed) {
                    currentEvent.start = parsed.iso;
                    currentEvent.isAllDay = parsed.isAllDay;
                }
            }
            if (key === "DTEND") {
                const parsed = parseICalDate(value);
                if (parsed) {
                    currentEvent.end = parsed.iso;
                }
            }
        }
    }
    return events;
}

async function getUpcomingEvents() {
    try {
        const response = await fetch('/api/calendar');

        if (!response.ok) {
            console.error('Failed to fetch ICS file');
            return { error: "Failed to fetch events from Calendar API." } satisfies CalendarResult;
        }

        const icsText = await response.text();
        const allEvents = parseICS(icsText);

        const now = new Date().getTime();

        const upcomingEvents = allEvents.filter(e => {
            const startTime = new Date(e.start).getTime();
            const endTime = e.end ? new Date(e.end).getTime() : startTime + (60 * 60 * 1000);
            return endTime >= now;
        });

        upcomingEvents.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

        return { events: upcomingEvents.slice(0, 20) } satisfies CalendarResult;
    } catch (error) {
        console.error('Error fetching Google Calendar ICS events:', error);
        return { error: "Failed to fetch events." } satisfies CalendarResult;
    }
}

function generateGoogleCalendarUrl(event: CalendarEvent) {
    const title = encodeURIComponent(event.summary || "Community Session");
    const details = encodeURIComponent(event.description || "");
    const location = encodeURIComponent(event.location || "Virtual");

    let startIso = "";
    let endIso = "";

    const startDate = new Date(event.start);
    startIso = startDate.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const endDate = new Date(event.end || startDate.getTime() + 60 * 60 * 1000);
    endIso = endDate.toISOString().replace(/-|:|\.\d\d\d/g, "");

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
}

function toDateString(date: Date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export function UpcomingSessions() {
    const [events, setEvents] = useState<CalendarEvent[] | null>(null);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    // Calendar State
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const result = await getUpcomingEvents();
                if (result.error) {
                    setError(true);
                } else {
                    setEvents(result.events || []);
                }
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchEvents();
    }, []);

    // Calendar Math - starting on Sunday
    const days = useMemo(() => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 (Sun) to 6 (Sat)
        const totalDaysInMonth = lastDayOfMonth.getDate();

        const calendarDays = [];

        // Previous month padding
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = startingDayOfWeek - 1; i >= 0; i--) {
            calendarDays.push({
                date: new Date(year, month - 1, prevMonthLastDay - i),
                isCurrentMonth: false
            });
        }

        // Current month days
        for (let i = 1; i <= totalDaysInMonth; i++) {
            calendarDays.push({
                date: new Date(year, month, i),
                isCurrentMonth: true,
                isToday: toDateString(new Date(year, month, i)) === toDateString(new Date())
            });
        }

        // Next month padding (to complete the last row)
        const remainingCells = 42 - calendarDays.length;
        for (let i = 1; i <= remainingCells; i++) {
            calendarDays.push({
                date: new Date(year, month + 1, i),
                isCurrentMonth: false
            });
        }

        return calendarDays;
    }, [currentMonth]);

    const eventsByDate = useMemo(() => {
        const map: Record<string, CalendarEvent[]> = {};
        if (!events) return map;

        events.forEach(evt => {
            const dateStr = toDateString(new Date(evt.start));
            if (!map[dateStr]) map[dateStr] = [];
            map[dateStr].push(evt);
        });
        return map;
    }, [events]);

    // Pre-calculate which days have events to establish a sequential index for the "firefly" stagger effect
    const eventDaysSequence = useMemo(() => {
        const sequenceMap: Record<string, number> = {};
        let counter = 0;

        days.forEach(dayObj => {
            const dateStr = toDateString(dayObj.date);
            if (eventsByDate[dateStr] && eventsByDate[dateStr].length > 0) {
                sequenceMap[dateStr] = counter;
                counter++;
            }
        });

        return sequenceMap;
    }, [days, eventsByDate]);

    const handlePreviousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    if (loading) {
        return (
            <section className="mb-40 mt-32 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold font-mono text-brand-text mb-12 flex items-center gap-3">
                    <Calendar className="text-brand-primary" />
                    Protocol Calendar
                </h2>
                <div className="p-32 border border-dashed border-brand-text/10 rounded-2xl bg-card text-center animate-pulse flex flex-col items-center justify-center">
                    <Calendar className="w-16 h-16 text-brand-primary/20 mb-6" />
                    <p className="text-brand-text/60 font-mono text-lg tracking-widest uppercase">Syncing Node Events...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="mb-40 mt-32 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold font-mono text-brand-text mb-12 flex items-center gap-3">
                    <Calendar className="text-brand-primary" />
                    Protocol Calendar
                </h2>
                <div className="p-16 border border-dashed border-red-500/20 rounded-2xl bg-red-500/5 text-center flex flex-col items-center">
                    <Calendar className="w-16 h-16 text-red-500/40 mb-6" />
                    <h3 className="text-xl font-bold text-red-400 mb-2">Calendar Sync Error</h3>
                    <p className="text-brand-text/60 max-w-md">
                        Unable to synchronize sessions from the calendar provider at this time.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section className="mb-40 mt-32 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                <h2 className="text-3xl font-bold font-mono text-brand-text flex items-center gap-3">
                    <Calendar className="text-brand-primary" />
                    Protocol Calendar
                </h2>

                {/* Month Controls */}
                <div className="flex items-center gap-4 bg-card border border-brand-primary/10 rounded-xl p-2 shadow-lg w-fit">
                    <button
                        onClick={handlePreviousMonth}
                        className="p-2 rounded-lg hover:bg-brand-primary/10 text-brand-text/60 hover:text-brand-primary transition-colors"
                        aria-label="Previous Month"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="w-40 text-center font-bold font-mono tracking-widest text-brand-primary">
                        {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </div>
                    <button
                        onClick={handleNextMonth}
                        className="p-2 rounded-lg hover:bg-brand-primary/10 text-brand-text/60 hover:text-brand-primary transition-colors"
                        aria-label="Next Month"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="bg-card border border-brand-primary/20 rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                    <div className="min-w-[800px]">
                        {/* Weekday Headers */}
                        <div className="grid grid-cols-7 border-b border-brand-primary/10 bg-brand-primary/5">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                <div key={day} className="py-4 text-center text-xs font-mono tracking-widest text-brand-text/70 uppercase">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 auto-rows-[minmax(90px,auto)]">
                            {days.map((dayObj, i) => {
                                const dateStr = toDateString(dayObj.date);
                                const dayEvents = eventsByDate[dateStr] || [];
                                const hasEvents = dayEvents.length > 0;
                                const fireflyIndex = eventDaysSequence[dateStr];

                                return (
                                    <div
                                        key={i}
                                        className={cn(
                                            "border-b border-r border-brand-primary/5 p-1.5 transition-colors relative group",
                                            i % 7 === 6 && "border-r-0",
                                            !dayObj.isCurrentMonth && "bg-background/40",
                                            dayObj.isToday && "bg-brand-primary/5"
                                        )}
                                    >
                                        {/* Firefly Glow Effect Component */}
                                        {hasEvents && (
                                            <motion.div
                                                initial={{ opacity: 0, boxShadow: "inset 0 0 0px rgba(0,194,255,0)" }}
                                                animate={{
                                                    opacity: [0, 0.5, 0],
                                                    boxShadow: [
                                                        "inset 0 0 0px rgba(0,194,255,0)",
                                                        "inset 0 0 30px rgba(0,194,255,0.4)",
                                                        "inset 0 0 0px rgba(0,194,255,0)",
                                                    ]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    repeatType: "loop",
                                                    ease: "easeInOut",
                                                    delay: fireflyIndex * 0.4 // Stagger sequence
                                                }}
                                                className="absolute inset-0 z-0 pointer-events-none rounded-lg"
                                            />
                                        )}

                                        {/* Date Header */}
                                        <div className="flex justify-between items-start mb-1.5 relative z-10">
                                            <span className={cn(
                                                "text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full transition-colors",
                                                dayObj.isCurrentMonth ? "text-brand-text/80" : "text-brand-text/30",
                                                dayObj.isToday && "bg-brand-primary text-background shadow-[0_0_15px_rgba(0,194,255,0.4)]"
                                            )}>
                                                {dayObj.date.getDate()}
                                            </span>

                                            {hasEvents && (
                                                <span className="text-[9px] font-mono text-brand-primary/80 bg-brand-primary/10 px-1 py-0.5 rounded shadow-sm">
                                                    {dayEvents.length} event{dayEvents.length > 1 ? 's' : ''}
                                                </span>
                                            )}
                                        </div>

                                        {/* Events List */}
                                        <div className="flex flex-col gap-1 overflow-hidden relative z-10">
                                            {dayEvents.map((evt, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setSelectedEvent(evt)}
                                                    className="text-left w-full group/btn"
                                                >
                                                    <div className="px-1.5 py-1 rounded bg-brand-primary/10 border border-brand-primary/20 text-[11px] font-bold text-brand-text truncate hover:bg-brand-primary/20 hover:border-brand-primary/40 transition-colors shadow-sm relative overflow-hidden">
                                                        {/* Hover Highlight */}
                                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-primary opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                                                        <div className="pl-1 truncate leading-tight">
                                                            {evt.summary || "Untitled"}
                                                        </div>
                                                        <div className="pl-1 text-[9px] text-brand-text/60 font-mono font-normal truncate mt-0.5 opacity-80">
                                                            {evt.isAllDay ? "All Day" : new Date(evt.start).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Event Details Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedEvent(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg bg-card border border-brand-primary/30 rounded-2xl shadow-2xl overflow-hidden"
                        >
                            <div className="h-2 w-full bg-gradient-to-r from-brand-primary via-indigo-500 to-brand-primary" />

                            <div className="p-8">
                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-background/50 hover:bg-brand-primary/20 text-brand-text/60 hover:text-brand-primary transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                                    </span>
                                    Scheduled Event
                                </div>

                                <h3 className="text-2xl font-bold text-brand-text mb-4">
                                    {selectedEvent.summary || "Untitled Session"}
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3 text-sm text-brand-text/80 font-mono">
                                        <Calendar size={18} className="text-brand-primary shrink-0 mt-0.5" />
                                        <span>
                                            {new Date(selectedEvent.start).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3 text-sm text-brand-text/80 font-mono">
                                        <Clock size={18} className="text-brand-primary shrink-0 mt-0.5" />
                                        <span>
                                            {selectedEvent.isAllDay ? "All Day Event" : `${new Date(selectedEvent.start).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })} - ${selectedEvent.end ? new Date(selectedEvent.end).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) : 'TBD'}`}
                                        </span>
                                    </div>
                                    {selectedEvent.location && (
                                        <div className="flex items-start gap-3 text-sm text-brand-text/80 font-mono">
                                            <MapPin size={18} className="text-brand-primary shrink-0 mt-0.5" />
                                            <a href={selectedEvent.location.startsWith('http') ? selectedEvent.location : `https://maps.google.com/?q=${encodeURIComponent(selectedEvent.location)}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary hover:underline underline-offset-4 transition-colors">
                                                {selectedEvent.location}
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {selectedEvent.description && (
                                    <div className="mb-8">
                                        <h4 className="text-xs font-mono tracking-widest text-brand-text/50 uppercase mb-2">Description</h4>
                                        <p className="text-sm text-brand-text/70 leading-relaxed whitespace-pre-wrap bg-background/50 p-4 rounded-lg border border-brand-text/5">
                                            {selectedEvent.description}
                                        </p>
                                    </div>
                                )}

                                <a
                                    href={generateGoogleCalendarUrl(selectedEvent)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-primary/10 text-brand-primary font-bold tracking-wide hover:bg-brand-primary hover:text-white transition-all shadow-[0_0_20px_rgba(0,194,255,0.1)] hover:shadow-[0_0_30px_rgba(0,194,255,0.4)]"
                                >
                                    <CalendarPlus size={20} />
                                    Add to Personal Calendar
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
