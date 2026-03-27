import { useNavigate } from "react-router";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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
          <div className="hidden lg:flex flex-col justify-center items-center">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                width: "500px",
                height: "300px",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1591522810633-3363f115af87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBhY2NvdW50aW5nJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc0NTc1MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="세무 서비스 배너"
                width={500}
                height={300}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {/* 배너 오버레이 */}
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(49, 130, 246, 0.85), rgba(26, 86, 219, 0.85))",
                }}
              >
                <h3
                  style={{
                    color: "#FFFFFF",
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    textAlign: "center",
                    marginBottom: "0.75rem",
                    textShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  }}
                >
                  전문 세무사와 1:1 상담
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.95)",
                    fontSize: "1rem",
                    textAlign: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  5월 종합소득세 신고 완벽 대비
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-200"
                  style={{
                    background: "#FFFFFF",
                    color: "#3182F6",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  무료 상담 신청하기
                </button>
              </div>
            </div>
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
