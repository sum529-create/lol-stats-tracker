import Link from "next/link";

type featureCard = {
  title: string;
  description: string;
  icon: string;
  href: string;
};
// 기능 카드 컴포넌트
export function FeatureCard({ title, description, icon, href }: featureCard) {
  return (
    <Link
      href={href}
      className="bg-[var(--home-feature-card-bg)] hover:bg-[var(--home-feature-card-hover)] border border-[var(--home-feature-card-border)] p-6 rounded-xl transition-colors group"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#B33A3A] transition-colors">
        {title}
      </h3>
      <p className="text-sm md:text-base text-[var(--home-feature-card-text)]">
        {description}
      </p>
    </Link>
  );
}
