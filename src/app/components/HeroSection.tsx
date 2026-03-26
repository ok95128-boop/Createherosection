import { useNavigate } from "react-router";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Users } from "lucide-react";

/**
 * 히어로 배지 텍스트
 * - 상단에 표시되는 작은 강조 문구
 */
const HERO_BADGE = "자영업자 · 프리랜서 맞춤 세금 정보";

/**
 * 히어로 메인 헤드라인
 * - \n 으로 줄바꿈 가능
 */
const HERO_HEADLINE = "복잡한 세금,\n이제 쉽게\n이해하세요";

/**
 * 히어로 서브 설명 문구
 */
const HERO_DESCRIPTION =
  "종합소득세, 부가가치세, 경비처리까지 — 프리랜서와 자영업자가 꼭 알아야 할 세금 정보를 쉽고 정확하게 알려드립니다.";

/**
 * 히어로 CTA 버튼 설정
 * - primary: 메인 버튼
 * - secondary: 보조 버튼
 */
const CTA_BUTTONS = {
  primary: { label: "세금 정보 보러가기", path: "/articles" },
  secondary: { label: "무료 세무 상담", path: "/contact" },
};

/**
 * 히어로 체크리스트 항목
 * - 사용자에게 핵심 가치를 간결하게 전달
 */
const CHECKLIST_ITEMS = [
  "종합소득세 신고 가이드",
  "부가세 절세 방법",
  "사업자 경비처리 완벽 정리",
];

/**
 * 히어로 통계 카드 데이터
 * - 신뢰도를 높이는 수치 정보
 */
const STATS = [
  {
    id: "visitors",
    icon: Users,
    value: "52,000+",
    label: "월 방문자",
    color: "#3182F6",
  },
  {
    id: "articles",
    icon: TrendingUp,
    value: "200+",
    label: "세금 정보 아티클",
    color: "#00C7BE",
  },
  {
    id: "verified",
    icon: Shield,
    value: "100%",
    label: "전문가 검수 완료",
    color: "#FF6B35",
  },
];

/**
 * 플로팅 인포 카드 데이터
 * - 히어로 배경에 떠있는 세금 정보 미리보기 카드
 */
