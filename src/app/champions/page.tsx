import ChampionsList from "@/components/champions/ChampionsList";
import { ChampionBasic } from "@/types/Champion";
import MainWrapper from "@/ui/MainWrapper";
import Title from "@/ui/Title";
import { fetchChampionList } from "@/utils/serverApi";

const ChampionsPage = async () => {
  const data = await fetchChampionList();
  const championsList: ChampionBasic[] = data
    ? Object.values(data).map((e) => e as ChampionBasic)
    : [];

  return (
    <MainWrapper>
      <Title>챔피언 목록</Title>
      <ChampionsList championsList={championsList} />
    </MainWrapper>
  );
};

export default ChampionsPage;
