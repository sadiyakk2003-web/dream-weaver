import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Ambient background particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
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

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          <span className={styles.titleWord}>Dream</span>
          <span className={styles.titleWord}>Weaver</span>
        </h1>
        <p className={styles.tagline}>Complete your unfinished dreams here.</p>
      </section>

      {/* Visual Roadmap */}
      <section className={styles.roadmap}>
        <div className={styles.roadmapTrack}>
          {/* Step 1 */}
          <div className={styles.step}>
            <div className={`${styles.stepIcon} ${styles.stepBlue}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
              </svg>
            </div>
            <span className={styles.stepLabel}>Scribble Fragments</span>
          </div>

          {/* Connector */}
          <div className={styles.connector}>
            <div className={styles.connectorLine} />
            <svg className={styles.connectorArrow} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className={styles.step}>
            <div className={`${styles.stepIcon} ${styles.stepViolet}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <span className={styles.stepLabel}>Select Mode</span>
          </div>

          {/* Connector */}
          <div className={styles.connector}>
            <div className={styles.connectorLine} />
            <svg className={styles.connectorArrow} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Step 3 */}
          <div className={styles.step}>
            <div className={`${styles.stepIcon} ${styles.stepMix}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              </svg>
            </div>
            <span className={styles.stepLabel}>Experience Dream</span>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className={styles.ctaSection}>
        <Link href="/scribble" className={styles.ctaButton}>
          <span>Get Started</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
