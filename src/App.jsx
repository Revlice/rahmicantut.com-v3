import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from './components/Contact.jsx';

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-white font-custom">
            <Header />

            <main className="flex-1 container mx-auto ">
                <Main />
                <Skills/>
                <Education/>
                <Contact/>
            </main>
            <hr className='text-gray-400 '/>
            <Footer />
        </div>
    );
}

export default App;
