import ChampionsList from "@/components/champions/ChampionsList";
import { ChampionBasic } from "@/types/Champion";
import MainWrapper from "@/ui/MainWrapper";
import Title from "@/ui/Title";
import { fetchChampionList, getLatestVersion } from "@/utils/serverApi";
import { use } from "react";

const ChampionsPage = () => {
  const data = use(fetchChampionList());
  const championsList: ChampionBasic[] = data
    ? Object.values(data).map((e) => e as ChampionBasic)
    : [];
  const version = use(getLatestVersion());

  return (
    <MainWrapper>
      <Title>챔피언 목록</Title>
      <ChampionsList championsList={championsList} version={version} />
    </MainWrapper>
  );
};

export default ChampionsPage;
