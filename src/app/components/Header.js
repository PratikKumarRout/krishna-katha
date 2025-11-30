import styles from "./styles/Header.module.css";

export default function Header({ subtitle, onBack }) {
    return <section>
        <div className={styles.header}>
            <h2 className={styles.title}>🌸 Krishna Katha 🌸</h2>
            {subtitle && (
                <div className={styles.subtitleRow}>
                    {onBack && (
                        <button
                            className={styles.backButton}
                            onClick={onBack}
                            aria-label="Back"
                        >
                            ←
                        </button>
                    )}
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
            )}
        </div>
    </section>;
}