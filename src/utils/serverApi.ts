import { RIOT_GAMES_API_URL, ROTATION_API_URL } from "@/constants/constants";
import { ChampionBasic, ChampionDetail } from "@/types/Champion";

const DEFAULT_LANGUAGE = "ko_KR";

// 최신 버전 불러오기
const getLatestVersion = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data = await res.json();
  return data[0];
};

// 챔피언 데이터 리스트
export const fetchChampionList = async (): Promise<ChampionBasic[]> => {
  const version = await getLatestVersion();
  const res = await fetch(
    `${RIOT_GAMES_API_URL}/cdn/${version}/data/${DEFAULT_LANGUAGE}/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const data = await res.json();

  return data?.data;
};

// 챔피언 데이터 상세
export const fetchChampionDetail = async (
  imageName: string
): Promise<ChampionDetail> => {
  const version = await getLatestVersion();
  const res = await fetch(
    `${RIOT_GAMES_API_URL}/cdn/${version}/data/${DEFAULT_LANGUAGE}/champion/${imageName}.json`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  const championImage = data?.data?.[imageName];

  if (!championImage) {
    console.error("No imageName found.");
  }

  return championImage;
};

// 아이템 데이터 리스트
export const fetchItemsList = async () => {
  const version = await getLatestVersion();
  const res = await fetch(
    `${RIOT_GAMES_API_URL}/cdn/${version}/data/${DEFAULT_LANGUAGE}/item.json`
  );
  const data = await res.json();

  return data?.data;
};

// 챔피언 로테이션 리스트
export const fetchRotationsList = async () => {
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
  return data;
};
