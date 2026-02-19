import React from "react";
import { ArrowLeft, Menu, SquareChartGantt, User, X } from "lucide-react";
import { useOnboardingStore } from "../../../store/useOnboardingStore";
import { useQueryClient } from "@tanstack/react-query";
import { activityOverviewService } from "../../../services/activityService";
import { getPersonalizationService } from "../../../services/personalizationService";
import { useLocation } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";
import { useLandingStore } from "../../../store/useLandingStore";

const MobileNav = ({
  variant,
  navigate,
  location,
}) => {
  const queryClient = useQueryClient();
  const step = useOnboardingStore((state) => state.step);
  const totalStep = useOnboardingStore((state) => state.totalStep);
  const backStep = useOnboardingStore((state) => state.backStep);
  const setMaxStep = useOnboardingStore((state) => state.setMaxStep);
  const setHamburger = useLandingStore((state) => state.setHamburger);
  const isHamburgerOpen = useLandingStore((state) => state.isHamburgerOpen);

  let hoverTime;

  const backStepSetup = () => {
    if (step === 1) {
      navigate("/");
    } else {
      backStep();
    }
  };

  const handleMouseEnterActivity = () => {
    hoverTime = setTimeout(() => {
      queryClient.prefetchQuery({
        queryKey: ["activity", "overview"],
        queryFn: () => activityOverviewService(),
        staleTime: 60 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      });
    }, 200);
  };

  const handleMouseLeaveActivity = () => {
    clearTimeout(hoverTime);
  };

  const handleMouseEnterProfile = () => {
    hoverTime = setTimeout(() => {
      queryClient.prefetchQuery({
        queryKey: ["personalization", "dashboard"],
        queryFn: () => getPersonalizationService(),
        staleTime: 60 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      });
    }, 200);
  };

  const handleMouseLeaveProfile = () => {
    clearTimeout(hoverTime);
  };

  const isLogin = useAuthStore((state) => state.isLogin);

  return (
    <nav className="flex items-center gap-2">
      {/* left section */}
      <div>
        {variant === "landing" || variant === "main" ? (
          <img
            src="/logo.png"
            className="w-9 cursor-pointer"
            onClick={() => { isLogin ? navigate("/dashboard") : navigate("/") }}
            alt="Logo TIBER"
          />
        ) : variant === "setup" ? (
          <ArrowLeft
            size={20}
            className="text-primary cursor-pointer"
            onClick={() => backStepSetup()}
          />
        ) : variant === "sub" ? (
          <ArrowLeft
            size={20}
            className="text-primary cursor-pointer"
            onClick={() => navigate("/dashboard")}
          />
        ) : (
          variant === "regist" && (
            <ArrowLeft
              size={20}
              className="text-primary cursor-pointer"
              onClick={() => {
                setMaxStep();
                navigate("/onboarding");
              }}
            />
          )
        )}

        {variant === "about" && (
          <ArrowLeft
            size={20}
            className="text-primary cursor-pointer"
            onClick={() => {
              setMaxStep();
              navigate(isLogin ? "/profile" : "/");
            }}
          />
        )}

        {variant === "how" && (
          <ArrowLeft
            size={20}
            className="text-primary cursor-pointer"
            onClick={() => {
              setMaxStep();
              navigate(isLogin ? "/profile" : "/");
            }}
          />
        )}

        {variant === "info" && (
          <ArrowLeft
            size={20}
            className="text-primary cursor-pointer"
            onClick={() => {
              setMaxStep();
              navigate(isLogin ? "/profile" : "/");
            }}
          />
        )}
      </div>

      {/* middle section */}
      <div className="flex-1">
        {variant === "landing" && (
          <h1 className="text-primary text-h2 font-bold">TIBER</h1>
        )}

        {variant === "main" && (
          <h1 className="text-primary text-h2 font-bold">TIBER</h1>
        )}

        {variant === "setup" && (
          <h1 className="text-h2 font-semibold">Personalisasi</h1>
        )}

        {variant === "regist" && (
          <h1 className="text-h2 font-semibold">Buat Akun</h1>
        )}

        {variant === "info" && (
          <h1 className="text-primary text-center font-bold text-h2">
            Informasi Pengguna
          </h1>
        )}

        {variant === "sub" && (
          <img
            src="/logo.png"
            className="w-9 m-auto cursor-pointer"
            onClick={() => navigate("/dashboard")}
            alt="Logo TIBER"
          />
        )}

        {variant === "how" && (
          <h1 className="text-primary text-center font-bold text-h2">
            Cara Kerja
          </h1>
        )}

        {variant === "about" && (
          <h1 className="text-primary text-center font-bold text-h2">
            Tentang TIBER
          </h1>
        )}
      </div>

      {/* right section */}
      <div>
        {variant === "about" && (
          <img
            src="/logo.png"
            className="w-9"
            onClick={() => { isLogin ? navigate("/dashboard") : navigate("/") }}
            alt="Logo TIBER"
          />
        )}

        {variant === "info" && (
          <img
            src="/logo.png"
            className="w-9"
            onClick={() => { isLogin ? navigate("/dashboard") : navigate("/") }}
            alt="Logo TIBER"
          />
        )}

        {variant === "how" && (
          <img
            src="/logo.png"
            className="w-9"
            onClick={() => { isLogin ? navigate("/dashboard") : navigate("/") }}
            alt="Logo TIBER"
          />
        )}

        {variant === "landing" &&
          (isHamburgerOpen ? (
            <X
              className="w-10 text-primary cursor-pointer"
              onClick={() => setHamburger()}
            />
          ) : (
            <Menu
              className="w-10 text-primary cursor-pointer"
              onClick={() => setHamburger()}
            />
          ))}

        {/* {variant === "info" && <img src="/logo.png" className="w-9" alt="Logo TIBER" />} */}

        {variant === "main" && (
          <div className="flex gap-4">
            <SquareChartGantt
              onMouseEnter={handleMouseEnterActivity}
              onMouseLeave={handleMouseLeaveActivity}
              className="w-6 text-primary cursor-pointer"
              onClick={() => navigate("/activity")}
            />
            <User
              onMouseEnter={handleMouseEnterProfile}
              onMouseLeave={handleMouseLeaveProfile}
              className="w-6 text-primary cursor-pointer"
              onClick={() => navigate("/profile")}
            />
          </div>
        )}

        {variant === "sub" &&
          (location.pathname.includes("activity") ? (
            <User
              onMouseEnter={handleMouseEnterProfile}
              onMouseLeave={handleMouseLeaveProfile}
              className="w-6 text-primary cursor-pointer"
              onClick={() => navigate("/profile")}
            />
          ) : (
            <SquareChartGantt
              onMouseEnter={handleMouseEnterActivity}
              onMouseLeave={handleMouseLeaveActivity}
              className="w-6 text-primary cursor-pointer"
              onClick={() => navigate("/activity")}
            />
          ))}

        {variant === "setup" && (
          <p className="text-h5 font-light">
            Langkah {step} dari {totalStep}
          </p>
        )}
      </div>
    </nav>
  );
};

export default MobileNav;
