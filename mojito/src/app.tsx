import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/navBar";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
    return (
        <main>
            <NavBar />
        </main>
    );
}
