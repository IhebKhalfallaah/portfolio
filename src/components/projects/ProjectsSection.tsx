import { BookMarked, ExternalLink, FolderGit2, GitBranch, Star } from "lucide-react";
import { pinnedProjects, repositories } from "@/data/projects";
import { profile } from "@/data/profile";

export function ProjectsSection() {
  const repoCount = repositories.length;

  return (
    <section
      id="projects"
      className="relative px-4 sm:px-6 lg:px-12 py-20 lg:py-28 border-t border-[var(--border)]/80"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 font-mono-port text-[11px] text-[var(--text-muted)]">
            <GitBranch className="h-3.5 w-3.5 text-[var(--orange)]" />
            Initial Commit (Hello World)
          </span>
        </div>

        <h2 className="font-mono-port text-lg sm:text-xl text-white mb-10 flex items-center gap-2">
          <span className="text-[var(--orange)]">📂</span>
          <span>$ ls -la ~/projects</span>
        </h2>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden min-h-[320px]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] font-mono-port text-xs">
              <span className="flex items-center gap-2 text-[var(--text-muted)]">
                <BookMarked className="h-4 w-4 text-[var(--orange)]" />
                Repositories
              </span>
              <span className="text-[var(--text-dim)]">{repoCount}</span>
            </div>
            <ul className="divide-y divide-[var(--border)]">
              {repositories.map((r) => (
                <li key={r.name}>
                  <a
                    href={`https://github.com/${r.name}`}
                    className="block px-4 py-3 hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono-port text-sm text-[var(--blue)] truncate">
                        {r.name}
                      </span>
                      <span className="text-[9px] uppercase border border-[var(--border)] rounded px-1.5 py-0.5 text-[var(--text-muted)] shrink-0">
                        Public
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-[var(--text-muted)] font-mono-port">
                      <span
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{ background: r.langColor }}
                      />
                      {r.language}
                      <span>· Updated {r.updated}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-4">
              Pinned Projects
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {pinnedProjects.map((p) => (
                <div
                  key={p.name}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-4 flex flex-col h-full hover:border-[var(--border)]/90 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="flex items-center gap-2 min-w-0">
                      <FolderGit2 className="h-4 w-4 text-[var(--text-muted)] shrink-0" />
                      <span className="font-mono-port text-sm text-[var(--blue)] truncate">
                        {p.name}
                      </span>
                    </span>
                    <span className="text-[9px] uppercase border border-[var(--border)] rounded px-1.5 py-0.5 text-[var(--text-muted)] shrink-0">
                      Public
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4 flex-1">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono-port px-2 py-0.5 rounded-full bg-[var(--orange)]/15 text-[var(--orange)] border border-[var(--orange)]/25"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-auto pt-2 border-t border-[var(--border)]/60 font-mono-port text-[10px] text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: p.langColor }}
                      />
                      {p.language}
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-0.5">
                        <Star className="h-3 w-3" />
                        {p.stars}
                      </span>
                      <span className="opacity-80">⑂ {p.forks}</span>
                    </span>
                    <a
                      href={p.demoUrl ?? "#"}
                      className="inline-flex items-center gap-1 rounded border border-[var(--border)] px-2 py-1 text-[var(--text-muted)] hover:text-white"
                    >
                      Code
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href={`mailto:${profile.email}?subject=Portfolio%20—%20projects`}
            className="font-mono-port text-sm text-white hover:text-[var(--orange)] transition-colors inline-flex items-center gap-1"
          >
            Request repo links / details <span aria-hidden>›</span>
          </a>
        </div>
      </div>
    </section>
  );
}
