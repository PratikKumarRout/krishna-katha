"use client"
import { versesData } from "../data/versesData";
import styles from "./styles/VersesReader.module.css";

export default function VersesReader({ chapterId, onBack }) {
    const chapter = versesData[chapterId];

    if (!chapter) {
        return <div className={styles.error}>Chapter not found</div>;
    }

    return (
        <section className={styles.verseContainer}>

            {chapter.verses.map((verse, index) => (
                <div key={index} className={styles.verseCard}>
                    <p>
                        {verse.speaker}
                    </p>
                    <p className={styles.sanskrit}>
                        {verse.sanskritText.split("\n").map((line, idx) => (
                            <span key={idx}>
                                {line}
                                <br></br>
                            </span>
                        ))}</p>
                    <p className={styles.odia}>
                        {verse.odia}
                    </p>
                </div>
            ))}
        </section>
    );
}
