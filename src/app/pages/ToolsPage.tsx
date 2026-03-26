/**
 * 세금 계산기 페이지
 * - 종합소득세 계산기, 부가세 계산기 등을 여기에 추가하세요
 */
export function ToolsPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#ffffff" }}
    >
      <div className="text-center px-6">
        <p
          className="px-4 py-2 rounded-full text-sm font-medium inline-block mb-6"
          style={{
            background: "rgba(0, 199, 190, 0.12)",
            color: "#00C7BE",
            border: "1px solid rgba(0, 199, 190, 0.25)",
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
          세금 계산기
        </h1>
        <p className="mt-4" style={{ color: "#6B6B6B", fontSize: "1rem" }}>
          종합소득세, 부가가치세 계산기를 곧 제공할 예정입니다.
        </p>
      </div>
    </div>
  );
}