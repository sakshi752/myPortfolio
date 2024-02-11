import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    const downloadResume = () => {
        const resumePath = 'public\SAKSHI PATEL RESUME.pdf';
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'YourResume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    };

    return (
        <section className={styles.container} id="hero">
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Sakshi</h1>
                <p className={styles.description}>I'm a developer based in Gujarat, India. I enjoy working in every aspect of web, from user interface to server logic.</p>
                <a className={styles.contactBtn} onClick={downloadResume}>My Resume</a>
            </div>
            {/* right side with hero img */}
            <div>
                <div className={styles.blob}></div>
            </div>
        </section>
    );
};
