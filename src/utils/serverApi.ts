import { CHAMPION_API_URL } from "@/constants/constants";
import { ChampionBasic, ChampionDetail } from "@/types/Champion";

// 챔피언 데이터 리스트
export const fetchChampionList = async (): Promise<ChampionBasic[]> => {
  const res = await fetch(`${CHAMPION_API_URL}/champion.json`, {
    next: {
      revalidate: 86400,
    },
  });
  const data = await res.json();

  return data?.data;
};

// 챔피언 데이터 상세
export const fetchChampionDetail = async (
  imageName: string
): Promise<ChampionDetail> => {
  const res = await fetch(`${CHAMPION_API_URL}/champion/${imageName}.json`);
  const data = await res.json();

  const championImage = data?.data?.[imageName];

  if (!championImage) {
    console.error("No imageName found.");
  }

  return championImage;
};

// 아이템 데이터 리스트
export const fetchItemsList = async () => {
  // const res = await fetch('')
};
