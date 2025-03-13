import ChampionDetailClient from "@/components/champions/ChampionsDetailClient";
import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import React, { use } from "react";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params?.id;
  const champion = await fetchChampionDetail(id);
  if (!champion) {
    return {
      title: "알 수 없는 챔피언",
      description: "챔피언 정보가 없습니다",
    };
  }

  return {
    title: `${champion.title + " " + champion.name}의 상세 페이지`,
    description: `${champion.lore}`,
  };
}

const ChampionDetail = ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  const champion = use(fetchChampionDetail(id as string));

  if (!champion) {
    return <p>챔피언 상세 정보 호출에 실패하였습니다.</p>;
  }

  return <ChampionDetailClient data={champion} />;
};

export default ChampionDetail;
