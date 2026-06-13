import type { ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-surface flex items-stretch justify-center md:py-8">
      <div className="w-full md:max-w-[420px] bg-background md:rounded-[40px] md:shadow-[0_30px_80px_-20px_rgba(0,0,255,0.25)] md:border md:border-border overflow-hidden flex flex-col min-h-screen md:min-h-[860px] relative">
        {children}
      </div>
    </div>
  );
}
