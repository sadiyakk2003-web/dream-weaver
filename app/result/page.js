"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

// Mode theme configurations
const MODE_THEMES = {
    "feel-good": {
        titleDefault: "A Dream of Joy",
        gradient: "linear-gradient(135deg, #ffd700 0%, #ff69b4 50%, #ff1493 100%)",
        borderColor: "#ffd700",
        glowColor: "#ffd70060",
    },
    adventure: {
        titleDefault: "An Epic Adventure",
        gradient: "linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #c1272d 100%)",
        borderColor: "#ff6b35",
        glowColor: "#ff6b3560",
    },
    natural: {
        titleDefault: "A Natural Wonder",
        gradient: "linear-gradient(135deg, #56ab2f 0%, #a8e063 50%, #7cb342 100%)",
        borderColor: "#56ab2f",
        glowColor: "#56ab2f60",
    },
    tragedy: {
        titleDefault: "A Bittersweet Memory",
        gradient: "linear-gradient(135deg, #434343 0%, #000000 100%)",
        borderColor: "#666666",
        glowColor: "#66666660",
    },
};

export default function ResultPage() {
    const searchParams = useSearchParams();
    const mode = searchParams.get("mode") || "feel-good";
    const format = searchParams.get("format") || "text";

    const [story, setStory] = useState(null);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const theme = MODE_THEMES[mode] || MODE_THEMES["feel-good"];

    useEffect(() => {
        async function weaveDream() {
            setLoading(true);
            setError(null);

            const fragments = localStorage.getItem("dream_fragments");

            if (!fragments) {
                setError("No dream fragments found. Please go back and scribble your dream.");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch("/api/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ fragments, mode, format }),
                });

                if (!response.ok) throw new Error("Failed to weave the dream");

                const data = await response.json();
                setStory(data.story);
                setTitle(data.title);
            } catch (err) {
                console.error(err);
                setError("The Weaver's needles got tangled. Please try again.");
            } finally {
                setLoading(false);
            }
        }

        weaveDream();
    }, [mode, format]);

    return (
        <div className={styles.page}>
            {/* Ambient stars */}
            <div className={styles.particles}>
                {[...Array(18)].map((_, i) => (
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

            {/* Scroll Container */}
            <section className={styles.scrollContainer}>
                {loading ? (
                    <div className={styles.loadingState}>
                        <div className={styles.cloudBaby}>
                            <div className={styles.cloudBody}>
                                <div className={styles.cloudHead}>
                                    <div className={styles.cloudCheek} />
                                    <div className={styles.cloudCheek} />
                                    <div className={styles.cloudEyes}>
                                        <span className={styles.eye}>.</span>
                                        <span className={styles.eye}>.</span>
                                    </div>
                                    <div className={styles.halo}>✨</div>
                                </div>
                                <div className={styles.knittingNeedles}>
                                    <div className={styles.needleLeft} />
                                    <div className={styles.needleRight} />
                                    <div className={styles.yarn} />
                                </div>
                            </div>
                        </div>
                        <p className={styles.loadingText}>The Dream Weaver is knitting your memories...</p>
                    </div>
                ) : error ? (
                    <div className={styles.errorState}>
                        <p>{error}</p>
                        <Link href="/scribble" className={styles.backBtn}>Back to Scribble Pad</Link>
                    </div>
                ) : (
                    <div
                        className={styles.scrollPaper}
                        style={{
                            borderColor: theme.borderColor,
                            boxShadow: `0 0 40px ${theme.glowColor}, 0 0 80px ${theme.glowColor}20`,
                        }}
                    >
                        <div className={styles.ornament}>✦ ✦ ✦</div>

                        <h1
                            className={styles.storyTitle}
                            style={{
                                background: theme.gradient,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {title || theme.titleDefault}
                        </h1>

                        <div className={styles.divider} style={{ background: `linear-gradient(90deg, transparent, ${theme.borderColor}, transparent)` }} />

                        <p className={styles.paragraph}>
                            {story}
                        </p>

                        <div className={styles.divider} style={{ background: `linear-gradient(90deg, transparent, ${theme.borderColor}, transparent)` }} />

                        {/* Finishing Ornament */}
                        <div className={styles.imageContainer}>
                            <div className={styles.cloudBabySmall}>
                                <div className={styles.cloudBodySmall}>
                                    <div className={styles.haloSmall}>✨</div>
                                </div>
                                <p className={styles.imageCaption}>Dream Weave Complete ☁️</p>
                            </div>
                        </div>

                        <div className={styles.ornament}>— fin —</div>
                    </div>
                )}
            </section>

            {/* Start Over */}
            {!loading && (
                <section className={styles.actions}>
                    <Link href="/" className={styles.restartBtn}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 1 9 9" />
                            <polyline points="3 3 3 12 12 12" />
                        </svg>
                        <span>Dream Again</span>
                    </Link>
                </section>
            )}
        </div>
    );
}
