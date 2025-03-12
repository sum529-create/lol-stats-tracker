"use client";
import { Champion, ChampionBasic } from "@/types/Champion";
import CardWrapper from "@/ui/CardWrapper";
import { fetchChampionList, fetchRotationsList } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ChampionsCard from "../champions/ChampionsCard";
import Loading from "@/app/loading";

type RotationType = "freeChampionIds" | "freeChampionIdsForNewPlayers";
const RotationList = ({ type }: { type: RotationType }) => {
  const {
    data: rotationData,
    isLoading: rotationLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["rotation"],
    queryFn: fetchRotationsList,
  });

  const { data: championsData, isLoading: championsLoading } = useQuery({
    queryKey: ["champions"],
    queryFn: fetchChampionList,
  });

  const championsById: { [key: string]: Champion } = {};
  if (championsData) {
    Object.values(championsData).forEach((e: Champion) => {
      championsById[e.key] = e;
    });
  }
  // 로테이션 아이디와 조인
  const freeRotationChampions = rotationData?.[type].map(
    (e: number) => championsById[e.toString()]
  );

  if (rotationLoading || championsLoading) return <Loading />;
  if (isError) return <div>에러 발생: {error.message}</div>;
  if (!rotationData || !championsData) return <div>데이터가 없습니다</div>;

  return (
    <CardWrapper>
      {freeRotationChampions?.map((champion: ChampionBasic, i: number) => (
        <ChampionsCard key={champion.key + i} champion={champion} />
      ))}
    </CardWrapper>
  );
};

export default RotationList;
