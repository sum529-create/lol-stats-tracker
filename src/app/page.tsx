import MainChampions from "@/components/MainChampions";
import { FeatureCard } from "@/ui/MainFeatureCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-[1200px] mx-auto text-center">
      {/* 히어로 섹션 */}
      <div className="relative rounded-xl overflow-hidden mb-12 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] z-10"></div>
        <div className="relative w-full h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#091428] to-[#0A1428]"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 p-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            리그 오브 레전드 정보 앱
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            챔피언, 아이템, 그리고 게임 정보를 한눈에! Riot Games API를 활용한
            정보 허브에 오신 것을 환영합니다.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://www.leagueoflegends.com/ko-kr/"
              className="bg-[#B33A3A] hover:bg-[#892f2f] text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              홈페이지로 이동
            </Link>
          </div>
        </div>
      </div>
      {/* 주요 기능 섹션 */}
      <div>
        <h2 className="text-3xl font-bold mb-8">주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            title="챔피언 정보"
            description="160개 이상의 챔피언들의 스킬, 스토리, 스킨 정보를 확인하세요."
            icon="👑"
            href="/champions"
          />
          <FeatureCard
            title="아이템 가이드"
            description="모든 아이템의 효과와 가격, 빌드 경로를 알아보세요."
            icon="🛡️"
            href="/items"
          />
          <FeatureCard
            title="로테이션 챔피언"
            description="이번 주 무료 플레이 가능한 챔피언을 확인하세요."
            icon="🔄"
            href="/rotation"
          />
        </div>
      </div>
      {/* 추천 챔피언 섹션 */}
      <MainChampions />
    </div>
  );
}
