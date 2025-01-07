import { useState } from 'react'
import Nav from './components/Nav.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Artwork from './components/Artwork.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import Scroll from './components/Scroll.tsx'

function App() {
    const [theme, setTheme] = useState("light-theme");
    const [sideBar, setSideBar] = useState(false);

    const toggleTheme = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme");
        } else {
            setTheme("light-theme");
        }
    }

    const toggleSideBar = () => {
        setSideBar(!sideBar);
    }

    return (
        <>
            <Nav theme={theme} toggleTheme={toggleTheme} sideBar={sideBar} setSideBar={setSideBar} toggleSideBar={toggleSideBar}/>
            <Home theme={theme} sideBar={sideBar} setSideBar={setSideBar} />
            <About theme={theme} sideBar={sideBar} setSideBar={setSideBar} />
            <Projects theme={theme} sideBar={sideBar} setSideBar={setSideBar} />
            <Artwork theme={theme} sideBar={sideBar} setSideBar={setSideBar} />
            <Contact theme={theme} sideBar={sideBar} setSideBar={setSideBar} />
            <Scroll theme={theme} sideBar={sideBar} />
            <Footer theme={theme} sideBar={sideBar} />
        </>
    )
}

export default App;