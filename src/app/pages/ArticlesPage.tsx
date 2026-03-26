/**
 * 세금 정보 페이지
 * - 종합소득세, 부가세, 절세 팁 등 아티클 목록 페이지
 * - 추후 카테고리 필터, 검색, 페이지네이션 등을 여기에 추가하세요
 */
export function ArticlesPage() {
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
          세금 정보 아티클
        </h1>
        <p className="mt-4" style={{ color: "#6B6B6B", fontSize: "1rem" }}>
          종합소득세, 부가세, 절세 팁 등 다양한 세금 정보를 곧 제공할 예정입니다.
        </p>
      </div>
    </div>
  );
}