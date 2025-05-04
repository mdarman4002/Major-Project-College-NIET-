import { useAuth, useUser, UserButton } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const ProfileContainer = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser(); // Get user info

  if (!isLoaded) {
    return (
      <div className="flex items-center">
        <Loader className="min-w-4 min-h-4 animate-spin text-emerald-500" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-6">
      {isSignedIn ? (
        <div className="flex flex-col items-center space-y-1">
          {/* Profile picture with Instagram-style ring */}
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <div className="bg-[rgb(6,10,20)] w-full h-full rounded-full flex items-center justify-center overflow-hidden">
              <div className="scale-[0.80]">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>

          {/* Hello message */}
          {user?.firstName && (
            <span className="text-xs text-neutral-300 font-medium">
              Hello, {user.firstName}
            </span>
          )}
        </div>
      ) : (
        <Link to="/signin">
          <Button size="sm">Get Started</Button>
        </Link>
      )}
    </div>
  );
};