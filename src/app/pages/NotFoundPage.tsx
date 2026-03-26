import { useNavigate } from "react-router";

/**
 * 404 Not Found 페이지
 */
export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#ffffff" }}
    >
      <div className="text-center px-6">
        <p
          style={{
            fontSize: "5rem",
            fontWeight: 900,
            color: "rgba(0,0,0,0.06)",
            lineHeight: 1,
          }}
        >
          404
        </p>
        <h1
          className="mt-4"
          style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "#1A1A1A",
          }}
        >
          페이지를 찾을 수 없어요
        </h1>
        <p className="mt-3" style={{ color: "#6B6B6B" }}>
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-3 rounded-xl font-medium transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #3182F6, #1A56DB)",
            color: "#FFFFFF",
          }}
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}