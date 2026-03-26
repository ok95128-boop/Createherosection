/**
 * 문의하기 / 세무사 연결 페이지
 * - 세무사 연결 폼, 외부 서비스 링크 등을 여기에 추가하세요
 */
export function ContactPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#ffffff" }}
    >
      <div className="text-center px-6">
        <p
          className="px-4 py-2 rounded-full text-sm font-medium inline-block mb-6"
          style={{
            background: "rgba(49, 130, 246, 0.12)",
            color: "#3182F6",
            border: "1px solid rgba(49, 130, 246, 0.25)",
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
          세무사 연결하기
        </h1>
        <p className="mt-4" style={{ color: "#6B6B6B", fontSize: "1rem" }}>
          전문 세무사와 1:1 상담 연결 서비스를 곧 제공할 예정입니다.
        </p>
      </div>
    </div>
  );
}