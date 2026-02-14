"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function ScribblePage() {
    const [fragments, setFragments] = useState("");

    return (
        <div className={styles.page}>
            {/* Ambient stars */}
            <div className={styles.particles}>
                {[...Array(15)].map((_, i) => (
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

            {/* Instruction */}
            <section className={styles.header}>
                <h1 className={styles.heading}>
                    Scribble your dream fragments here
                </h1>
                <p className={styles.subheading}>
                    Include time, environment, and any details you remember
                </p>
                <div className={styles.arrowContainer}>
                    <svg
                        className={styles.arrow}
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                    </svg>
                </div>
            </section>

            {/* Textarea */}
            <section className={styles.inputSection}>
                <div className={styles.textareaWrapper}>
                    <textarea
                        className={styles.textarea}
                        value={fragments}
                        onChange={(e) => setFragments(e.target.value)}
                        placeholder="Enter the time, environment, names, places, objects, incidents, people or feelings you remember..."
                        rows={10}
                        autoFocus
                    />
                    <div className={styles.textareaGlow} />
                </div>
            </section>

            {/* Action */}
            <section className={styles.actions}>
                <Link
                    href={fragments.trim() ? "/customize" : "#"}
                    className={`${styles.nextButton} ${!fragments.trim() ? styles.disabled : ""}`}
                    onClick={(e) => {
                        if (!fragments.trim()) {
                            e.preventDefault();
                        } else {
                            localStorage.setItem("dream_fragments", fragments.trim());
                        }
                    }}
                >
                    <span>Next</span>
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </Link>
            </section>
        </div>
    );
}
