import { CHAMPION_IMG_URL } from "@/constants/constants";
import { ChampionBasic } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChampionsCard = ({ champion }: { champion: ChampionBasic }) => {
  return (
    <li className="bg-[#4A4E4D] rounded-2xl hover:scale-115 hover:transition-all">
      <Link href={`/champions/${champion.id}`} className="block px-4 py-6 ">
        <Image
          width={300}
          height={300}
          src={`${CHAMPION_IMG_URL}/${champion.image.full}`}
          alt={champion.name}
          loading="lazy"
        />
        <p className="text-[#dedede] text-xl my-4">{champion.name}</p>
        <p className="text-[#aeaeae]">{champion.title}</p>
      </Link>
    </li>
  );
};

export default ChampionsCard;
