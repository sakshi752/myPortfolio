import React from "react";
import { getImageUrl } from "../../utils"
import styles from "./Projects.module.css";
export const Projects = () => {
    return <section className={styles.container} id="projects">
        <h2 className={styles.title}>My work</h2>
        <div className={styles.content}>
            <div className={styles.projectContainer}>
                <img src={getImageUrl("projects/project1.jpg")} alt="" className={styles.projectImg} />
                <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>Tasteez(food recipe)</h3>
                    <p className={styles.projectDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam aspernatur, sit reiciendis sint nemo in vitae optio dolor! Dolorem totam error ratione sequi quis repudiandae accusantium dolores temporibus fuga!</p>
                    <div className={styles.projectBtn}>
                        <button className={styles.btn}><a href="https://github.com/sakshi752/Tasteez-food-recipe-">Code</a></button>
                        <button className={styles.btn}><a href="https://sakshi752.github.io/Tasteez-food-recipe-/">Live Demo</a></button>
                    </div>
                </div>
            </div>
            <div className={styles.projectContainer}>
                <img src={getImageUrl("projects/project1.jpg")} alt="" className={styles.projectImg} />
                <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>Tasteez(food recipe)</h3>
                    <p className={styles.projectDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam aspernatur, sit reiciendis sint nemo in vitae optio dolor! Dolorem totam error ratione sequi quis repudiandae accusantium dolores temporibus fuga!</p>
                    <div className={styles.projectBtn}>
                        <button className={styles.btn}><a href="https://github.com/sakshi752/Tasteez-food-recipe-">Code</a></button>
                        <button className={styles.btn}><a href="https://sakshi752.github.io/Tasteez-food-recipe-/">Live Demo</a></button>
                    </div>
                </div>
            </div>
            <div className={styles.projectContainer}>
                <img src={getImageUrl("projects/project1.jpg")} alt="" className={styles.projectImg} />
                <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>Tasteez(food recipe)</h3>
                    <p className={styles.projectDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam aspernatur, sit reiciendis sint nemo in vitae optio dolor! Dolorem totam error ratione sequi quis repudiandae accusantium dolores temporibus fuga!</p>
                    <div className={styles.projectBtn}>
                        <button className={styles.btn}><a href="https://github.com/sakshi752/Tasteez-food-recipe-">Code</a></button>
                        <button className={styles.btn}><a href="https://sakshi752.github.io/Tasteez-food-recipe-/">Live Demo</a></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
}