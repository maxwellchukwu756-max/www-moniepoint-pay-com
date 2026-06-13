import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, CreditCard, Globe2, ArrowRight } from "lucide-react";
import { MoniepointLogo } from "@/components/MoniepointLogo";
import { PhoneFrame } from "@/components/PhoneFrame";

export const Route = createFileRoute("/welcome")({
  head: () => ({
    meta: [
      { title: "Welcome — Moniepoint Pay" },
      { name: "description", content: "Secure digital payments made simple." },
    ],
  }),
  component: Welcome,
});

const features = [
  { icon: Zap, title: "Instant Transfers", desc: "Move money quickly anytime." },
  { icon: ShieldCheck, title: "Secure Wallet", desc: "Protected transactions & security." },
  { icon: CreditCard, title: "Smart Payments", desc: "Seamless payment experience." },
  { icon: Globe2, title: "24/7 Banking", desc: "Access your account anytime." },
];

function Welcome() {
  const navigate = useNavigate();
  return (
    <PhoneFrame>
      <div className="flex-1 flex flex-col px-6 pt-12 pb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <MoniepointLogo size={72} rounded={20} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 text-center"
        >
          <h1 className="text-2xl font-black tracking-tight text-foreground">
            Welcome to <span style={{ color: "#0000FF" }}>MONIEPOINT PAY</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Secure digital payments made simple.
          </p>
          <p className="mt-3 text-[13px] text-muted-foreground/90 leading-relaxed px-2">
            Send money instantly, manage transactions, pay bills, and access financial services with speed and security.
          </p>
        </motion.div>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.08 }}
              className="rounded-2xl p-4 bg-card border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="h-10 w-10 rounded-xl flex items-center justify-center bg-brand-soft"
              >
                <f.icon className="h-5 w-5" style={{ color: "#0000FF" }} />
              </div>
              <h3 className="mt-3 font-semibold text-sm">{f.title}</h3>
              <p className="mt-1 text-[11px] text-muted-foreground leading-snug">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex-1" />

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate({ to: "/activate" })}
          className="mt-8 w-full h-14 rounded-3xl text-white font-semibold text-base flex items-center justify-center gap-2 brand-gradient"
          style={{ boxShadow: "var(--shadow-float)" }}
        >
          GET STARTED <ArrowRight className="h-5 w-5" />
        </motion.button>
      </div>
    </PhoneFrame>
  );
}
