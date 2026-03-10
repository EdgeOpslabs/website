import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = request.nextUrl.searchParams.get("url");

    if (!url) {
        return new NextResponse("Missing url parameter", { status: 400 });
    }

    // Only allow Google Drive / googleusercontent proxying for security
    const allowed = [
        "lh3.googleusercontent.com",
        "drive.google.com",
        "drive.usercontent.google.com",
    ];

    try {
        const parsed = new URL(url);
        if (!allowed.some((domain) => parsed.hostname.endsWith(domain))) {
            return new NextResponse("URL not allowed", { status: 403 });
        }
    } catch {
        return new NextResponse("Invalid URL", { status: 400 });
    }

    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (compatible; EdgeOpsLabs/1.0)",
            },
        });

        if (!response.ok) {
            return new NextResponse("Failed to fetch image", {
                status: response.status,
            });
        }

        const contentType = response.headers.get("content-type") ?? "image/jpeg";
        const buffer = await response.arrayBuffer();

        return new NextResponse(buffer, {
            status: 200,
            headers: {
                "Content-Type": contentType,
                "Cache-Control": "public, max-age=86400",
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch {
        return new NextResponse("Proxy error", { status: 500 });
    }
}
