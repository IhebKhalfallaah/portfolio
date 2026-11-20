"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Mail, Play, Terminal, FolderOpen } from "lucide-react";
import { profile } from "@/data/profile";

const CODE_LINES = [
  { n: 1, parts: [{ c: "comment", t: "// Welcome to my workspace" }] },
  {
    n: 2,
    parts: [
      { c: "kw", t: "import" },
      { c: "def", t: " { Developer } " },
      { c: "kw", t: "from" },
      { c: "str", t: " './universe'" },
      { c: "punc", t: ";" },
    ],
  },
  { n: 3, parts: [] },
  {
    n: 4,
    parts: [
      { c: "kw", t: "const" },
      { c: "def", t: " Portfolio " },
      { c: "punc", t: "= () => {" },
    ],
  },
  {
    n: 5,
    parts: [
      { c: "kw", t: "  return" },
      { c: "punc", t: " (" },
    ],
  },
  {
    n: 6,
    parts: [
      { c: "tag", t: "    <Developer" },
    ],
  },
  {
    n: 7,
    parts: [
      { c: "prop", t: '      name=' },
      { c: "str", t: `"${profile.codeSnippet.name}"` },
    ],
  },
  {
    n: 8,
    parts: [
      { c: "prop", t: "      role=" },
      { c: "str", t: `"${profile.codeSnippet.role}"` },
    ],
  },
  {
    n: 9,
    parts: [
      { c: "prop", t: "      passion=" },
      { c: "str", t: `"${profile.codeSnippet.passion}"` },
    ],
  },
  {
    n: 10,
    parts: [{ c: "tag", t: "    />" }],
  },
  {
    n: 11,
    parts: [{ c: "punc", t: "  );" }],
  },
  {
    n: 12,
    parts: [{ c: "punc", t: "};" }],
  },
];

const MODULES = [
  "JAVA",
  "SPRING BOOT",
  "REACT",
  "KAFKA",
  "REDIS",
  "DOCKER",
];

function CodeSpan({
  className,
  parts,
}: {
  className?: string;
  parts: { c: string; t: string }[];
}) {
  const color = (c: string) => {
    switch (c) {
      case "kw":
        return "text-[#c678dd]";
      case "def":
        return "text-[#e5c07b]";
      case "str":
        return "text-[#98c379]";
      case "tag":
        return "text-[#e06c75]";
      case "prop":
        return "text-[#56b6c2]";
      case "comment":
        return "text-[var(--text-dim)]";
      case "punc":
        return "text-[#abb2bf]";
      default:
        return "text-[#abb2bf]";
    }
  };
  return (
    <span className={className}>
      {parts.map((p, i) => (
        <span key={i} className={color(p.c)}>
          {p.t}
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setLoad((x) => (x >= 100 ? 100 : x + 4));
    }, 60);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] px-4 sm:px-6 lg:px-12 pt-10 pb-16 lg:pt-14 lg:pb-24"
    >
      <p className="pointer-events-none absolute right-6 top-8 font-mono-port text-[10px] text-[var(--text-dim)] opacity-60 hidden md:block">
        &lt;System.Init /&gt;
      </p>
      <p className="pointer-events-none absolute left-6 bottom-32 font-mono-port text-[10px] text-[var(--text-dim)] opacity-50 hidden md:block">
        admin(live) | code( ) |
      </p>

      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--orange)]/35 bg-[var(--surface)]/90 px-3 py-1.5 font-mono-port text-[11px] text-[var(--text-muted)] shadow-orange-glow mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--orange)] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--orange)]" />
            </span>
            <span className="text-[var(--text)]">
              SYSTEM.KERNEL :: v2.5.0{" "}
              <span className="text-[var(--green)]">ONLINE</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
            Hello, I&apos;m{" "}
            <span className="text-gradient-name">{profile.fullName}</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-muted)] mb-2">
            <span className="text-[var(--orange)]">
              &lt;{profile.headlineTag} /&gt;
            </span>{" "}
            <span className="text-white">{profile.headlineRest}</span>
          </p>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mb-8 leading-relaxed">
            {profile.summary}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex-1 rounded-xl border border-[var(--orange)]/55 bg-[var(--surface)]/95 p-4 shadow-orange-glow min-w-0">
              <div className="flex items-start gap-3">
                <Terminal className="h-5 w-5 text-[var(--orange)] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-white font-medium mb-2">
                    Initialize OS
                  </p>
                  <div className="h-1 w-full rounded-full bg-[var(--border)] overflow-hidden mb-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--orange)] to-[var(--orange-hot)] transition-all duration-300"
                      style={{ width: `${load}%` }}
                    />
                  </div>
                  <p className="font-mono-port text-[11px] text-[var(--text-muted)]">
                    &gt; sudo boot_gui
                  </p>
                  <p className="font-mono-port text-[11px] text-[var(--orange)]">
                    Loading...
                  </p>
                </div>
                <button
                  type="button"
                  className="p-1.5 rounded-md border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--orange)]"
                  aria-label="External"
                >
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-[var(--orange)]/55 bg-[var(--surface)]/95 px-5 py-4 font-mono-port text-sm text-[var(--orange)] shadow-orange-glow hover:bg-[var(--orange)]/10 transition-colors whitespace-nowrap"
            >
              <Mail className="h-5 w-5" />
              Email me
            </a>
          </div>

          <div>
            <p className="font-mono-port text-xs text-[var(--text-muted)] mb-2">
              LOADED_MODULES:
            </p>
            <div className="flex flex-wrap gap-2">
              {MODULES.map((m) => (
                <span
                  key={m}
                  className="font-mono-port text-[10px] sm:text-xs px-2.5 py-1 rounded border border-[var(--orange)]/45 text-[var(--orange)] bg-transparent"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[#1e1e1e] shadow-2xl">
            <div className="flex items-center gap-2 px-3 py-2.5 bg-[#252526] border-b border-[var(--border)]">
              <span className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </span>
              <span className="flex-1 text-center font-mono-port text-[11px] text-[var(--text-muted)]">
                <span className="text-[var(--green)]">●</span> portfolio.tsx
              </span>
            </div>
            <div className="p-4 font-mono-port text-[11px] sm:text-xs leading-relaxed overflow-x-auto bg-[#1e1e1e]">
              {CODE_LINES.map((line) => (
                <div key={line.n} className="flex gap-3">
                  <span className="select-none text-[var(--text-dim)] w-5 text-right shrink-0">
                    {line.n}
                  </span>
                  <CodeSpan parts={line.parts} />
                </div>
              ))}
            </div>
            <div className="flex gap-3 px-4 py-3 bg-[#252526] border-t border-[var(--border)]">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--orange)]/60 px-4 py-2 text-xs font-mono-port text-[var(--orange)] hover:bg-[var(--orange)]/10"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Run Profile
              </button>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 text-xs font-mono-port text-[var(--text-muted)] hover:text-white hover:border-[var(--text-muted)]"
              >
                <FolderOpen className="h-3.5 w-3.5" />
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--text-dim)] animate-bounce hidden md:block">
        <span className="font-mono-port text-lg">⌄</span>
      </div>
    </section>
  );
}
