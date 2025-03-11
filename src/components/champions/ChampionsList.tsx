import React from "react";
import ChampionsCard from "./ChampionsCard";
import { ChampionBasic } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/app/loading";
import CardWrapper from "@/ui/CardWrapper";

const ChampionsList = () => {
  const { data, isFetching, isError } = useQuery({
    queryKey: ["champions"],
    queryFn: fetchChampionList,
  });

  if (isFetching) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error loading champions.</div>;
  }

  const championsList: ChampionBasic[] = data
    ? Object.values(data).map((e) => e as ChampionBasic)
    : [];

  return (
    <CardWrapper>
      {championsList?.map((champion, i) => (
        <ChampionsCard key={champion.key + i} champion={champion} />
      ))}
    </CardWrapper>
  );
};

export default ChampionsList;
