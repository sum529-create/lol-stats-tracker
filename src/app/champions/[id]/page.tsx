import ChampionDetailClient from "@/components/champions/ChampionsDetailClient";
import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import React, { use } from "react";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const champion = await fetchChampionDetail(id);
  return {
    title: `${champion.title + " " + champion.name}의 상세 페이지`,
    description: `${champion.lore}`,
  };
}

const ChampionDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const champion = use(fetchChampionDetail(id as string));

  return <ChampionDetailClient data={champion} />;
};

export default ChampionDetail;
