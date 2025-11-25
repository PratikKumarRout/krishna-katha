"use client"
import styles from "./VersesReader.module.css";
import { versesData } from "../data/versesData";
import Header from "./Header";

export default function VersesReader({ chapterId, onBack }) {
    const chapter = versesData[chapterId];

    if (!chapter) {
        return <div className={styles.error}>Will be added soon...</div>;
    }

    return (
        <div className={styles.readerContainer}>

            {/* Snap-scroll container for verses */}
            <div className={styles.versesContainer}>
                {chapter.verses.map((verse) => (
                    <div key={verse.id} className={styles.verseCard}>
                        <div className={styles.verseContent}>
                            <h3 className={styles.verseNumber}>Verse {verse.id}</h3>

                            <div className={styles.sanskritSection}>
                                <p className={styles.sanskrit}>{verse.sanskritText}</p>
                            </div>

                            <div className={styles.meaningSection}>
                                <h4>Meaning</h4>
                                <p className={styles.meaning}>{verse.meaning}</p>
                            </div>

                            <div className={styles.odiaSection}>
                                <h4>ଓଡ଼ିଆ ଅନୁବାଦ</h4>
                                <p className={styles.odia}>{verse.odia}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
