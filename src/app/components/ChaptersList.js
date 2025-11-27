"use client"
import { chapters } from "../data/chaptersData";
import styles from "./styles/ChaptersList.module.css"


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