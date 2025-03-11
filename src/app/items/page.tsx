import ItemsList from "@/components/items/ItemsList";
import MainWrapper from "@/ui/MainWrapper";
import Title from "@/ui/Title";
import React from "react";

const ItemsPage = () => {
  return (
    <MainWrapper>
      <Title>아이템 목록</Title>
      <ItemsList />
    </MainWrapper>
  );
};

export default ItemsPage;
