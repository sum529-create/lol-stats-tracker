import React from "react";
import ChampionsCard from "./ChampionsCard";
import { ChampionBasic } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import CardWrapper from "@/ui/CardWrapper";

const ChampionsList = () => {
  const [championsList, setChampionsList] = useState<ChampionBasic[]>([]);
  const { data, isFetching, isError } = useQuery({
    queryKey: ["champions"],
    queryFn: fetchChampionList,
  });
  useEffect(() => {
    if (data) {
      const championArr: ChampionBasic[] = Object.values(data).map(
        (e) => e as ChampionBasic
      );

      setChampionsList((prev) => [...prev, ...championArr]);
    }
  }, [data]);
  if (isFetching) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error loading champions.</div>;
  }
  return (
    <CardWrapper>
      {championsList?.map((champion, i) => (
        <ChampionsCard key={champion.key + i} champion={champion} />
      ))}
    </CardWrapper>
  );
};

export default ChampionsList;
