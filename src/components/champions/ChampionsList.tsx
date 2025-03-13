import React, { use } from "react";
import ChampionsCard from "./ChampionsCard";
import { ChampionBasic } from "@/types/Champion";
import CardWrapper from "@/ui/CardWrapper";
import { getLatestVersion } from "@/utils/serverApi";

const ChampionsList = ({
  championsList,
}: {
  championsList: ChampionBasic[];
}) => {
  const version = use(getLatestVersion());
  return (
    <CardWrapper>
      {championsList?.map((champion, i) => (
        <ChampionsCard
          key={champion.key + i}
          version={version}
          champion={champion}
        />
      ))}
    </CardWrapper>
  );
};

export default ChampionsList;
