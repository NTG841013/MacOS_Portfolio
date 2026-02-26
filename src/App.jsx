import {Navbar, Welcome, Dock} from "#components";

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Welcome />
            <Dock />
        </div>
    );
};

export default App
