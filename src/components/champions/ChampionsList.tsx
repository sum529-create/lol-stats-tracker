"use client";
import React from "react";
import ChampionsCard from "./ChampionsCard";
import { ChampionBasic } from "@/types/Champion";
import CardWrapper from "@/ui/CardWrapper";

const ChampionsList = ({
  championsList,
}: {
  championsList: ChampionBasic[];
}) => {
  return (
    <CardWrapper>
      {championsList?.map((champion, i) => (
        <ChampionsCard key={champion.key + i} champion={champion} />
      ))}
    </CardWrapper>
  );
};

export default ChampionsList;
