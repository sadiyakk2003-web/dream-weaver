"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const MODES = [
    {
        id: "feel-good",
        label: "Feel Good",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
        ),
    },
    {
        id: "adventure",
        label: "Adventure",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
        ),
    },
    {
        id: "natural",
        label: "Natural",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8c.7-1 1-2.2 1-3.5 0-.3 0-.7-.1-1C13.3 4.2 10 7 10 10.5c0 .3 0 .7.1 1" />
                <path d="M7 16c-1 .7-2.2 1-3.5 1-.3 0-.7 0-1-.1C3.2 12.3 6 9 9.5 9c.3 0 .7 0 1 .1" />
                <path d="M12 22c-1-3.3 1-6 4-8 2-1.2 3-3 3-5 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 2 1 3.8 3 5 3 2 5 4.7 4 8h-2" />
            </svg>
        ),
    },
    {
        id: "tragedy",
        label: "Tragedy",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                <path d="M16 14v6" />
                <path d="M8 14v6" />
                <path d="M12 16v6" />
            </svg>
        ),
    },
];

const FORMATS = [
    { id: "text", label: "Text Story", emoji: "📝", disabled: false },
    { id: "visual", label: "Visual Representation (Coming Soon)", emoji: "🎨", disabled: true },
];

export default function CustomizePage() {
    const [selectedMode, setSelectedMode] = useState(null);

    const isReady = selectedMode;

    return (
        <div className={styles.page}>
            {/* Ambient stars */}
            <div className={styles.particles}>
                {[...Array(12)].map((_, i) => (
                    <span
                        key={i}
                        className={styles.star}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                            width: `${2 + Math.random() * 3}px`,
                            height: `${2 + Math.random() * 3}px`,
                        }}
                    />
                ))}
            </div>

            {/* Mode Selection */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Choose the Vibe</h2>
                <p className={styles.sectionSub}>What energy should your dream carry?</p>
                <div className={styles.modeGrid}>
                    {MODES.map((mode) => (
                        <button
                            key={mode.id}
                            className={`${styles.modeTile} ${selectedMode === mode.id ? styles.modeActive : ""}`}
                            onClick={() => setSelectedMode(mode.id)}
                        >
                            <div className={styles.modeIcon}>{mode.icon}</div>
                            <span className={styles.modeLabel}>{mode.label}</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* Format Toggle */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>How should your dream appear?</h2>
                <div className={styles.formatRow}>
                    {FORMATS.map((fmt) => (
                        <button
                            key={fmt.id}
                            className={`${styles.formatBtn} ${fmt.id === "text" ? styles.formatActive : ""} ${fmt.disabled ? styles.disabled : ""}`}
                            disabled={fmt.disabled || fmt.id === "visual"}
                        >
                            <span className={styles.formatEmoji}>{fmt.emoji}</span>
                            <span>{fmt.label}</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* Confirm */}
            <section className={styles.ctaSection}>
                <Link
                    href={isReady ? `/result?mode=${selectedMode}` : "#"}
                    className={`${styles.confirmBtn} ${!isReady ? styles.disabled : ""}`}
                    onClick={(e) => {
                        if (!isReady) e.preventDefault();
                    }}
                >
                    <span>Confirm &amp; Weave My Dream</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    </svg>
                </Link>
            </section>
        </div>
    );
}
