const CACHE_TTL_SECONDS = 60 * 60;

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export async function GET() {
  try {
    const statsUrl = getEnv("BOT_STATS_URL");
    const apiSecret = getEnv("BOT_API_SECRET");

    const response = await fetch(`${statsUrl.replace(/\/$/, "")}/stats`, {
      headers: {
        Authorization: apiSecret,
      },
      next: { revalidate: CACHE_TTL_SECONDS },
    });

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch stats" },
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
