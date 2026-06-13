import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff, Phone, CreditCard, PlayCircle } from "lucide-react";
import { MoniepointLogo } from "@/components/MoniepointLogo";
import { PhoneFrame } from "@/components/PhoneFrame";

export const Route = createFileRoute("/activate")({
  head: () => ({
    meta: [
      { title: "Activate — Moniepoint Pay" },
      { name: "description", content: "Activate your Moniepoint Pay account." },
    ],
  }),
  component: Activate,
});

function Activate() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");

  return (
    <PhoneFrame>
      <div className="flex-1 flex flex-col px-6 pt-10 pb-8">
        <div className="flex justify-center">
          <MoniepointLogo size={64} rounded={18} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-7"
        >
          <h1 className="text-2xl font-black tracking-tight">Activate Your Account</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Enter your authorization code to continue.
          </p>
        </motion.div>

        <div className="mt-7">
          <label className="text-sm font-semibold">Authorization Code</label>
          <div className="mt-2 relative">
            <input
              type={show ? "text" : "password"}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter code"
              className="w-full h-14 rounded-2xl bg-muted border-2 border-transparent focus:border-primary focus:bg-white outline-none px-5 pr-12 text-base transition-all"
              style={{ letterSpacing: "0.1em" }}
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
            >
              {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate({ to: "/dashboard" })}
          className="mt-5 w-full h-14 rounded-3xl text-white font-semibold text-base brand-gradient"
          style={{ boxShadow: "var(--shadow-float)" }}
        >
          Activate Account
        </motion.button>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground tracking-widest">OR</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-3">
          <SecondaryButton icon={<Phone className="h-4 w-4" />} label="Contact Support" />
          <SecondaryButton icon={<CreditCard className="h-4 w-4" />} label="Buy Activation Code" />
          <SecondaryButton icon={<PlayCircle className="h-4 w-4" />} label="Watch Tutorial" />
        </div>

        <div className="flex-1" />

        <p className="mt-8 text-center text-[11px] text-muted-foreground leading-relaxed">
          Licensed by the <span className="font-semibold text-foreground">Central Bank of Nigeria</span> and insured by NDIC.
        </p>
      </div>
    </PhoneFrame>
  );
}

function SecondaryButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className="w-full h-12 rounded-2xl bg-brand-soft text-primary font-semibold text-sm flex items-center justify-center gap-2 border border-border"
    >
      {icon} {label}
    </motion.button>
  );
}
