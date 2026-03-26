/**
 * 자주 묻는 질문 페이지
 * - 세금 관련 FAQ 항목들을 아코디언 형태로 추가하세요
 */
export function FAQPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#ffffff" }}
    >
      <div className="text-center px-6">
        <p
          className="px-4 py-2 rounded-full text-sm font-medium inline-block mb-6"
          style={{
            background: "rgba(255, 107, 53, 0.12)",
            color: "#FF6B35",
            border: "1px solid rgba(255, 107, 53, 0.25)",
          }}
        >
          준비 중
        </p>
        <h1
          style={{
            fontSize: "2.25rem",
            fontWeight: 800,
            color: "#1A1A1A",
            lineHeight: 1.3,
          }}
        >
          자주 묻는 질문
        </h1>
        <p className="mt-4" style={{ color: "#6B6B6B", fontSize: "1rem" }}>
          프리랜서와 자영업자가 자주 묻는 세금 질문 모음을 곧 제공할 예정입니다.
        </p>
      </div>
    </div>
  );
}