import React from 'react';
import styles from './About.module.css';
import chalaniImage from '../Images/jayakodi.jpg'; 

function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={chalaniImage} alt="JA Chalani Jayakodi" />
        </div>
        <div className={styles.text}>
          <h3 className={styles.subtitle}>Full stack Developer & UI/UX Designer</h3>
          <p className={styles.description}>
            I'm Chalani Jayakodi. Enthusiastic and dedicated undergraduate student at the Institute of Technology, University of Moratuwa, pursuing a diploma in IT with a focus on Full Stack Development. Proficient in front-end and back-end technologies, with a strong foundation in software development methodologies. Passionate about leveraging technical skills to solve real-world problems and deliver robust solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;