"use client"
import { useState } from "react";
import ChaptersList from "./ChaptersList";
import Header from "./Header";
import Hero from "./Hero";
import VersesReader from "./VersesReader";

export default function HomeScreen() {
    const [started, setStarted] = useState(false);
    const [selectedChapterId, setSelectedChapterId] = useState(null);

    const handleStart = () => setStarted(true);

    const handleChapterSelect = (chapterId) => {
        setSelectedChapterId(chapterId);
    };

    const handleBackFromVerses = () => {
        setSelectedChapterId(null);
    };

    return <div style={styles.container}>
        <Header subtitle={started ? "ଶ୍ରୀମଦ୍‌ଭଗବଦ୍‌ଗୀତା" : undefined} />
        {selectedChapterId ? (
            <VersesReader chapterId={selectedChapterId} onBack={handleBackFromVerses} />
        ) : started ? (
            <ChaptersList onChapterSelect={handleChapterSelect} />
        ) : (
            <Hero onStart={handleStart} />
        )}
    </div>;
}

const styles = {
    container: { display: "flex", flexDirection: "column", height: "100vh" }
}