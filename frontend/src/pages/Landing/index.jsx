import React, { useEffect } from "react";
import Button from "../../components/atoms/Button";
import FeatureList from "./components/FeatureList";
import { useNavigate, Link } from "react-router-dom";
import { useOnboardingStore } from "../../store/useOnboardingStore";

const LandingPage = () => {
  const navigate = useNavigate();
  const setMinStep = useOnboardingStore((state) => state.setMinStep);
  const reset = useOnboardingStore((state) => state.reset);

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <div className="pt-3 pb-5 min-h-dvh">
      <div className="flex justify-center">
        <img src="/logo.png" className="w-14 shadow-md rounded-lg" alt="Logo TIBER" />
      </div>
      <div className="flex flex-col items-center gap-5 pt-9">
        <span className="text-h1 font-extrabold font-jakarta text-center w-[80%] sm:w-xl">
          Pendamping rutin pengobatan, satu hari demi satu hari.
        </span>
        <span className="text-h4 font-inter text-center text-black/70 w-[80%] sm:w-xl">
          TIBER membantu Anda menjaga konsistensi pengobatan TBC dengan
          pelacakan harian, visualisasi progres, dan pengingat yang lembut.
        </span>
        <span className="text-h5 font-inter text-center text-black/80 w-[80%] sm:w-xl">
          <span className="text-primary">Pengingat:</span> Pengobatan TBC
          membutuhkan konsistensi 6-8 bulan. TIBER hadir menemani Anda setiap
          hari tanpa penilaian, hanya dukungan.
        </span>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-11 px-7 gap-2">
        <Button
          variant="primary"
          size="full"
          boxShadowActive="true"
          className="font-extrabold text-h5 sm:w-xl"
          onClick={() => {
            setMinStep();
            navigate("/onboarding");
          }}
        >
          Mulai Tracking
        </Button>
        <span className="text-primary font-inter font-semibold text-h5">
          Sudah punya akun?{" "}
          <Link className="underline" to="/login">
            Masuk
          </Link>
        </span>
      </div>
      <FeatureList />
    </div>
  );
};

export default LandingPage;
