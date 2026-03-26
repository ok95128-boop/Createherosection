import { Outlet } from "react-router";
import { GNB } from "./components/GNB";

/**
 * Root 레이아웃 컴포넌트
 * - GNB(전체 네비게이션 바)는 모든 페이지에 공통으로 표시됩니다
 * - Footer 등 공통 요소를 여기에 추가하세요
 */
export function Root() {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff", fontFamily: "'Noto Sans KR', sans-serif" }}>
      <GNB />
      <main>
        <Outlet />
      </main>
    </div>
  );
}