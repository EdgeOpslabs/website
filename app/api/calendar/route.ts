import { NextResponse } from 'next/server';

const CALENDAR_URL = process.env.GOOGLE_CALENDAR_URL;

export async function GET() {
    if (!CALENDAR_URL) {
        console.error("GOOGLE_CALENDAR_URL is not configured");
        return NextResponse.json(
            { error: "Calendar integration is not configured." },
            { status: 500 }
        );
    }

    try {
        const response = await fetch(CALENDAR_URL, {
            next: { revalidate: 300 },
            headers: {
                "User-Agent": "EdgeOpsLabs/1.0 (+calendar-proxy)",
            },
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch from calendar provider." },
                { status: response.status }
            );
        }

        const icsText = await response.text();
        return new NextResponse(icsText, {
            status: 200,
            headers: {
                "Content-Type": "text/calendar; charset=utf-8",
                "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
            },
        });

    } catch (error) {
        console.error('API Error fetching Calendar:', error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
