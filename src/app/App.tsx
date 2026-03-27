import { RouterProvider } from "react-router";
import { router } from "./routes";

/**
 * 앱 진입점
 * - 라우팅은 /src/app/routes.ts 에서 관리합니다
 * - 공통 레이아웃(GNB 등)은 /src/app/Root.tsx 에서 관리합니다
 */
export default function App() {
  return <RouterProvider router={router} />;
}
