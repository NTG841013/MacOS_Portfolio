import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

import {Navbar, Welcome, Dock} from "#components";
import {Safari, Terminal, Resume, Finder, Text, Image, Contact} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume/>
            <Finder/>
            <Text />
            <Image />
            <Contact/>
        </div>
    );
};

export default App
