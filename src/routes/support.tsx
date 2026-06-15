import { createFileRoute, useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Users, Headphones } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { WHATSAPP_GROUP, WHATSAPP_SUPPORT } from "@/lib/store";

export const Route = createFileRoute("/support")({
  head: () => ({ meta: [{ title: "Customer Support — Moniepoint Pay" }] }),
  component: Support,
});

const options = [
  {
    icon: MessageCircle,
    title: "WhatsApp Customer Service",
    sub: "Chat 1-on-1 with an agent on WhatsApp",
    color: "#25D366",
    href: WHATSAPP_SUPPORT,
  },
  {
    icon: Users,
    title: "Join WhatsApp Group",
    sub: "Get updates & community support",
    color: "#16A34A",
    href: WHATSAPP_GROUP,
  },
  {
    icon: Headphones,
    title: "Live Chat",
    sub: "Talk to our team in-app, 24/7",
    color: "#FFFFFF",
    href: "#",
  },
];

function Support() {
  const router = useRouter();
  const PRIMARY = "#0000FF";
  return (
    <PhoneFrame>
      <div className="flex-1 flex flex-col" style={{ background: PRIMARY, color: "#FFFFFF" }}>
        <div className="px-6 pt-10 pb-6 relative overflow-hidden">
          <button onClick={() => router.history.back()} className="h-10 w-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="mt-4 text-xl font-black tracking-tight">Customer Support</h1>
          <p className="text-xs opacity-90 mt-1">Hi, I'm Jane — how can we help you today?</p>
        </div>

        <div className="px-6 py-6 space-y-3">
          {options.map((o, i) => (
            <motion.a
              key={o.title}
              href={o.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/15 backdrop-blur border border-white/20"
            >
              <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center">
                <o.icon className="h-6 w-6" style={{ color: o.color === "#FFFFFF" ? PRIMARY : o.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold">{o.title}</p>
                <p className="text-[11px] opacity-80">{o.sub}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