const FLOATING_CARDS = [
  {
    id: "vat",
    tag: "💡 절세 팁",
    title: "부가세 환급, 이렇게 받으세요",
    desc: "매입세액 공제로 최대 10% 환급 가능",
    color: "#3182F6",
  },
  {
    id: "income",
    tag: "📋 신고 가이드",
    title: "5월 종합소득세 신고 체크리스트",
    desc: "프리랜서 필수 서류 한눈에 보기",
    color: "#00C7BE",
  },
];

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "#ffffff",
        paddingTop: "80px", // GNB 높이만큼 offset
      }}
    >
      {/* 배경 그라디언트 블롭 */}
      <BackgroundBlobs />

      {/* 그리드 오버레이 */}
      <GridOverlay />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── 왼쪽: 텍스트 영역 ── */}
          <div className="flex flex-col gap-8">

            {/* 배지 */}
            <HeroBadge text={HERO_BADGE} />

            {/* 헤드라인 */}
            <h1
              className="whitespace-pre-line"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                color: "#1A1A1A",
                letterSpacing: "-0.02em",
              }}
            >
              {HERO_HEADLINE.split("\n").map((line, i) => (
                <span key={i}>
                  {i === 2 ? (
                    <span style={{ color: "#3182F6" }}>{line}</span>
                  ) : (
                    line
                  )}
                  {i < HERO_HEADLINE.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* 설명 */}
            <p
              style={{
                fontSize: "1.0625rem",
                color: "#6B6B6B",
                lineHeight: 1.75,
                maxWidth: "440px",
              }}
            >
              {HERO_DESCRIPTION}
            </p>

            {/* 체크리스트 */}
            <ul className="flex flex-col gap-3">
              {CHECKLIST_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} style={{ color: "#3182F6", flexShrink: 0 }} />
                  <span style={{ color: "#4A4A4A", fontSize: "0.9375rem" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA 버튼 그룹 */}
            <div className="flex flex-wrap gap-4 mt-2">
              <button
                onClick={() => navigate(CTA_BUTTONS.primary.path)}
                className="group flex items-center gap-2 px-7 py-4 rounded-xl font-medium transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #3182F6, #1A56DB)",
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  boxShadow: "0 8px 32px rgba(49, 130, 246, 0.35)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(49, 130, 246, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(49, 130, 246, 0.35)";
                }}
              >
                {CTA_BUTTONS.primary.label}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => navigate(CTA_BUTTONS.secondary.path)}
                className="flex items-center gap-2 px-7 py-4 rounded-xl font-medium transition-all duration-200"
                style={{
                  background: "#F5F5F5",
                  color: "#1A1A1A",
                  fontSize: "1rem",
                  border: "1px solid #E0E0E0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#EBEBEB";
                  e.currentTarget.style.borderColor = "#D0D0D0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F5F5F5";
                  e.currentTarget.style.borderColor = "#E0E0E0";
                }}
              >
                {CTA_BUTTONS.secondary.label}
              </button>
            </div>
          </div>

          {/* ── 오른쪽: 비주얼 영역 ── */}
          <div className="hidden lg:flex flex-col gap-5 items-end">
            {FLOATING_CARDS.map((card) => (
              <FloatingCard key={card.id} card={card} />
            ))}
          </div>
        </div>

        {/* 통계 섹션 */}
        <div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-5"
          style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "2.5rem" }}
        >
          {STATS.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>

      {/* 하단 그라디언트 페이드 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.8))",
        }}
      />
    </section>
  );
}

/* ────────────────────────────────────────────
   서브 컴포넌트들 (HeroSection 내부 전용)
──────────────────────────────────────────── */

function HeroBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 w-fit">
      <span
        className="px-4 py-2 rounded-full text-sm font-medium"
        style={{
          background: "rgba(49, 130, 246, 0.12)",
          color: "#6BAEFF",
          border: "1px solid rgba(49, 130, 246, 0.25)",
        }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full mr-2"
          style={{ background: "#3182F6", verticalAlign: "middle" }}
        />
        {text}
      </span>
    </div>
  );
}

function FloatingCard({
  card,
}: {
  card: { id: string; tag: string; title: string; desc: string; color: string };
}) {
  return (
    <div
      className="w-full max-w-sm rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: "#F9F9FB",
        border: "1px solid #E5E5E8",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
          style={{ background: `${card.color}18` }}
        >
          {card.tag.split(" ")[0]}
        </div>
        <div className="flex flex-col gap-1">
          <span
            className="text-xs font-medium"
            style={{ color: card.color }}
          >
            {card.tag.replace(/^\S+\s/, "")}
          </span>
          <p
            className="font-medium leading-snug"
            style={{ color: "#1A1A1A", fontSize: "0.9375rem" }}
          >
            {card.title}
          </p>
          <p
            style={{ color: "#7A7A7A", fontSize: "0.8125rem" }}
          >
            {card.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  stat,
}: {
  stat: { id: string; icon: React.ElementType; value: string; label: string; color: string };
}) {
  const Icon = stat.icon;
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${stat.color}15` }}
      >
        <Icon size={20} style={{ color: stat.color }} />
      </div>
      <div>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#1A1A1A",
            lineHeight: 1.2,
          }}
        >
          {stat.value}
        </p>
        <p style={{ color: "#7A7A7A", fontSize: "0.8125rem" }}>
          {stat.label}
        </p>
      </div>
    </div>
  );
}

/**
 * 배경 블롭 효과
 * - 부드러운 그라디언트 원형 빛 효과
 */
function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 왼쪽 상단 파란 블롭 */}
      <div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          top: "-100px",
          left: "-200px",
          background: "radial-gradient(circle, rgba(49,130,246,0.12) 0%, transparent 70%)",
        }}
      />
      {/* 오른쪽 중앙 청록 블롭 */}
      <div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          top: "20%",
          right: "-100px",
          background: "radial-gradient(circle, rgba(0,199,190,0.08) 0%, transparent 70%)",
        }}
      />
      {/* 하단 보라 블롭 */}
      <div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          bottom: "-50px",
          left: "40%",
          background: "radial-gradient(circle, rgba(99,91,255,0.07) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

/**
 * 배경 그리드 오버레이
 * - 미세한 도트/라인 패턴
 */
function GridOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}