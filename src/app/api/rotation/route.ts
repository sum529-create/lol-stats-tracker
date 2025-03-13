import { ROTATION_API_URL } from "@/constants/constants";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${ROTATION_API_URL}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        Origin: "https://developer.riotgames.com",
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY ?? "",
      },
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
