import { ITEMS_URL } from "@/constants/constants";
import { Item } from "@/types/Item";
import Image from "next/image";
import React from "react";

const ItemCard = ({ item }: { item: Item }) => {
  return (
    <li className="bg-[#4A4E4D] rounded-2xl hover:scale-115 hover:transition-all px-4 py-6">
      <Image
        width={300}
        height={300}
        src={`${ITEMS_URL}/${item.image.full}`}
        alt={item.name}
        loading="lazy"
        className="bg-[#767a79]"
      />
      <p className="text-[#dedede] text-xl my-4">{item.name}</p>
      <p className="text-[#aeaeae]">{item.plaintext}</p>
    </li>
  );
};

export default ItemCard;
