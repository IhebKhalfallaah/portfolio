import Image from "next/image";
import { Coffee, Cpu, FolderCode } from "lucide-react";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-4 sm:px-6 lg:px-12 py-20 lg:py-28 border-t border-[var(--border)]/80"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="font-mono-port text-sm text-white mb-10 flex items-center gap-2">
          <span className="text-[var(--orange)]">&gt;_</span>
          <span className="relative">
            # About.system
            <span className="absolute -bottom-1 left-[1.25rem] h-0.5 w-8 bg-[var(--orange)] rounded" />
          </span>
        </h2>

        <div className="grid lg:grid-cols-[minmax(0,340px)_1fr] gap-8 lg:gap-12 items-start">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-card-dual">
            <div className="relative mx-auto w-40 h-40 mb-6">
              <div
                className="absolute inset-0 rounded-full p-[2px]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--orange-hot), var(--blue))",
                }}
              >
                <div className="h-full w-full rounded-full overflow-hidden bg-[var(--bg)] border-2 border-[var(--bg)]">
                  <div className="relative h-full w-full bg-gradient-to-br from-[var(--surface-2)] to-[var(--bg)] flex items-center justify-center">
                    <Image
                      src={profile.photo}
                      alt={profile.fullName}
                      fill
                      className="object-cover object-top"
                      sizes="160px"
                      priority
                    />
                  </div>
                </div>
              </div>
              <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-[var(--bg)] bg-[var(--green-status)]" />
            </div>

            <div className="font-mono-port text-xs space-y-0 divide-y divide-[var(--border)]">
              <div className="flex justify-between py-3">
                <span className="text-[var(--text-muted)]">OPERATOR</span>
                <span className="text-[var(--orange)] font-semibold">
                  {profile.fullName.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-[var(--text-muted)]">ROLE</span>
                <span className="text-[var(--blue-bright)] text-right max-w-[60%]">
                  SOFTWARE_ENGINEER
                </span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-[var(--text-muted)]">LOCATION</span>
                <span className="text-white text-right">
                  {profile.location}
                </span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-[var(--text-muted)]">STATUS</span>
                <span className="rounded-full border border-[var(--green)]/50 bg-[var(--green)]/10 px-3 py-0.5 text-[var(--green)] text-[10px]">
                  OPEN
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
              <div className="px-4 py-2 border-b border-[var(--border)] font-mono-port text-[11px] text-[var(--text-muted)]">
                &gt;_ user_profile.log
              </div>
              <div className="p-5 font-mono-port text-sm leading-relaxed space-y-5">
                <div>
                  <p className="text-[var(--magenta)] mb-2">-&gt; whoami</p>
                  <p className="text-white/90">
                    {profile.summary}
                  </p>
                </div>
                <div>
                  <p className="text-[var(--magenta)] mb-2">-&gt; cat mission.txt</p>
                  <p className="text-white/90">
                    <strong className="text-white">Education:</strong>{" "}
                    {profile.education}. Focus on{" "}
                    <strong className="text-white">Spring Boot</strong>,{" "}
                    <strong className="text-white">React</strong>,{" "}
                    <strong className="text-white">software architecture</strong>, and{" "}
                    <strong className="text-white">real-time systems</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 flex gap-3 items-center">
                <Cpu className="h-8 w-8 text-[var(--orange)] shrink-0" />
                <div>
                  <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide">
                    Experience
                  </p>
                  <p className="font-mono-port text-lg text-white">2+ YRS</p>
                </div>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 flex gap-3 items-center">
                <FolderCode className="h-8 w-8 text-[var(--blue)] shrink-0" />
                <div>
                  <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide">
                    Projects
                  </p>
                  <p className="font-mono-port text-lg text-white">6+ PRJ</p>
                </div>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 flex gap-3 items-center">
                <Coffee className="h-8 w-8 text-[var(--orange)] shrink-0" />
                <div>
                  <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide">
                    Caffeine
                  </p>
                  <p className="font-mono-port text-lg text-white">∞ ml</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
