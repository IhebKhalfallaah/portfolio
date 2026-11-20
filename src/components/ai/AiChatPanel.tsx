"use client";

import { useEffect, useRef, useState } from "react";
import { replyToPrompt } from "@/lib/promptLogic";
import { Send } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string };

type Props = {
  onClose: () => void;
};

export function AiChatPanel({ onClose }: Props) {
  const [mode, setMode] = useState<"Pro" | "Easy" | "Fast">("Easy");
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [msgs]);

  const send = () => {
    const t = input.trim();
    if (!t) return;
    setMsgs((m) => [...m, { role: "user", text: t }]);
    setInput("");
    const r = replyToPrompt(t);
    setMsgs((m) => [...m, { role: "bot", text: r }]);
  };

  return (
    <div
      className="flex max-h-[min(85vh,640px)] w-[min(100vw-1.5rem,400px)] flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[#0d0d0d] shadow-[0_0_0_1px_rgba(255,77,0,0.12),0_24px_48px_rgba(0,0,0,0.65)]"
      role="dialog"
      aria-labelledby="ai-chat-title"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between gap-2 border-b border-[var(--border)] bg-[#141414] px-3 py-2.5">
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          <div className="h-9 w-9 shrink-0 rounded-full border border-[var(--border)] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]" />
          <div className="min-w-0">
            <p
              id="ai-chat-title"
              className="font-mono-port flex items-baseline gap-1 text-sm font-semibold text-white"
            >
              Iheb.ai
              <span
                className="inline-block h-3 w-2 animate-pulse bg-[#ff4d00]"
                aria-hidden
              />
            </p>
            <p className="font-mono-port text-[10px] text-[#00ff41]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00ff41] align-middle mr-1" />
              {"// Open to Work"}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden rounded-md border border-[var(--border)] overflow-hidden text-[9px] font-mono-port sm:flex">
            {(["Pro", "Easy", "Fast"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`px-2 py-1 transition-colors ${
                  mode === m
                    ? "bg-[#ff4d00]/20 text-[#ff7b45]"
                    : "text-[#888] hover:bg-white/5"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <span className="flex gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </span>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="min-h-0 flex-1 space-y-3 overflow-y-auto p-3 font-mono-port text-[11px] leading-relaxed"
      >
        <div className="rounded-lg bg-[#1a1a1a] p-3 text-white/95">
          <p className="mb-2 text-white">
            I&apos;m Iheb&apos;s AI assistant — here to help you connect with
            him.
          </p>
          <p className="mb-2 text-[#ff7b45] font-medium">I can help with:</p>
          <ol className="mb-3 list-decimal space-y-1.5 pl-4 text-white/85 text-[11px]">
            <li>Skills &amp; tech stack questions</li>
            <li>Ballpark project estimates</li>
            <li>Whether he&apos;s a fit for your role</li>
            <li>Light code / architecture review pointers</li>
            <li>Routing you to a direct message</li>
          </ol>
          <p className="text-white/90">What brings you here today?</p>
        </div>

        {msgs.map((m, i) => (
          <div
            key={i}
            className={`rounded-lg px-3 py-2 ${
              m.role === "user"
                ? "ml-4 bg-[#1f3a5f]/40 text-[#7eb8ff]"
                : "mr-4 bg-[#1a1a1a] text-white/80"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="border-t border-[#ff4d00]/35 bg-[#0d0d0d] p-3">
        <p className="mb-2 font-mono-port text-[10px] font-medium text-[#ff7b45]">
          Message Iheb directly
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[var(--border)] bg-[#1a1a1a] text-[var(--text-muted)] hover:text-white"
            aria-label="Command"
          >
            <span className="text-xs">⌘</span>
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a message ..."
            className="min-w-0 flex-1 rounded border border-[var(--border)] bg-[#1a1a1a] px-3 py-2 font-mono-port text-xs text-white placeholder:text-[#666] focus:border-[#ff4d00]/50 focus:outline-none"
          />
          <button
            type="button"
            onClick={send}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[var(--border)] bg-[#1a1a1a] text-[var(--text-muted)] hover:text-white"
            aria-label="Send"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-2 text-center font-mono-port text-[9px] text-[#666]">
          Gpt-4o | Flash Lite
        </p>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="border-t border-[var(--border)] py-2 text-center font-mono-port text-[10px] text-[var(--text-muted)] hover:bg-white/5 hover:text-white"
      >
        Close
      </button>
    </div>
  );
}
