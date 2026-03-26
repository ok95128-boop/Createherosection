import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { ToolsPage } from "./pages/ToolsPage";
import { FAQPage } from "./pages/FAQPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

/**
 * 라우트 설정
 * - 새 페이지 추가 시 여기에 경로와 컴포넌트를 추가하세요
 * - path: URL 경로
 * - Component: 해당 경로에서 렌더링할 컴포넌트
 */
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "articles", Component: ArticlesPage },
      { path: "tools", Component: ToolsPage },
      { path: "faq", Component: FAQPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);