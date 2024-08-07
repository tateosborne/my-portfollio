import React from "react";
import '../styles/contact.scss'
import svgs from '../svgs'

type Props = {
    theme: string;
    sideBar: boolean;
    setSideBar: (arg0: boolean) => void;
}

const Contact: React.FC<Props> = ({theme, sideBar, setSideBar}) => {
    let blur = "no-blur";

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && sideBar) {
       blur = "blur";
    }

    return (
        <div className={theme}>
            <div className={blur}>
                <div className="contact-container" id="contact" onClick={() => setSideBar(false)}>
                    <div className="content-container">
                        <div className="header-container">
                            <h2>REACH OUT 📬</h2>
                            <h3>check out my contacts below!</h3>
                        </div>
                        <div className="contacts">
                            <div className="each-contact">
                                <span 
                                    dangerouslySetInnerHTML={{__html: svgs.email}} />
                                <a href="mailto:tate14@proton.me" target="_blank" rel="noreferrer noopener">
                                    tate14@proton.me
                                </a>
                            </div>
                            <div className="each-contact">
                                <span
                                    dangerouslySetInnerHTML={{__html: svgs.download}} />
                                <a href="../tateosborne-resume.pdf" target="_blank">résumé (.pdf)</a>
                            </div>
                            <div className="each-contact">
                                <span
                                    dangerouslySetInnerHTML={{__html: svgs.university}} />
                                <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.cc.gatech.edu/degree-programs/master-science-computer-science&ved=2ahUKEwiHxfvR0b2HAxU9EVkFHTcGBBsQFnoECAcQAQ&usg=AOvVaw2WBiJD2PLojs2LpFHvTkAy" target="_blank">(MS) Georgia Institute of Technology (current)</a>
                            </div>
                            <div className="each-contact">
                                <span
                                    dangerouslySetInnerHTML={{__html: svgs.university}} />
                                <a href="https://www.uvm.edu" target="_blank">(BS) University of Vermont (2023)</a>
                            </div>
                            <div className="each-contact">
                                <span
                                    dangerouslySetInnerHTML={{__html: svgs.location}} />
                                <a href="http://maps.google.com/?q=Exeter,+NH" target="_blank">Exeter, NH</a>
                            </div>
                        </div>
                        <img src="../emojis/memoji-call.png" alt="memoji phone call" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
