"use client";

import { useState } from "react";
import { Mail, Play } from "lucide-react";
import { profile } from "@/data/profile";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const runScript = (e: React.FormEvent) => {
    e.preventDefault();
    /* placeholder — wire to API or mailto */
  };

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 lg:px-12 py-20 lg:py-28 border-t border-[var(--border)]/80"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="font-mono-port text-sm text-white mb-10 flex items-center gap-2">
          <Mail className="h-4 w-4 text-[var(--orange)]" />
          <span>$ ./contact.exe</span>
        </h2>

        <div className="grid xl:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[#1a1a1a] flex flex-col min-h-[320px]">
            <div className="flex items-center gap-2 px-3 py-2 bg-[#222] border-b border-[var(--border)]">
              <span className="flex gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </span>
              <span className="flex-1 text-right font-mono-port text-[10px] text-[var(--text-muted)]">
                contact_info.json
              </span>
            </div>
            <pre className="p-4 font-mono-port text-[11px] leading-relaxed flex-1 overflow-auto">
              <code>
                <span className="text-[#f0a050]">{"{\n"}</span>
                <span className="text-[#f0a050]">{'  "status"'}</span>
                <span className="text-white">: </span>
                <span className="text-[#50fa7b]">&quot;open_to_work&quot;</span>
                <span className="text-[#f0a050]">{",\n"}</span>
                <span className="text-[#f0a050]">{'  "email"'}</span>
                <span className="text-white">: </span>
                <span className="text-[#f0a050]">
                  &quot;{profile.email}&quot;
                </span>
                <span className="text-[#f0a050]">{",\n"}</span>
                <span className="text-[#f0a050]">{'  "phone"'}</span>
                <span className="text-white">: </span>
                <span className="text-[#f0a050]">
                  &quot;{profile.phoneDisplay}&quot;
                </span>
                <span className="text-[#f0a050]">{",\n"}</span>
                <span className="text-[#f0a050]">{'  "languages"'}</span>
                <span className="text-white">: </span>
                <span className="text-[#f0a050]">{"["}</span>
                <span className="text-[#50fa7b]">&quot;EN (advanced)&quot;</span>
                <span className="text-[#f0a050]">{", "}</span>
                <span className="text-[#50fa7b]">&quot;AR (native)&quot;</span>
                <span className="text-[#f0a050]">{"],\n"}</span>
                <span className="text-[#f0a050]">{'  "location"'}</span>
                <span className="text-white">: </span>
                <span className="text-[#50fa7b]">
                  &quot;{profile.location}&quot;
                </span>
                <span className="text-[#f0a050]">{"\n}"}</span>
              </code>
            </pre>
            <p className="px-4 pb-4 font-mono-port text-[10px] text-[var(--text-dim)]">
              {"// Waiting for connection..."}
            </p>
          </div>

          <form
            onSubmit={runScript}
            className="rounded-xl overflow-hidden border border-[var(--border)] bg-[#1a1a1a] flex flex-col"
          >
            <div className="px-3 py-2 bg-[#222] border-b border-[var(--border)] flex items-center gap-2">
              <span className="text-[10px] font-mono-port text-[var(--orange)] border-b-2 border-[var(--orange)] pb-0.5">
                TS
              </span>
              <span className="font-mono-port text-[11px] text-[var(--text-muted)]">
                sendMessage.ts
              </span>
            </div>
            <div className="p-4 font-mono-port text-[11px] leading-relaxed flex-1 flex flex-col gap-3 text-[var(--text-muted)]">
              <p className="text-[var(--text-dim)]">
                {"// Run this script to send a message"}
              </p>
              <p>
                <span className="text-[#c678dd]">const</span> send ={" "}
                <span className="text-[#e5c07b]">async</span> () =&gt; &#123;
              </p>
              <label className="flex flex-wrap items-center gap-1">
                <span className="text-[#56b6c2]">const name = &quot;</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 min-w-[120px] bg-[#0d0d0d] border border-[var(--border)] rounded px-2 py-1 text-[#98c379] focus:outline-none focus:ring-1 focus:ring-[var(--orange)]"
                  placeholder="Your Name"
                />
                <span className="text-[#56b6c2]">&quot;</span>
              </label>
              <label className="flex flex-wrap items-center gap-1">
                <span className="text-[#56b6c2]">const email = &quot;</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-[120px] bg-[#0d0d0d] border border-[var(--border)] rounded px-2 py-1 text-[#98c379] focus:outline-none focus:ring-1 focus:ring-[var(--orange)]"
                  placeholder="your@email.com"
                />
                <span className="text-[#56b6c2]">&quot;</span>
              </label>
              <p>
                <span className="text-[#c678dd]">await</span> api.submit(&#123;
                name, email,
              </p>
              <div className="pl-2">
                <span className="text-[#e06c75]">message:</span>{" "}
                <span className="text-[#56b6c2]">&apos;</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="align-top w-full mt-1 bg-[#0d0d0d] border border-[var(--border)] rounded px-2 py-1 text-[#98c379] focus:outline-none focus:ring-1 focus:ring-[var(--orange)]"
                  placeholder="Type your message here..."
                />
                <span className="text-[#56b6c2]">&apos;</span>
              </div>
              <p>&#125;);</p>
              <p>&#125;;</p>
              <button
                type="submit"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[var(--green)] text-black px-4 py-2 text-xs font-semibold hover:opacity-90 w-fit"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                RUN SCRIPT
              </button>
            </div>
          </form>
        </div>

        <footer className="mt-16 pt-10 text-center space-y-2 border-t border-[var(--border)]/60">
          <p className="text-white font-medium">
            &lt;/&gt; {profile.fullName} | {profile.title}
          </p>
          <p className="text-[var(--text-muted)] text-sm">
            Built with &lt;3 using Next.js, TypeScript &amp; Tailwind
          </p>
          <p className="text-[var(--text-dim)] text-xs">
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
