import ItemsList from "@/components/items/ItemsList";
import MainWrapper from "@/ui/MainWrapper";
import Title from "@/ui/Title";
import { fetchItemsList } from "@/utils/serverApi";
import React from "react";

const ItemsPage = async () => {
  const items = await fetchItemsList();

  return (
    <MainWrapper>
      <Title>아이템 목록</Title>
      {items?.length ? (
        <ItemsList data={items} />
      ) : (
        <div>아이템 데이터를 불러올 수 없습니다.</div>
      )}
    </MainWrapper>
  );
};

export default ItemsPage;
