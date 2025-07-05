import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function app() {
    return <div className="bg-red-300 flex-center">app</div>;
}
