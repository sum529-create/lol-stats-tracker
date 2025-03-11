import { ChampionBasic } from "@/types/Champion";

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
): Promise<ChampionBasic> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CHAMPION_API_URL}/champion/${imageName}.json`
  );
  const data = await res.json();
  return data;
};
