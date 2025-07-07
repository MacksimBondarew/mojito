import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/navBar";
import Hero from "./components/hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
    return (
        <main>
            <NavBar />
            <Hero />
            <div className="h-dvh bg-black" />
        </main>
    );
}
