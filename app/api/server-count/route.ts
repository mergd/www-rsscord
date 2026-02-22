const CACHE_TTL_SECONDS = 60 * 60;
const DEFAULT_STATS_URL = "https://simple-rss-disc-production.up.railway.app";
const DEFAULT_API_SECRET = "00000000-0000-0000-0000-000000000000";

export async function GET() {
  try {
    const statsUrl = process.env.BOT_STATS_URL ?? DEFAULT_STATS_URL;
    const apiSecret = process.env.BOT_API_SECRET ?? DEFAULT_API_SECRET;

    const response = await fetch(
      `${statsUrl.replace(/\/$/, "")}/server-count`,
      {
        headers: {
          Authorization: apiSecret,
        },
        next: { revalidate: CACHE_TTL_SECONDS },
      },
    );

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch server count" },
        {
          status: response.status,
          headers: {
            "Cache-Control": `public, s-maxage=60, stale-while-revalidate=${CACHE_TTL_SECONDS}`,
          },
        },
      );
    }

    const data = (await response.json()) as { guilds?: number };
    const guilds = typeof data.guilds === "number" ? data.guilds : 0;

    return Response.json(
      { guilds },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${CACHE_TTL_SECONDS}, stale-while-revalidate=86400`,
        },
      },
    );
  } catch {
    return Response.json(
      { error: "Server count unavailable" },
      {
        status: 500,
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      },
    );
  }
}
