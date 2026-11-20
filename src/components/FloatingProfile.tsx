"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiChatPanel } from "@/components/ai/AiChatPanel";
import { profile } from "@/data/profile";

type Props = {
  src?: string;
  name?: string;
};

export function FloatingProfile({ src, name = profile.initials }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.removeProperty("overflow");
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [open]);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[70] bg-black/55 backdrop-blur-[2px]"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      )}

      <div className="fixed bottom-6 right-6 z-[80] flex flex-col-reverse items-end gap-3 lg:bottom-8 lg:right-10">
        {open && (
          <div className="pointer-events-auto origin-bottom-right">
            <AiChatPanel onClose={() => setOpen(false)} />
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-label={open ? "Close assistant" : "Open Iheb.ai assistant"}
          className="pointer-events-auto relative isolate h-12 w-12 overflow-hidden rounded-full border-2 border-[var(--border)] bg-[var(--surface-2)] shadow-lg transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)]"
        >
          {src ? (
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="48px"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center font-mono-port text-xs text-[var(--orange)]">
              {name.slice(0, 2).toUpperCase()}
            </span>
          )}
          <span
            className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full border border-[var(--bg)] bg-[var(--green-status)]"
            aria-hidden
          />
        </button>
      </div>
    </>
  );
}
