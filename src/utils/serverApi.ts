import { ChampionBasic, ChampionDetail } from "@/types/Champion";

export const fetchChampionList = async (): Promise<ChampionBasic[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CHAMPION_API_URL}/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const data = await res.json();

  return data?.data;
};

export const fetchChampionDetail = async (
  imageName: string
): Promise<ChampionDetail> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CHAMPION_API_URL}/champion/${imageName}.json`
  );
  const data = await res.json();

  // 예시로 data.data 안에 imageName이 없다면?
  const championImage = data?.data?.[imageName];

  if (!championImage) {
    console.error("No imageName found.");
  }

  return championImage;
};
