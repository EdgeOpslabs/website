import { XMLParser } from "fast-xml-parser";

export interface Blog {
  id: string | number;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tag: string;
  url: string;
  impressions?: number;
  badgeLabel?: string;
  badgeTone?: "pulse" | "subtle";
  isHighlight?: boolean;
}

const DEFAULT_BLOG_HOST =
  process.env.NODE_ENV === "production"
    ? "https://blogs.edgeopslabs.com"
    : "http://localhost:3001";

const BLOG_BASE_URL = (
  process.env.NEXT_PUBLIC_BLOG_BASE_URL ??
  process.env.BLOG_BASE_URL ??
  DEFAULT_BLOG_HOST
).replace(/\/$/, "");
const FEED_URL = `${BLOG_BASE_URL}/rss.xml`;
const HIGHLIGHTS_URL = `${BLOG_BASE_URL}/api/posts/highlights`;

type HighlightPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTimeText: string;
  impressions?: number;
};

type HighlightResponse = {
  latest: HighlightPost | null;
  topImpressions: HighlightPost | null;
  featured: HighlightPost[];
};

type HighlightDescriptor = {
  post: HighlightPost;
  badgeLabel?: string;
  badgeTone?: "pulse" | "subtle";
  isHighlight?: boolean;
};

const FALLBACK_BLOGS: Blog[] = [
  {
    id: 1,
    title: "Compiling the Autonomous Cloud: Part 1",
    date: "2026-02-28",
    excerpt:
      "Why current managed services fail at the edge, and how deterministic infrastructure solves latency.",
    readTime: "8 min read",
    tag: "Architecture",
    url: "https://blogs.edgeopslabs.com/compiling-the-autonomous-cloud",
  },
  {
    id: 2,
    title: "Release Protocol v1.0.0",
    date: "2026-02-15",
    excerpt:
      "The stable release of the EdgeOps framework. Breaking changes, new APIs, and migration guides.",
    readTime: "12 min read",
    tag: "Release",
    url: "https://blogs.edgeopslabs.com/release-protocol-v1",
  },
  {
    id: 3,
    title: "The Future of Edge Computing",
    date: "2026-03-15",
    excerpt:
      "Exploring the next frontier of distributed computing and autonomous infrastructure.",
    readTime: "5 min read",
    tag: "Forward",
    url: "https://blogs.edgeopslabs.com/future-of-edge",
  },
];

export async function getLatestBlogs(): Promise<Blog[]> {
  try {
    const highlightBlogs = await fetchHighlightBlogs();
    if (highlightBlogs.length > 0) {
      return highlightBlogs;
    }
  } catch (error) {
    console.warn("Highlights fetch failed, falling back to RSS.", error);
  }

  try {
    const response = await fetch(FEED_URL);
    if (!response.ok) throw new Error("Network response was not ok");

    const xmlText = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "",
      textNodeName: "text",
      trimValues: true,
    });
    const parsed = parser.parse(xmlText);
    const channel = parsed?.rss?.channel;

    type RssItem = {
      title?: string;
      link?: string;
      pubDate?: string;
      description?: string;
      category?: string;
    };

    const rawItems = Array.isArray(channel?.item)
      ? channel.item
      : channel?.item
        ? [channel.item]
        : [];
    const itemsArray = rawItems as RssItem[];

    const fetchedBlogs: Blog[] = itemsArray.slice(0, 3).map((item, index) => {
      const title =
        typeof item.title === "string" ? item.title : "Untitled Transmission";
      const link =
        typeof item.link === "string" ? item.link : `${BLOG_BASE_URL}/post`;
      const pubDate = typeof item.pubDate === "string" ? item.pubDate : "";
      const description =
        typeof item.description === "string" ? item.description : "";
      const category =
        typeof item.category === "string" ? item.category : "Transmission";

      const cleanExcerpt =
        description.replace(/<[^>]*>/g, "").substring(0, 150) + "...";

      const dateObj = new Date(pubDate);
      const formattedDate = isNaN(dateObj.getTime())
        ? "RECENT_LOG"
        : dateObj.toISOString().split("T")[0];

      const wordCount = description ? description.split(/\s+/).length : 0;
      const readMinutes = Math.max(1, Math.ceil(wordCount / 200));

      return {
        id: `rss-${index}`,
        title,
        date: formattedDate,
        excerpt: cleanExcerpt,
        readTime: `${readMinutes} min read`,
        tag: category,
        url: link,
      };
    });

    if (fetchedBlogs.length === 0) return FALLBACK_BLOGS.slice(0, 3).reverse();

    return fetchedBlogs.reverse();
  } catch (error) {
    console.warn(
      "RSS fetch failed, using fallback logic. (Usually due to CORS in development)",
      error,
    );

    // Sort fallback descending by date then reverse to get [Oldest, Middle, Newest]
    const sorted = [...FALLBACK_BLOGS].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
    return sorted.slice(0, 3).reverse();
  }
}

async function fetchHighlightBlogs(): Promise<Blog[]> {
  const response = await fetch(HIGHLIGHTS_URL, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Failed to fetch highlight posts");
  }

  const payload = (await response.json()) as HighlightResponse;
  if (!payload || !payload.featured || payload.featured.length === 0) return [];

  // Use featured array (up to 3 posts mixing most read and latest)
  const highlights: HighlightDescriptor[] = payload.featured
    .slice(0, 3)
    .map((post, index) => {
      let badgeLabel: string | undefined;
      let badgeTone: "pulse" | "subtle" | undefined = undefined;

      if (index === 0) {
        // First post is the most read
        badgeLabel = "MOST READ";
        badgeTone = "pulse";
      } else if (index === 1) {
        // Second post is the latest
        badgeLabel = "LATEST";
        badgeTone = "subtle";
      } else if (index === 2) {
        // Third post is featured/recent
        badgeLabel = "FEATURED";
        badgeTone = "subtle";
      }

      return {
        post,
        badgeLabel,
        badgeTone,
        isHighlight: true,
      };
    });

  return highlights.map(({ post, ...meta }, index) =>
    mapHighlightPost(post, index, meta),
  );
}

function mapHighlightPost(
  post: HighlightPost,
  index: number,
  meta?: {
    badgeLabel?: string;
    badgeTone?: "pulse" | "subtle";
    isHighlight?: boolean;
  },
): Blog {
  const cleanExcerpt = (post.description || "").replace(/\s+/g, " ").trim();
  const excerpt =
    cleanExcerpt.length > 0
      ? `${cleanExcerpt.slice(0, 160)}${cleanExcerpt.length > 160 ? "..." : ""}`
      : "Latest transmission from EdgeOps Labs.";
  const readTime = post.readingTimeText?.trim() || "3 min read";

  return {
    id: `highlight-${post.slug}-${index}`,
    title: post.title || "Untitled Transmission",
    date: post.date || "RECENT_LOG",
    excerpt,
    readTime,
    tag: post.tags?.[0] || "Transmission",
    url: `${BLOG_BASE_URL}/post/${post.slug}`,
    impressions:
      typeof post.impressions === "number" ? post.impressions : undefined,
    badgeLabel: meta?.badgeLabel,
    badgeTone: meta?.badgeTone,
    isHighlight: meta?.isHighlight ?? true,
  };
}
