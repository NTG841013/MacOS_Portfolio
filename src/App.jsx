import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

import {Navbar, Welcome, Dock} from "#components";
import {Terminal} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
        </div>
    );
};

export default App
