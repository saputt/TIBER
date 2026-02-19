import Navbar from "../organism/Navbar";
import Button from "../atoms/Button";
import { ArrowRight } from "lucide-react";
import { useOnboardingStore } from "../../store/useOnboardingStore";
import { useLocation, useNavigate } from "react-router-dom";
import BarStep from "../atoms/BarStep";

const OnboardingLayout = ({ children }) => {
  const navigate = useNavigate();
  const nextStep = useOnboardingStore((state) => state.nextStep);
  const step = useOnboardingStore((state) => state.step);
  const totalStep = useOnboardingStore((state) => state.totalStep);
  const formData = useOnboardingStore((state) => state.formData);

  const validateStep = (currentStep) => {
    const data = formData?.personalization || {};

    switch (currentStep) {
      case 1:
        return !!data.start_date;
      case 2:
        return !!data.duration_month;
      case 3:
        return !!data.time_category;
      case 4:
        return !!data.control_freq_value;
      case 5:
        return !!data.reminder_time;
      default:
        return true;
    }
  };

  const isStepValid = validateStep(step);

  const totalStepCont = [];

  for (let i = 1; i < totalStep + 1; i++) {
    totalStepCont.push({ id: i });
  }

  const location = useLocation();

  const nextStepSetup = () => {
    if (step === 5) {
      navigate("/register");
    } else {
      nextStep();
    }
  };
  const quotes = {
    1: "Kesehatan adalah investasi masa depan. Mulai langkah kecil hari ini untuk hasil besar esok hari.",
    2: "Setiap hari adalah kemajuan. Tetapkan targetmu dan melangkah menuju kesembuhan.",
    3: "Konsistensi adalah kunci. Temukan ritme yang pas dengan aktivitas harianmu.",
    4: "Perjalanan ini tidak sendirian. Kontrol rutin memastikan kamu selalu di jalur yang tepat.",
    5: "Jangan biarkan kesibukan menghalangimu. Pengingat kecil berdampak besar bagi kesehatanmu.",
    register:
      "Hampir sampai! Bergabunglah sekarang untuk mencatat setiap kemajuan hebatmu.",
  };

  const isRegister = location.pathname.includes("register");
  const currentQuote = isRegister ? quotes.register : quotes[step] || quotes[1];

  return (
    <div className="min-h-svh font-inter lg:grid lg:grid-cols-2">
      <aside className="hidden lg:flex flex-col justify-center items-center bg-teal-600 text-white p-20 relative overflow-hidden">
        <div className="z-10 text-center max-w-lg flex flex-col items-center gap-8">
          <img
            src="/login-visual.png"
            alt="Ilustrasi Kesehatan"
            className="w-full max-w-md object-contain mb-8 drop-shadow-2xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = "none";
            }}
          />
          <blockquote className="text-h3 font-semibold italic leading-relaxed transition-all duration-500 animate-in fade-in">
            "{currentQuote}"
          </blockquote>
        </div>

        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-500/30 rounded-full blur-2xl"></div>
      </aside>

      <div className="flex flex-col relative bg-gray-50 h-full overflow-y-auto">
        <Navbar
          variant={location.pathname.includes("register") ? "regist" : "setup"}
        />

        <main className="flex-1 flex flex-col relative lg:justify-center lg:items-center">
          {!location.pathname.includes("register") && (
            <div className="absolute top-0 w-full flex">
              {totalStepCont.map((num) => (
                <BarStep isActive={step === num.id} key={num.id} />
              ))}
            </div>
          )}

          <section className="flex-1 flex flex-col overflow-y-auto py-5 bg-gray-50 w-full lg:max-w-md lg:flex-none lg:justify-center px-3 lg:px-0 min-h-dvh lg:min-h-0">
            {children}
          </section>

          {!location.pathname.includes("register") && (
            <footer className="px-3 py-2 border-t-1 border-gray-200 lg:bg-transparent lg:border-none lg:static lg:w-full lg:max-w-md lg:p-0 lg:mt-6 lg:mb-20 z-10 fixed bottom-0 left-0 right-0">
              <Button
                variant="primary"
                size="full"
                className="flex justify-center items-center gap-1 py-3"
                onClick={() => nextStepSetup()}
                disabled={!isStepValid}
              >
                <p className="font-bold text-h4">Lanjut</p>
                <ArrowRight size={15} className="text-white" />
              </Button>
            </footer>
          )}
        </main>
      </div>
    </div>
  );
};

export default OnboardingLayout;
