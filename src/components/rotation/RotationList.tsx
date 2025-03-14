"use client";
import { ChampionBasic } from "@/types/Champion";
import CardWrapper from "@/ui/CardWrapper";
import React from "react";
import ChampionsCard from "../champions/ChampionsCard";
import Loading from "@/app/loading";
import { useRotationList } from "@/hooks/useRotationList";

type RotationType = "freeChampionIds" | "freeChampionIdsForNewPlayers";
const RotationList = ({ type }: { type: RotationType }) => {
  const {
    rotationLoading,
    championsLoading,
    isError,
    error,
    rotationData,
    championsData,
    freeRotationChampions,
    version,
  } = useRotationList(type);

  if (rotationLoading || championsLoading) return <Loading />;
  if (isError) return <div>에러 발생: {error?.message}</div>;
  if (!rotationData || !championsData) return <div>데이터가 없습니다</div>;

  return (
    <CardWrapper>
      {freeRotationChampions?.map((champion: ChampionBasic, i: number) => (
        <ChampionsCard
          key={champion.key + i}
          champion={champion}
          version={version}
        />
      ))}
    </CardWrapper>
  );
};

export default RotationList;
