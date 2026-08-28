"use client";

import { useState } from "react";
import Logo from "./Logo";

const MUSIC_URL = "https://music.kailebhammontree.com/";
const DEV_URL = "https://solutions.kailebhammontree.com/";

function getHeroStyles(hovered) {
  if (hovered === "music") {
    return {
      nameClass:
        "font-music-display music-gradient-text music-shimmer tracking-wide",
      firstNameClass: "",
      lastNameClass: "text-[var(--music-cream)]",
      badgeClass:
        "border-[var(--music-bubblegum)]/50 bg-[var(--music-bubblegum)]/15 text-[var(--music-cream)] shadow-[0_0_40px_rgba(241,91,181,0.35)]",
      badgeTextClass: "font-music-display text-[var(--music-golden)]",
      descriptorClass: "font-music-body text-[var(--music-bubblegum)]",
      descriptor: "Feel the music",
      badgeScale: "scale-110",
    };
  }

  if (hovered === "dev") {
    return {
      nameClass: "font-dev-display dev-gradient-text tracking-tight",
      firstNameClass: "",
      lastNameClass: "text-[#F0FAFA]",
      badgeClass:
        "border-[#30B8BF]/50 bg-[#30B8BF]/10 text-[#F0FAFA] shadow-[0_0_40px_rgba(0,242,254,0.25)]",
      badgeTextClass: "font-dev-display text-[#00F2FE]",
      descriptorClass: "font-dev-body text-[#30B8BF]",
      descriptor: "Build something elite",
      badgeScale: "scale-110",
    };
  }

  return {
    nameClass: "font-dev-display tracking-tight",
    firstNameClass: "hero-name-split-first",
    lastNameClass: "hero-name-split-last",
    badgeClass:
      "border-white/20 bg-black/50 text-white shadow-[0_0_30px_rgba(255,255,255,0.08)]",
    badgeTextClass: "font-dev-display bg-gradient-to-br from-[var(--music-amethyst)] to-[#00F2FE] bg-clip-text text-transparent",
    descriptorClass: "font-dev-body text-white/50",
    descriptor: "Pick a side",
    badgeScale: "scale-100",
  };
}

function MusicWaveBars() {
  const heights = [0.35, 0.65, 0.9, 0.5, 1, 0.7, 0.85, 0.45, 0.75, 0.55, 0.95, 0.6, 0.8, 0.4];
  return (
    <div className="flex h-14 items-end justify-center gap-[3px]" aria-hidden="true">
      {heights.map((h, i) => (
        <div
          key={i}
          className="wave-bar w-[4px] rounded-full"
          style={{
            height: `${h * 100}%`,
            animationDelay: `${i * 0.07}s`,
            background: "linear-gradient(to top, var(--music-amethyst), var(--music-bubblegum))",
          }}
        />
      ))}
    </div>
  );
}

function DevCodeBlock() {
  return (
    <div
      className="overflow-hidden rounded-lg border border-[#30B8BF]/20 bg-[#081214]/80 px-4 py-3 font-mono text-[11px] leading-relaxed backdrop-blur-sm sm:text-xs"
      aria-hidden="true"
    >
      <span className="text-[#407C80]">{"// premium engineering"}</span>
      <br />
      <span className="text-[#00F2FE]">const</span>{" "}
      <span className="text-[#F0FAFA]">ship</span> ={" "}
      <span className="text-[#30B8BF]">async</span> () =&gt; {"{"}
      <br />
      {"  "}
      <span className="text-[#00F2FE]">return</span>{" "}
      <span className="text-[#F0FAFA]">&quot;elite product&quot;</span>
      <span className="animate-[blink_1s_step-end_infinite] text-[#FF6500]">|</span>
      <br />
      {"}"};
    </div>
  );
}

function VinylDisc() {
  return (
    <div className="relative mx-auto h-28 w-28 opacity-80 sm:h-32 sm:w-32" aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, var(--music-amethyst), var(--music-bubblegum), var(--music-golden), var(--music-amethyst))",
          animation: "vinyl-spin 12s linear infinite",
        }}
      />
      <div className="absolute inset-[18%] rounded-full bg-[var(--music-wine)]" />
      <div className="absolute inset-[42%] rounded-full bg-[var(--music-bubblegum)]/60" />
      <div className="absolute inset-[46%] rounded-full bg-[var(--music-cream)]" />
    </div>
  );
}

