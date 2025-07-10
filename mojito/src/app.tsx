import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Cocktails from "./components/cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
    return (
        <main>
            <NavBar />
            <Hero />
            <Cocktails />
        </main>
    );
}
