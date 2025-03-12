"use client";
import { fetchRotationsList } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const RotationList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["rotation"],
    queryFn: fetchRotationsList,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러 발생: {error.message}</div>;
  if (!data) return <div>데이터가 없습니다</div>;

  console.log(data);

  return <div>RotationList</div>;
};

export default RotationList;