function HeroHeader({ hovered }) {
  const styles = getHeroStyles(hovered);

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-40 flex flex-col items-center px-6 pt-8 text-center sm:pt-10 lg:pt-12">
      <h1
        className={`animate-fade-up text-5xl font-extrabold leading-[0.95] transition-all duration-500 sm:text-6xl md:text-7xl lg:text-8xl ${styles.nameClass}`}
      >
        <span className={`block transition-all duration-500 ${styles.firstNameClass}`}>
          Kaileb
        </span>
        <span className={`block transition-all duration-500 ${styles.lastNameClass}`}>
          Hammontree
        </span>
      </h1>

      {/* Center badge — desktop */}
      <div
        className={`mt-6 hidden flex-col items-center transition-all duration-500 lg:flex ${styles.badgeScale}`}
      >
        <div
          className={`flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border text-2xl font-bold backdrop-blur-md transition-all duration-500 ${styles.badgeClass}`}
        >
          <span className={styles.badgeTextClass}>KH</span>
        </div>
        <p
          className={`mt-2.5 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.28em] transition-all duration-500 ${styles.descriptorClass}`}
        >
          {styles.descriptor}
        </p>
      </div>

      {/* Mobile descriptor */}
      <p
        className={`animate-fade-up stagger-1 mt-4 text-sm font-medium transition-all duration-500 lg:hidden ${styles.descriptorClass}`}
      >
        {hovered === null ? "Tap a side to choose your path" : styles.descriptor}
      </p>
    </header>
  );
}

