"use client";
import Loading from "@/app/loading";
import { Item } from "@/types/Item";
import CardWrapper from "@/ui/CardWrapper";
import { fetchItemsList } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ItemCard from "./ItemCard";

const ItemsList = () => {
  const { data, isFetching, error } = useQuery({
    queryKey: ["items"],
    queryFn: fetchItemsList,
  });
  if (isFetching) return <Loading />;
  if (error) return <div>error occur</div>;

  const itemsListArr: Item[] = data
    ? (Object.values(data) as Item[]).map((e) => e as Item)
    : [];

  console.log(itemsListArr);

  return (
    <CardWrapper>
      {itemsListArr?.map((item: Item) => (
        <ItemCard key={item.image.full} item={item} />
      ))}
    </CardWrapper>
  );
};

export default ItemsList;
