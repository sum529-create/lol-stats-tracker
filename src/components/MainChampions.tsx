"use client";
import { RIOT_GAMES_API_URL } from "@/constants/constants";
import { useRotationList } from "@/hooks/useRotationList";
import { ChampionBasic } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainChampions = () => {
  const { filterFreeRotationTop3, version } =
    useRotationList("freeChampionIds");
  console.log(filterFreeRotationTop3);

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6">추천 챔피언</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filterFreeRotationTop3?.map((champion: ChampionBasic) => (
          <Link
            key={champion.id}
            href={`/champions/${champion.id}`}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="aspect-square relative bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-[#091428] to-[#0A1428]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl font-bold text-white/80">
                  <Image
                    width={200}
                    height={200}
                    src={`${RIOT_GAMES_API_URL}/cdn/${version}/img/champion/${champion.image.full}`}
                    alt={champion.name}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
              <div className="absolute bottom-3 left-3 text-white font-medium text-lg">
                {champion.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainChampions;
