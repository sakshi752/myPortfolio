import React from "react";
import { getImageUrl } from "../../utils"
import styles from "./Contact.module.css";
export const Contact = () => {
    return <section className={styles.container} id="contact">
        <h2 className={styles.title}>Contact me</h2>
        <div className={styles.content}>

            <a href=""><img src={getImageUrl("contact/emailIcon.png")} alt="" /></a>


            <a href="https://www.linkedin.com/in/sakshi-patel-15b346267/"><img src={getImageUrl("contact/linkedinIcon.png")} alt="" /></a>


            <a href="https://github.com/sakshi752"><img src={getImageUrl("contact/githubIcon.png")} alt="" /></a>

        </div>
    </section >
}