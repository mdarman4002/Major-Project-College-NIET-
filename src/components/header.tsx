import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { useLocation, NavLink } from "react-router-dom";
import { NavigationRoutes } from "./navigation-routes";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";
import { Sparkles } from "lucide-react"; // Sparkle icon

const Header = () => {
  const { userId } = useAuth();
  const location = useLocation();
  const isOnGeneratePage = location.pathname === "/generate";

  return (
    <header
      className={cn(
        "w-full border-b duration-150 transition-all ease-in-out bg-[rgb(6,10,20)]"
      )}
    >
      <Container>
        <div className="flex items-center gap-4 w-full">
          {/* logo section */}
          <LogoContainer />

          {/* navigation section */}
          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />
          </nav>

          {/* right section */}
          <div className="ml-auto flex items-center gap-4">
            {userId && !isOnGeneratePage && (
              <NavLink to="/generate">
                <button className="flex items-center gap-2 px-3.5 py-2.5 text-white bg-blue-950 rounded-lg font-semibold shadow-[0_4px_0_#2563eb] hover:shadow-[0_6px_15px_rgba(37,99,235,0.6)] transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 focus:outline-none">
                  Take an Interview
                  <Sparkles className="w-5 h-5 text-white animate-pulse" />
                </button>
              </NavLink>
            )}

            {/* profile and toggle */}
            <ProfileContainer />
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;