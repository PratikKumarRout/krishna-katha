import styles from "./styles/Header.module.css";

export default function Header({ subtitle }) {
    return <section>
        <div className={styles.header}>
            <h2 className={styles.title}>🌸 Krishna Katha 🌸</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    </section>;
}