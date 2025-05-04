import { MainRoutes } from "@/lib/helper";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface NavigationRoutesProps {
    isMobile?: boolean;
}
export const NavigationRoutes = ({ isMobile = false }: NavigationRoutesProps) => {
    return (

        <ul className={cn("flex items-center gap-6",
            isMobile && "items-start flex-col gap-8")}>
            {MainRoutes.map(route => (
                <NavLink
                    key={route.href}
                    to={route.href}
                    className={({ isActive }) =>
                        cn(
                            "text-base font-semibold transition duration-300 transform",             // enables smooth scaling
                            "text-gray-300 hover:text-teal-400 hover:scale-110",                     // color change + scale
                            "hover:drop-shadow-[0_0_10px_#00ffe1]",                                  // neon glow effect
                            isActive && "text-teal-400"                                              // active route highlight
                          )
                        }
                >
                    {route.label}
                </NavLink>
            ))}
        </ul>
    );
};
