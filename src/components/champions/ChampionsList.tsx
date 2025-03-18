"use client";
import React, { useEffect, useState } from "react";
import ChampionsCard from "./ChampionsCard";
import { Champion } from "@/types/Champion";
import CardWrapper from "@/ui/CardWrapper";
import { Input } from "@/components/ui/input";

type ChampionsList = {
  championsList: Champion[];
  version: string;
};
const ChampionsList = ({ championsList, version }: ChampionsList) => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<Champion[]>([]);
  useEffect(() => {
    const filteredChampions = championsList.filter((champion) =>
      champion.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(filteredChampions);
  }, [search]);

  return (
    <>
      <div className="flex w-full items-center justify-center p-4 my-4 box-border">
        <Input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="검색하실 챔피언 이름을 입력해주세요."
          className="w-full px-6 py-2 rounded-full bg-gray-200 text-[var(--champions-list-search-input-text)] focus:ring-4 focus:ring-blue-500 focus:outline-none shadow-lg transition duration-300 ease-in-out placeholder:text-gray-500 leading-4"
        />
      </div>
      <CardWrapper>
        {search
          ? searchList?.map((champion, i) => (
              <ChampionsCard
                key={champion.key + i}
                version={version}
                champion={champion}
              />
            ))
          : championsList?.map((champion, i) => (
              <ChampionsCard
                key={champion.key + i}
                version={version}
                champion={champion}
              />
            ))}
      </CardWrapper>
    </>
  );
};

export default ChampionsList;
