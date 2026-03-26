import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { Menu, X, FileText } from "lucide-react";

/**
 * GNB 네비게이션 메뉴 항목 설정
 * - 새 페이지 추가 시 이 배열에 항목을 추가하세요
 * - label: 메뉴에 표시될 텍스트
 * - path: React Router 경로
 */
const NAV_ITEMS = [
  { label: "홈", path: "/" },
  { label: "세금 정보", path: "/articles" },
  { label: "세금 계산기", path: "/tools" },
  { label: "자주 묻는 질문", path: "/faq" },
  { label: "문의하기", path: "/contact" },
] as const;

export function GNB() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // 스크롤 감지 → GNB 배경 변경
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 모바일 메뉴 열릴 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled
            ? "rgba(255, 255, 255, 0.92)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* 로고 */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 group"
              aria-label="홈으로 이동"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #3182F6, #1A56DB)" }}
              >
                <FileText size={16} color="white" strokeWidth={2.5} />
              </div>
              <span
                className="tracking-tight"
                style={{ color: "#1A1A1A", fontSize: "1.1rem", fontWeight: 700 }}
              >
                세금노트
              </span>
            </button>

            {/* 데스크탑 네비게이션 */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                      isActive
                        ? "text-[#3182F6]"
                        : "text-gray-600 hover:text-[#1A1A1A] hover:bg-gray-50"
                    }`
                  }
                  style={({ isActive }) =>
                    isActive ? { color: "#3182F6", fontWeight: 600 } : {}
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA 버튼 (데스크탑) */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => navigate("/contact")}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #3182F6, #1A56DB)",
                  color: "#FFFFFF",
                  fontSize: "0.875rem",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                세무사 연결하기
              </button>
            </div>

            {/* 모바일 햄버거 버튼 */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "#1A1A1A" }}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(255, 255, 255, 0.98)", backdropFilter: "blur(20px)" }}
        >
          <div className="flex flex-col h-full pt-20 px-6 pb-8">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-4 rounded-xl text-base transition-all duration-200 ${
                      isActive ? "bg-gray-100" : "hover:bg-gray-50"
                    }`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? "#3182F6" : "#1A1A1A",
                    fontWeight: isActive ? 600 : 400,
                  })}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/contact");
                }}
                className="w-full py-4 rounded-xl text-base font-medium"
                style={{
                  background: "linear-gradient(135deg, #3182F6, #1A56DB)",
                  color: "#FFFFFF",
                }}
              >
                세무사 연결하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}