"use client";
import { Item } from "@/types/Item";
import CardWrapper from "@/ui/CardWrapper";
import React from "react";
import ItemCard from "./ItemCard";

type ItemList = {
  data: Item[];
};

const ItemsList = ({ data }: ItemList) => {
  const itemsListArr: Item[] = data
    ? (Object.values(data) as Item[]).map((e) => e as Item)
    : [];

  return (
    <CardWrapper>
      {itemsListArr?.map((item: Item) => (
        <ItemCard key={item.image.full} item={item} />
      ))}
    </CardWrapper>
  );
};

export default ItemsList;
