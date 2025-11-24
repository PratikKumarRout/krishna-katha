"use client"
import { useState, useEffect } from "react";
import Splash from "./components/Splash";
import HomeScreen from "./components/HomeScreen";

export default function Home() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    return <>
        {showSplash ? <Splash/> : <HomeScreen/>}
    </>;
}