export default function LandingPage() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative flex min-h-screen flex-col lg:flex-row">
      <HeroHeader hovered={hovered} />

      {/* ── MUSIC PANEL (left) ── */}
      <a
        href={MUSIC_URL}
        onMouseEnter={() => setHovered("music")}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered("music")}
        onBlur={() => setHovered(null)}
        className={`panel-shine group relative flex min-h-[55vh] flex-1 flex-col justify-end overflow-hidden px-6 pb-24 pt-44 transition-all duration-500 sm:px-10 sm:pb-28 sm:pt-48 lg:min-h-screen lg:justify-between lg:px-12 lg:pb-20 lg:pt-56 ${
          hovered === "dev" ? "lg:opacity-55 lg:grayscale-[0.35]" : ""
        } ${hovered === "music" ? "lg:flex-[1.15]" : "lg:flex-1"}`}
        style={{ background: "var(--music-canvas)" }}
        aria-label="Explore Kaileb Hammontree's music"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="noise-overlay absolute inset-0" />
          <div
            className="music-blob absolute -left-20 -top-20 h-72 w-72 rounded-full blur-[100px]"
            style={{ background: "var(--music-amethyst)", opacity: 0.35 }}
          />
          <div
            className="music-blob absolute -bottom-16 right-0 h-64 w-64 rounded-full blur-[90px]"
            style={{ background: "var(--music-bubblegum)", opacity: 0.3, animationDelay: "2s" }}
          />
          <div
            className="music-blob absolute right-1/4 top-1/3 h-48 w-48 rounded-full blur-[80px]"
            style={{ background: "var(--music-golden)", opacity: 0.2, animationDelay: "4s" }}
          />
        </div>

        <div className="relative z-10 lg:mt-auto">
          <h2 className="animate-fade-up stagger-2 font-music-display text-4xl leading-none tracking-wide sm:text-5xl lg:text-6xl">
            <span className="music-gradient-text music-shimmer">Feel</span>
            <br />
            <span className="text-[var(--music-cream)]">the Music</span>
          </h2>

          <p className="animate-fade-up stagger-3 mt-4 max-w-sm font-music-body text-sm leading-relaxed text-[var(--music-cream)]/65 sm:text-base">
            Original tracks, live energy, and the creative pulse of Kaileb Hammontree.
            For fans, collaborators, and anyone who came to vibe.
          </p>
        </div>

        <div className="relative z-10 mt-8 space-y-6">
          <div className={`transition-transform duration-500 ${hovered === "music" ? "scale-105" : ""}`}>
            <VinylDisc />
            <div className="mt-4">
              <MusicWaveBars />
            </div>
          </div>

          <div
            className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-music-body text-sm font-bold text-[var(--music-wine)] transition-all duration-300 ${
              hovered === "music" ? "gap-3.5 shadow-lg" : ""
            }`}
            style={{
              background: "linear-gradient(135deg, var(--music-golden), var(--music-bubblegum))",
            }}
          >
            Explore Music
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${hovered === "music" ? "translate-x-1" : ""}`}
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

      <div
        className="split-divider pointer-events-none absolute bottom-0 left-1/2 top-0 z-20 hidden w-px -translate-x-1/2 lg:block"
        aria-hidden="true"
      />

      {/* ── DEV PANEL (right) ── */}
      <a
        href={DEV_URL}
        onMouseEnter={() => setHovered("dev")}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered("dev")}
        onBlur={() => setHovered(null)}
        className={`panel-shine group relative flex min-h-[55vh] flex-1 flex-col justify-end overflow-hidden px-6 pb-24 pt-10 transition-all duration-500 sm:px-10 sm:pb-28 lg:min-h-screen lg:justify-between lg:px-12 lg:pb-20 lg:pt-56 ${
          hovered === "music" ? "lg:opacity-55 lg:grayscale-[0.35]" : ""
        } ${hovered === "dev" ? "lg:flex-[1.15]" : "lg:flex-1"}`}
        style={{ background: "var(--dev-canvas)" }}
        aria-label="View Hammontree Full-Stack Solutions services"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="noise-overlay absolute inset-0" />
          <div className="dev-grid absolute inset-0 opacity-80" />
          <div
            className="absolute -right-24 top-1/4 h-80 w-80 rounded-full blur-[120px]"
            style={{ background: "rgba(0, 242, 254, 0.08)" }}
          />
          <div
            className="absolute -bottom-20 left-1/4 h-64 w-64 rounded-full blur-[100px]"
            style={{ background: "rgba(170, 102, 57, 0.12)" }}
          />
          <div
            className="absolute left-0 top-0 h-px w-full"
            style={{
              background: "linear-gradient(90deg, transparent, var(--dev-copper), transparent)",
            }}
          />
        </div>

        <div className="relative z-10 lg:mt-auto">
          <div className="animate-fade-up stagger-1 mb-6">
            <Logo className="h-10 w-auto sm:h-12" />
          </div>

          <h2 className="animate-fade-up stagger-2 font-dev-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="dev-gradient-text">Build</span>
            <br />
            <span className="text-[#F0FAFA]">Something Elite</span>
          </h2>

          <p className="animate-fade-up stagger-3 mt-4 max-w-sm font-dev-body text-sm leading-relaxed text-[#407C80] sm:text-base">
            Premium web and app development for startups and enterprise.
            Precision engineering, human-led, built to ship.
          </p>

          <div className="animate-fade-up stagger-3 mt-5 flex flex-wrap gap-2">
            {["Web Apps", "Mobile", "Custom Software"].map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#30B8BF]/25 bg-[#30B8BF]/8 px-2.5 py-1 font-dev-body text-[10px] font-medium uppercase tracking-wider text-[#30B8BF] sm:text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-8 space-y-6">
          <div className={`transition-transform duration-500 ${hovered === "dev" ? "scale-[1.02]" : ""}`}>
            <DevCodeBlock />
          </div>

          <div
            className={`inline-flex items-center gap-2.5 rounded-lg px-6 py-3 font-dev-body text-sm font-semibold text-white transition-all duration-300 ${
              hovered === "dev" ? "gap-3.5 shadow-[0_0_30px_rgba(255,101,0,0.35)]" : ""
            }`}
            style={{ background: "#FF6500" }}
          >
            View Services
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${hovered === "dev" ? "translate-x-1" : ""}`}
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

      <footer className="absolute bottom-0 left-0 right-0 z-30 px-6 py-4 text-center">
        <p className="font-dev-body text-[11px] text-white/30">
          Can&apos;t decide? Bookmark this page — both doors stay open.
        </p>
        <p className="mt-1 font-dev-body text-[10px] text-white/20">
          © {new Date().getFullYear()} Kaileb Hammontree · Hammontree Full-Stack Solutions LLC
        </p>
      </footer>
    </div>
  );
}
