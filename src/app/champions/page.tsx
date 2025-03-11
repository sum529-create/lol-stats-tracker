"use client";

import ChampionsList from "@/components/champions/ChampionsList";

const ChampionsPage = () => {
  return (
    <div className="flex-1 self-start">
      <h3 className="text-[#dedede] text-3xl my-4">챔피언 목록</h3>
      <ChampionsList />
    </div>
  );
};

export default ChampionsPage;
