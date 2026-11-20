"use client";

import { useEffect, useState } from "react";
import {
  Code2,
  Cpu,
  FolderGit2,
  Mail,
  Terminal,
  User,
} from "lucide-react";

const SECTIONS = [
  { id: "home", icon: Code2 },
  { id: "about", icon: User },
  { id: "skills", icon: Cpu },
  { id: "experience", icon: FolderGit2 },
  { id: "projects", icon: Terminal },
  { id: "contact", icon: Mail },
] as const;

export function SectionRail() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const els = SECTIONS.map((s) =>
      document.getElementById(s.id)
    ).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: [0, 0.15, 0.35, 0.55] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="fixed right-4 md:right-6 top-1/2 z-50 -translate-y-1/2 hidden lg:flex flex-col items-center"
      aria-hidden
    >
      <div className="relative flex flex-col items-center gap-5 py-2">
        <div className="absolute top-2 bottom-2 left-1/2 w-px -translate-x-1/2 bg-[var(--border)]" />
        {SECTIONS.map((s) => {
          const Icon = s.icon;
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="relative z-10 flex items-center justify-center"
              aria-label={s.id}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                  isActive
                    ? "border-[var(--orange)] bg-[var(--orange)]/15 shadow-[0_0_18px_rgba(255,140,0,0.5)] scale-105"
                    : "border-[var(--border)] bg-[var(--surface)]/95 opacity-70 hover:opacity-100"
                }`}
              >
                <Icon
                  className={`h-4 w-4 ${
                    isActive ? "text-[var(--orange)]" : "text-[var(--text-muted)]"
                  }`}
                />
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
