import {Navbar, Welcome} from "#components";

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Welcome />
        </div>
    );
};

export default App
