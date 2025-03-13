import ItemsList from "@/components/items/ItemsList";
import MainWrapper from "@/ui/MainWrapper";
import Title from "@/ui/Title";
import { fetchItemsList } from "@/utils/serverApi";
import React, { Suspense, use } from "react";
import Loading from "../loading";

const ItemsContent = () => {
  const items = use(fetchItemsList());
  return (
    <>
      {items ? (
        <ItemsList data={items} />
      ) : (
        <div>아이템 데이터를 불러올 수 없습니다.</div>
      )}
    </>
  );
};

const ItemsPage = async () => {
  return (
    <MainWrapper>
      <Title>아이템 목록</Title>
      <Suspense fallback={<Loading />}>
        <ItemsContent />
      </Suspense>
    </MainWrapper>
  );
};

export default ItemsPage;
