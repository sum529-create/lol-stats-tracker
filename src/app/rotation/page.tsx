import RotationList from "@/components/rotation/RotationList";
import MainWrapper from "@/ui/MainWrapper";
import Title from "@/ui/Title";
import React from "react";

const RotationPage = () => {
  return (
    <MainWrapper>
      <Title>챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)</Title>
      <RotationList type="freeChampionIds" />
      <div className="mt-25">
        <Title>신규 플레이어를 위한 무료 챔피언 로테이션</Title>
        <RotationList type="freeChampionIdsForNewPlayers" />
      </div>
    </MainWrapper>
  );
};

export default RotationPage;
