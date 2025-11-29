"use client"
import { useState } from "react";
import ChaptersList from "./ChaptersList";
import Header from "./Header";
import Hero from "./Hero";
import VersesReader from "./VersesReader";
import { chapters } from "../data/chaptersData";

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

    const selectedChapter = chapters.find(chapter => chapter.id === selectedChapterId);
    const subtitle = selectedChapterId
        ? (selectedChapter?.name ?? "")
        : (started ? "ଶ୍ରୀମଦ୍ଭଗବଦ୍‌ଗୀତା" : undefined);

    return <>
        <Header subtitle={subtitle} />
        {
        selectedChapterId ? (
            <VersesReader chapterId={selectedChapterId} onBack={handleBackFromVerses} />
        ) : started ? (
            <ChaptersList onChapterSelect={handleChapterSelect} />
        ) : (
            <Hero onStart={handleStart} />
        )} 
    </>;
}