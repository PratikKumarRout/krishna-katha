"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import styles from "./styles/VersesReader.module.css";
import { database } from "../utils/firebaseconfig";

export default function VersesReader({ chapterId }) {
    const [verses, setVerses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVerses = async () => {
            try {
                // Path: chapters/chapter_1/verses
                const versesRef = collection(database, "chapters", `chapter_${chapterId}`, "verses");
                const queries = query(versesRef, orderBy("verse_number"));
                const querySnapshot = await getDocs(queries);

                const versesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setVerses(versesData);
            } catch (error) {
                console.error("Error fetching verses:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVerses();
    }, [chapterId]);

    if (loading) {
        return <div className={styles.loading}>Loading Verses...</div>;
    }

    if (verses.length === 0) {
        return <div className={styles.error}>Verses for this chapter will be added soon.</div>;
    }

    return (
        <section className={styles.verseContainer}>
            {verses.map((verse, index) => (
                <div key={index} className={styles.verseCard}>
                    <p className={styles.verseSpeaker}>{verse.speaker}</p>
                    <p className={styles.verseSanskrit}>
                        {verse.verse.split("\n").map((line, idx) => (
                            <span key={idx}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>
                    <p className={styles.verseOdia}> {verse.meaning}</p>
                </div>
            ))}
        </section>
    );
}
