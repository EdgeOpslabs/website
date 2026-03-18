export interface Blog {
    id: string | number;
    title: string;
    date: string;
    excerpt: string;
    readTime: string;
    tag: string;
    url: string;
}

const FEED_URL = "https://blogs.edgeopslabs.com/rss.xml";

const FALLBACK_BLOGS: Blog[] = [
    {
        id: 1,
        title: "Compiling the Autonomous Cloud: Part 1",
        date: "2026-02-28",
        excerpt: "Why current managed services fail at the edge, and how deterministic infrastructure solves latency.",
        readTime: "8 min read",
        tag: "Architecture",
        url: "https://blogs.edgeopslabs.com/compiling-the-autonomous-cloud"
    },
    {
        id: 2,
        title: "Release Protocol v1.0.0",
        date: "2026-02-15",
        excerpt: "The stable release of the EdgeOps framework. Breaking changes, new APIs, and migration guides.",
        readTime: "12 min read",
        tag: "Release",
        url: "https://blogs.edgeopslabs.com/release-protocol-v1"
    },
    {
        id: 3, 
        title: "The Future of Edge Computing",
        date: "2026-03-15",
        excerpt: "Exploring the next frontier of distributed computing and autonomous infrastructure.",
        readTime: "5 min read",
        tag: "Forward",
        url: "https://blogs.edgeopslabs.com/future-of-edge"
    }
];

export async function getLatestBlogs(): Promise<Blog[]> {
    try {
        const response = await fetch(FEED_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");
        const items = xmlDoc.querySelectorAll("item");

        const fetchedBlogs: Blog[] = Array.from(items).slice(0, 3).map((item, index) => {
            const title = item.querySelector("title")?.textContent || "Untitled Transmission";
            const link = item.querySelector("link")?.textContent || "https://blogs.edgeopslabs.com";
            const pubDate = item.querySelector("pubDate")?.textContent || "";
            const description = item.querySelector("description")?.textContent || "";
            const category = item.querySelector("category")?.textContent || "Transmission";

            // Clean description (remove HTML)
            const cleanExcerpt = description.replace(/<[^>]*>/g, '').substring(0, 150) + "...";
            
            // Format Date
            const dateObj = new Date(pubDate);
            const formattedDate = isNaN(dateObj.getTime()) 
                ? "RECENT_LOG" 
                : dateObj.toISOString().split('T')[0];

            // Estimate Read Time (average 200 words per min)
            const wordCount = description.split(/\s+/).length;
            const readMinutes = Math.max(1, Math.ceil(wordCount / 200));

            return {
                id: `rss-${index}`,
                title,
                date: formattedDate,
                excerpt: cleanExcerpt,
                readTime: `${readMinutes} min read`,
                tag: category,
                url: link
            };
        });

        if (fetchedBlogs.length === 0) return FALLBACK_BLOGS.slice(0, 3).reverse();

        // Newest should be at index 2 (right side)
        // RSS items are usually newest first, so we reverse it to get [Oldest, Middle, Newest]
        return fetchedBlogs.reverse();
    } catch (error) {
        console.warn("RSS fetch failed, using fallback logic. (Usually due to CORS in development)", error);
        
        // Sort fallback descending by date then reverse to get [Oldest, Middle, Newest]
        const sorted = [...FALLBACK_BLOGS].sort((a, b) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        return sorted.slice(0, 3).reverse();
    }
}
