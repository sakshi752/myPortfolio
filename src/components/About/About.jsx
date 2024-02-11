import React from "react";
import { getImageUrl } from "../../utils"
import styles from "./About.module.css";
export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About me</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="ME" className={styles.aboutImage} />
            <p className={styles.about}>Hi there! I'm Sakshi Patel, a Computer Science student deeply passionate about coding. Proficient in JavaScript and Python, currently exploring React and diving into Data Structures and Algorithms. Beyond coding, I enjoy losing myself in books and expressing creativity through doodling. Aesthetics play a significant role in my life, inspiring me both personally and professionally. Let's connect and explore the endless possibilities together!</p>
        </div>
        <h4 className={styles.techStack}>Tech stack</h4>
        <div className={styles.iconsContainer}>
            
            <div className={styles.iconBox}>
                <img src={getImageUrl("skills/html.png")} alt="" className={styles.icons} />
            </div>
            <div className={styles.iconBox}>
            <img src={getImageUrl("skills/css.png")} alt="" className={styles.icons} />
            </div>
            <div className={styles.iconBox}>
            <img src={getImageUrl("skills/JS.png")} alt="" className={styles.icons} />
            </div>
            <div className={styles.iconBox}>
            <img src={getImageUrl("skills/react.png")} alt="" className={styles.icons} />
            </div>
            <div className={styles.iconBox}>
            <img src={getImageUrl("skills/tailwind.png")} alt="" className={styles.icons} />
            </div>
            <div className={styles.iconBox}>
            <img src={getImageUrl("skills/py.png")} alt="" className={styles.icons} />
            </div>
            
        </div>
    </section>
}