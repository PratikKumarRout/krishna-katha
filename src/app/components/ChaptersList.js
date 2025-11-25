"use client"
import styles from "./ChaptersList.module.css";
import { chapters } from "../data/chaptersData";

export default function ChaptersList({ onChapterSelect }) {
    return (
        <section className={styles.chaptersListContainer}>
            {chapters.map((chapter) => (
                <button
                    key={chapter.id}
                    className={styles.chapterButton}
                    onClick={() => onChapterSelect(chapter.id)}>
                    {chapter.name}
                </button>
            ))}
        </section>
    );
}

