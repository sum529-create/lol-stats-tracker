import { RIOT_GAMES_API_URL } from "@/constants/constants";
import { Item } from "@/types/Item";
import itemDescription from "@/utils/sanitizeText";
import { getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import React, { use } from "react";

const ItemCard = ({ item }: { item: Item }) => {
  const version = use(getLatestVersion());
  return (
    <li className="bg-[#4A4E4D] rounded-2xl hover:scale-115 hover:transition-all px-4 py-6">
      <Image
        width={300}
        height={300}
        src={`${RIOT_GAMES_API_URL}/cdn/${version}/img/item/${item.image.full}`}
        alt={item.name}
        loading="lazy"
        className="bg-[#767a79] my-0 mx-auto"
      />
      <p className="text-[#dedede] text-xl my-4">
        {itemDescription({ description: item.name })}
      </p>
      <p className="text-[#aeaeae]">
        {itemDescription({ description: item.plaintext })}
      </p>
      <p className="text-[#aeaeae]">
        {itemDescription({ description: item.description })}
      </p>
    </li>
  );
};

export default ItemCard;
