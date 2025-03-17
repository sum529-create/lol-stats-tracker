import { RIOT_GAMES_API_URL } from "@/constants/constants";
import { ChampionBasic } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChampionsCard = ({
  champion,
  version,
}: {
  champion: ChampionBasic;
  version: string;
}) => {
  return (
    <li className="bg-[var(--champions-card-bg-color)] rounded-2xl">
      <Link href={`/champions/${champion.id}`} className="block px-4 py-6">
        <div className="relative overflow-hidden my-0 mx-auto">
          <Image
            width={300}
            height={300}
            src={`${RIOT_GAMES_API_URL}/cdn/${version}/img/champion/${champion.image.full}`}
            alt={champion.name}
            loading="lazy"
            className="bg-[var(--champions-card-image-color)] transition-transform transform hover:scale-120"
          />
        </div>
        <p className="text-[var(--champions-card-title-color)] text-xl my-4 hover:text-[var(--champions-card-title-hover-color)]">
          {champion.name}
        </p>
        <p className="text-[var(--champions-card-sub-title-color)] hover:text-[var(--champions-card-sub-title-hover-color)]">
          {champion.title}
        </p>
      </Link>
    </li>
  );
};

export default ChampionsCard;
