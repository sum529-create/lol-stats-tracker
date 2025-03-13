import { RIOT_GAMES_API_URL } from "@/constants/constants";
import { ChampionBasic, ChampionDetail } from "@/types/Champion";

const DEFAULT_LANGUAGE = "ko_KR";

// 최신 버전 불러오기
export const getLatestVersion = async () => {
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
