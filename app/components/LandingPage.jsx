"use client";

import { useState } from "react";

const MUSIC_URL = "https://music.kailebhammontree.com/";
const DEV_URL = "https://solutions.kailebhammontree.com/";

function WaveBars() {
  const heights = [0.4, 0.7, 1, 0.6, 0.85, 0.5, 0.95, 0.55, 0.75, 0.45, 0.8, 0.65];
  return (
    <div className="flex h-10 items-end justify-center gap-[3px]" aria-hidden="true">
      {heights.map((h, i) => (
        <div
          key={i}
          className="wave-bar w-[3px] rounded-full bg-white/80"
          style={{
            height: `${h * 100}%`,
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
    </div>
  );
}

function CodeSnippet() {
  return (
    <div
      className="overflow-hidden rounded-lg border border-white/10 bg-black/40 px-4 py-3 font-mono text-xs leading-relaxed text-white/70 backdrop-blur-sm"
      aria-hidden="true"
    >
      <span className="text-[var(--dev-from)]">const</span>{" "}
      <span className="text-white/90">build</span> ={" "}
      <span className="text-[var(--dev-to)]">async</span> () =&gt; {"{"}
      <br />
      {"  "}
      <span className="text-[var(--dev-from)]">return</span>{" "}
      <span className="text-white/90">&quot;something amazing&quot;</span>
      <span className="animate-[blink_1s_step-end_infinite] text-[var(--dev-to)]">|</span>
      <br />
      {"}"};
    </div>
  );
}

function PathCard({ variant, href, title, subtitle, description, cta, icon, preview, isHovered, onHover, onLeave }) {
  const isMusic = variant === "music";

  return (
    <a
      href={href}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      className={`group card-shine relative flex min-h-[340px] flex-col justify-between rounded-3xl border p-8 transition-all duration-500 sm:min-h-[420px] sm:p-10 ${
        isHovered
          ? "scale-[1.02] border-white/25 shadow-2xl"
          : "scale-100 border-white/10 shadow-lg"
      }`}
      style={{
        background: isMusic
          ? "linear-gradient(145deg, rgba(184,63,252,0.18) 0%, rgba(252,63,150,0.08) 50%, rgba(0,0,0,0.4) 100%)"
          : "linear-gradient(145deg, rgba(63,140,252,0.18) 0%, rgba(252,71,63,0.08) 50%, rgba(0,0,0,0.4) 100%)",
        boxShadow: isHovered
          ? isMusic
            ? "0 0 60px rgba(184, 63, 252, 0.35), 0 25px 50px rgba(0,0,0,0.5)"
            : "0 0 60px rgba(63, 140, 252, 0.35), 0 25px 50px rgba(0,0,0,0.5)"
          : undefined,
      }}
    >
      {/* Glow orb behind card */}
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-40"
        }`}
        style={{
          background: isMusic
            ? "radial-gradient(circle, var(--music-from), transparent 70%)"
            : "radial-gradient(circle, var(--dev-from), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div>
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-widest ${
            isMusic
              ? "border-[var(--music-from)]/40 bg-[var(--music-from)]/10 text-[var(--music-from)]"
              : "border-[var(--dev-from)]/40 bg-[var(--dev-from)]/10 text-[var(--dev-from)]"
          }`}
        >
          {icon}
          {isMusic ? "Music" : "Development"}
        </div>

        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p
          className={`mt-2 text-sm font-medium sm:text-base ${
            isMusic ? "text-[var(--music-to)]" : "text-[var(--dev-from)]"
          }`}
        >
          {subtitle}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
          {description}
        </p>
      </div>

      <div className="mt-8">
        <div
          className={`mb-6 transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        >
          {preview}
        </div>

        <div
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ${
            isHovered ? "gap-3" : "gap-2"
          }`}
          style={{
            background: isMusic
              ? "linear-gradient(135deg, var(--music-from), var(--music-to))"
              : "linear-gradient(135deg, var(--dev-from), var(--dev-to))",
          }}
        >
          {cta}
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function LandingPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="noise-overlay absolute inset-0" />
        <div className="grid-bg absolute inset-0 opacity-60" />

        {/* Music orb — left */}
        <div
          className="animate-pulse-glow absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, var(--music-glow), transparent 70%)",
          }}
        />
        {/* Dev orb — right */}
        <div
          className="animate-pulse-glow absolute -right-32 top-1/3 h-[500px] w-[500px] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, var(--dev-glow), transparent 70%)",
            animationDelay: "2s",
          }}
        />
        {/* Center accent */}
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full blur-[160px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(122, 63, 252, 0.15), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-10 sm:px-8 sm:py-14">
        {/* Header badge */}
        <header className="animate-fade-up stagger-1 mb-10 flex items-center justify-between sm:mb-14">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl font-display text-lg font-bold text-white"
              style={{
                background: "linear-gradient(135deg, var(--music-from), var(--dev-from))",
              }}
            >
              KH
            </div>
            <span className="hidden text-sm font-medium text-white/50 sm:block">
              kailebhammontree.com
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Two worlds, one creator
          </div>
        </header>

        {/* Hero */}
        <section className="mb-12 text-center sm:mb-16">
          <p className="animate-fade-up stagger-1 mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--music-from)]">
            Welcome — pick your path
          </p>
          <h1 className="animate-fade-up stagger-2 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-gradient-hero">Kaileb</span>
            <br />
            <span className="text-white">Hammontree</span>
          </h1>
          <p className="animate-fade-up stagger-3 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl">
            Musician by passion, full-stack developer by trade.
            <br className="hidden sm:block" />
            {" "}Two creative worlds — which one are you here for?
          </p>

          {/* Animated divider */}
          <div
            className="animate-fade-up stagger-4 mx-auto mt-8 flex items-center justify-center gap-4"
            aria-hidden="true"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--music-from)]" />
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-white/30"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--dev-from)]" />
          </div>
        </section>

        {/* Choice cards */}
        <section
          className="animate-fade-up stagger-5 grid flex-1 gap-5 sm:grid-cols-2 sm:gap-6"
          aria-label="Choose your destination"
        >
          <PathCard
            variant="music"
            href={MUSIC_URL}
            title="The Sound"
            subtitle="Original music & artistry"
            description="Dive into tracks, releases, and the creative side of Kaileb. For fans, collaborators, and anyone who came to feel something."
            cta="Explore Music"
            isHovered={hoveredCard === "music"}
            onHover={() => setHoveredCard("music")}
            onLeave={() => setHoveredCard(null)}
            icon={
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            }
            preview={<WaveBars />}
          />

          <PathCard
            variant="dev"
            href={DEV_URL}
            title="The Build"
            subtitle="Hammontree Full-Stack Solutions"
            description="Web apps, mobile experiences, and custom software that actually ships. For clients, partners, and anyone ready to build."
            cta="View Services"
            isHovered={hoveredCard === "dev"}
            onHover={() => setHoveredCard("dev")}
            onLeave={() => setHoveredCard(null)}
            icon={
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            preview={<CodeSnippet />}
          />
        </section>

        {/* Footer */}
        <footer className="animate-fade-up stagger-5 mt-12 text-center sm:mt-16">
          <p className="text-sm text-white/40">
            Can&apos;t decide? Bookmark this page — both doors stay open.
          </p>
          <p className="mt-3 text-xs text-white/25">
            © {new Date().getFullYear()} Kaileb Hammontree · Hammontree Full-Stack Solutions LLC
          </p>
        </footer>
      </div>
    </div>
  );
}
