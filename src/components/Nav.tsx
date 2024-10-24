import React, { useState } from "react";
import '../styles/nav.scss'
import svgs from '../svgs'

type Props = {
    theme: string;
    toggleTheme: () => void;
    sideBar: boolean;
    setSideBar: (arg0: boolean) => void;
    toggleSideBar: () => void;
}

const Nav: React.FC<Props> = ({theme, toggleTheme, sideBar, setSideBar, toggleSideBar}) => {
    let device = "";

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        device = "mobile";
    } else {
        device = "desktop";
    }

    const [highlightPosition, setHighlightPosition] = useState({ left: '10px', width: '30px' });

    const getActiveHash = () => {
        return window.location.hash;
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        const navBar = document.querySelector('.nav-bar')!.getBoundingClientRect();
        const navItem = e.currentTarget.getBoundingClientRect();

        const left = navItem.left - navBar.left; 
        const width = `${navItem.width}px`;
        
        setHighlightPosition({
            left: `${left}px`,
            width: width
        });
    };

    const handleMouseLeave = () => {
        // Get the current active hash (e.g., "#about")
        const currPage = getActiveHash();
    
        // Find the corresponding nav item based on the hash
        const targetElement = document.querySelector(`.nav-items a[href="${currPage}"]`);
    
        if (targetElement) {
            const navBar = document.querySelector('.nav-bar')!.getBoundingClientRect();
            const targetRect = targetElement.getBoundingClientRect();
    
            // Calculate the new left and width for the highlight
            const left = targetRect.left - navBar.left;
            const width = `${targetRect.width}px`;
    
            // Set the highlight position and size to match the active link
            setHighlightPosition({
                left: `${left}px`,
                width: width
            });
        }
    };

    
    return (
        device === "desktop" ? (
            <div className={theme}>
                <div className={device}>
                    <div className="nav-bar">
                        <div className="nav-items">
                            <a href="#home" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Home</a>
                            <a href="#about" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>About</a>
                            <a href="#projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Projects</a>
                            <a href="#artwork" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Artwork</a>
                            <a href="#contact" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Contact</a>
                            <p>|</p>
                            <button onClick={toggleTheme} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                                dangerouslySetInnerHTML={theme === "light-theme" ? {__html: svgs.moon} : {__html: svgs.sun}}>
                            </button>
                            <div className="highlight" style={{left: highlightPosition.left, width: highlightPosition.width}}></div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className={theme}>
                <div className={device}>
                    <div className="nav-bar">
                    {
                        sideBar ? (
                            <div className="nav-shown">
                                <button onClick={toggleSideBar}
                                    dangerouslySetInnerHTML={{__html: svgs.x}}>
                                </button>
                                <p>tate parmar osborne</p>
                                <a href="#home" onClick={() => setSideBar(false)}>Home</a>
                                <a href="#about" onClick={() => setSideBar(false)}>About</a>
                                <a href="#projects" onClick={() => setSideBar(false)}>Projects</a>
                                <a href="#artwork" onClick={() => setSideBar(false)}>Artwork</a>
                                <a href="#contact" onClick={() => setSideBar(false)}>Contact</a>
                                <button onClick={toggleTheme}
                                    dangerouslySetInnerHTML={theme === "light-theme" ? {__html: svgs.moon} : {__html: svgs.sun}}>
                                </button>
                            </div>
                        ) : (
                            <div className="nav-hidden">
                                <button onClick={toggleSideBar}
                                    dangerouslySetInnerHTML={{__html: svgs.menu}}>
                                </button>
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
        )
    )
}

export default Nav;
