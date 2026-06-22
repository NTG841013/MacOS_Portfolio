import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

import {Navbar, Welcome, Dock, Home} from "#components";
import {Safari, Terminal, Resume, Finder, Text, Image, Contact} from "#windows";
import Photos from "#windows/Photos.jsx";

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
            <Photos/>

            <Home/>
        </div>
    );
};

export default App
