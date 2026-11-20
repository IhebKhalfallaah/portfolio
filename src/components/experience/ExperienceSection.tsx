import { GitBranch } from "lucide-react";
import { commits } from "@/data/experience";

function CommitCard({
  hash,
  branch,
  company,
  title,
  description,
  tags,
  files,
  insertions,
  deletions,
}: (typeof commits)[0]) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5 max-w-lg w-full shadow-lg">
      <div className="flex flex-wrap items-center gap-2 mb-3 font-mono-port text-[11px]">
        <span className="text-[var(--yellow-hash)]">{hash}</span>
        <span className="rounded-full bg-[#1f6feb]/25 text-[#58a6ff] px-2 py-0.5 border border-[#1f6feb]/40">
          {branch}
        </span>
        <span className="text-[var(--text-muted)] ml-auto">{company}</span>
      </div>
      <h3 className="text-white font-semibold text-sm sm:text-base mb-2">
        {title}
      </h3>
      <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed mb-4 font-mono-port">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[10px] font-mono-port px-2 py-0.5 rounded border border-[var(--orange)]/45 text-[var(--orange)] bg-[var(--orange)]/5"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="font-mono-port text-[11px] text-[var(--text-muted)]">
        <span>{files} files changed</span>
        <span className="text-[var(--git-green)]"> , +{insertions} insertions</span>
        <span className="text-[var(--git-red)]"> , −{deletions} deletions</span>
      </p>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative px-4 sm:px-6 lg:px-12 py-20 lg:py-28 border-t border-[var(--border)]/80"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-mono-port text-sm text-white mb-12 flex items-center gap-2 flex-wrap">
          <span className="text-[var(--orange)]">$</span>
          <GitBranch className="h-4 w-4 text-[var(--orange)]" />
          <span>git log --stat --oneline</span>
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--orange)]/70 -translate-x-1/2 hidden md:block pointer-events-none" />

          <div className="space-y-16 md:space-y-20">
            {commits.map((c) => (
              <div
                key={c.hash}
                className="relative grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-start"
              >
                {c.side === "left" ? (
                  <>
                    <div className="md:justify-self-end md:pr-4 order-2 md:order-1">
                      <CommitCard {...c} />
                    </div>
                    <div className="flex flex-col items-center order-1 md:order-2 shrink-0">
                      <div className="hidden md:flex w-full justify-center">
                        <div className="h-px w-8 bg-[var(--orange)] self-center mt-6" />
                      </div>
                      <div className="flex items-center gap-2 md:flex-col md:gap-2">
                        <div className="h-3 w-3 rounded-full border-2 border-[var(--orange)] bg-white z-10 shadow-[0_0_12px_rgba(255,140,0,0.6)]" />
                        <span className="font-mono-port text-[10px] sm:text-xs text-[var(--text-muted)] whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--bg)] px-2 py-1">
                          📅 {c.dateLabel}
                        </span>
                      </div>
                      <div className="hidden md:block h-px w-8 bg-[var(--orange)] mt-2" />
                    </div>
                    <div className="hidden md:block order-3" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block order-1" />
                    <div className="flex flex-col items-center order-1 md:order-2 shrink-0">
                      <div className="hidden md:flex w-full justify-center">
                        <div className="h-px w-8 bg-[var(--orange)] self-center mt-6" />
                      </div>
                      <div className="flex items-center gap-2 md:flex-col md:gap-2">
                        <div className="h-3 w-3 rounded-full border-2 border-[var(--orange)] bg-white z-10 shadow-[0_0_12px_rgba(255,140,0,0.6)]" />
                        <span className="font-mono-port text-[10px] sm:text-xs text-[var(--text-muted)] whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--bg)] px-2 py-1">
                          📅 {c.dateLabel}
                        </span>
                      </div>
                      <div className="hidden md:block h-px w-8 bg-[var(--orange)] mt-2" />
                    </div>
                    <div className="md:justify-self-start md:pl-4 order-2 md:order-3">
                      <CommitCard {...c} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
