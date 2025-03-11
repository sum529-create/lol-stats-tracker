"use client";

import ChampionsList from "@/components/champions/ChampionsList";
import MainWrapper from "@/ui/MainWrapper";
import Title from "@/ui/Title";

const ChampionsPage = () => {
  return (
    <MainWrapper>
      <Title>챔피언 목록</Title>
      <ChampionsList />
    </MainWrapper>
  );
};

export default ChampionsPage;
