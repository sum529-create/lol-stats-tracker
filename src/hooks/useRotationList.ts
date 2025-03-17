import { Champion } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList, getLatestVersion } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";

type RotationType = "freeChampionIds" | "freeChampionIdsForNewPlayers";
export const useRotationList = (type: RotationType) => {
  const {
    data: rotationData,
    isLoading: rotationLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["rotation"],
    queryFn: getChampionRotation,
  });

  const { data: championsData, isLoading: championsLoading } = useQuery({
    queryKey: ["champions"],
    queryFn: fetchChampionList,
  });

  const { data: version } = useQuery({
    queryKey: ["version"],
    queryFn: getLatestVersion,
  });

  const championsById: { [key: string]: Champion } = {};
  if (championsData) {
    Object.values(championsData).forEach((e: Champion) => {
      championsById[e.key] = e;
    });
  }

  // 로테이션 아이디와 조인
  const freeRotationChampions =
    rotationData?.[type].map((e: number) => championsById[e.toString()]) || [];

  const filterFreeRotationTop3 = [...freeRotationChampions].splice(0, 4);

  return {
    rotationLoading,
    championsLoading,
    isError,
    error,
    rotationData,
    championsData,
    freeRotationChampions,
    version,
    filterFreeRotationTop3,
  };
};
