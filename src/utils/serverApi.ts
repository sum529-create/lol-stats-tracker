import { RIOT_GAMES_API_URL } from "@/constants/constants";
import { ChampionBasic, ChampionDetail } from "@/types/Champion";

const DEFAULT_LANGUAGE = "ko_KR";

// 최신 버전 불러오기
export const getLatestVersion = async () => {
  try {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch versions: ${res.status}`);
    }

    const data = await res.json();
    return data[0]; // 최신 버전 반환
  } catch (error) {
    console.error("Error fetching latest version:", error);
    return "default_version"; // 기본값 설정
  }
};

// 챔피언 데이터 리스트
export const fetchChampionList = async (): Promise<ChampionBasic[]> => {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `${RIOT_GAMES_API_URL}/cdn/${version}/data/${DEFAULT_LANGUAGE}/champion.json`,
      {
        next: {
          revalidate: 86400,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch champion list: ${res.status}`);
    }

    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching champion list:", error);
    return [];
  }
};

// 챔피언 데이터 상세
export const fetchChampionDetail = async (
  imageName: string
): Promise<ChampionDetail | null> => {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `${RIOT_GAMES_API_URL}/cdn/${version}/data/${DEFAULT_LANGUAGE}/champion/${imageName}.json`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch champion detail: ${res.status}`);
    }

    const data = await res.json();
    const championImage = data?.data?.[imageName];

    if (!championImage) {
      console.error("Champion detail not found.");
      return null;
    }

    return championImage;
  } catch (error) {
    console.error("Error fetching champion detail:", error);
    return null;
  }
};

// 아이템 데이터 리스트
export const fetchItemsList = async () => {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `${RIOT_GAMES_API_URL}/cdn/${version}/data/${DEFAULT_LANGUAGE}/item.json`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch items: ${res.status}`);
    }

    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching item list:", error);
    return [];
  }
};
