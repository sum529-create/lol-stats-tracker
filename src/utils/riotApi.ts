// 챔피언 로테이션 리스트
export const getChampionRotation = async () => {
  const res = await fetch("api/rotation");
  const data = await res.json();
  return data;
};
