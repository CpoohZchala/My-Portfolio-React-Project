import React from 'react';
import styles from './Hero.module.css';
import chalaniImage from '../Images/jayakodi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Chalani Jayakodi-2025.pdf';
    link.download = 'Chalani Jayakodi-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.hero}>
      
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Hi! It's me</h1>
        <h2 className={styles.subtitle}>Chalani Jayakodi</h2>
        <p className={styles.description}>And I'm a Full Stack Developer</p>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.linkedin.com/in/chalani-jayakodi/" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/CpoohZchala/" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:prabodhachalani7@gmail.com" className={styles.socialButton}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <button className={styles.downloadButton} onClick={handleDownloadCV}>Download CV</button>
      </div>
      <div className={styles.heroImage}>
        <img src={chalaniImage} alt="JA Chalani Jayakodi" />
      </div>
    </section>
  );
}

export default Hero;
