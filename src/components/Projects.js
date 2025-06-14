import React from 'react';
import styles from './Projects.module.css';
import WebImage from '../Images/User.png'; 
import WebImage1 from '../Images/Web.png'; 
import WebImage2 from '../Images/todo.jpg';
import WebImage3 from '../Images/logo1.png';
import AppImage1 from '../Images/mobile.png';
import AppImage2 from '../Images/App.png';
import UIUXImage1 from '../Images/Cassava.png';
import UIUXImage2 from '../Images/Handy.png';

const projects = [
 
  {
    type: 'Web Development',
    description: 'Service Me App',
    image: WebImage3,
    repoLink: 'https://github.com/VirtusaMax/serviceme-frontend',
  },
  {
    type: 'Web Development',
    description: 'User Management System',
    image: WebImage,
    repoLink: 'https://github.com/CpoohZchala/User_Managment_System-Frontend',
  },
  {
    type: 'Web Development',
    description: 'Portfolio website built with React',
    image: WebImage1,
    repoLink: 'https://github.com/CpoohZchala/My-Portfolio-React-Project',
  },
  {
    type: 'Web Development',
    description: 'React ToDo Web App',
    image: WebImage2,
    repoLink: 'https://github.com/CpoohZchala/todo-app',
  },
  {
    type: 'App Development',
    description: 'Mango Plant Disease Detection Mobile App',
    image: AppImage1,
    repoLink: 'https://github.com/CpoohZchala/Mango-Leaves-Disease-Ditection',
  },
  {
    type: 'App Development',
    description: 'Cassava Healthy Finder Mobile App',
    image: AppImage2,
    repoLink: 'https://github.com/CpoohZchala/Final-Group-Project',
  },
  
  {
    type: 'UI/UX Design',
    description: 'Mobile App Design For Cassava Leaves Health Tracker',
    image: UIUXImage1,
    repoLink: 'https://www.figma.com/design/jTUlw1CMD1RWKiOs0o4fzh/HandyPro?node-id=392-162&t=xrnYewnAI4uqRf06-1',
  },
  {
    type: 'UI/UX Design',
    description: 'Mobile App Design For Handymany Service App',
    image: UIUXImage2,
    repoLink: 'https://www.figma.com/design/jTUlw1CMD1RWKiOs0o4fzh/HandyPro?node-id=726-188&t=yheMuNRuxlvktBSp-1',
  },
  
];

function Projects() {
  const webProjects = projects.filter(project => project.type === 'Web Development');
  const appProjects = projects.filter(project => project.type === 'App Development');

  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>My Projects</h2>
      
      {/* First Row: Web Projects */}
      <div className={styles.projectRow}>
        {webProjects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <img src={project.image} alt={project.description} className={styles.projectImage} />
            <p className={styles.projectDescription}>{project.description}</p>
            <button 
              className={styles.viewButton} 
              onClick={() => window.open(project.repoLink, '_blank')}
            >
              View on GitHub
            </button>
          </div>
        ))}
      </div>

      {/* Second Row: App Projects */}
      <div className={styles.projectRow}>
        {appProjects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <img src={project.image} alt={project.description} className={styles.projectImage} />
            <p className={styles.projectDescription}>{project.description}</p>
            <button 
              className={styles.viewButton} 
              onClick={() => window.open(project.repoLink, '_blank')}
            >
              View on GitHub
            </button>
          </div>
        ))}
      </div>
      {/* UI/UX Design Projects Row */}
      <h3 className={styles.title}>UI/UX Design Projects</h3>
      <div className={styles.projectRow}>
        {projects
          .filter(project => project.type === 'UI/UX Design')
          .map((project, index) => (
            <div key={index} className={styles.projectItem}>
              <img src={project.image} alt={project.description} className={styles.projectImage} />
              <p className={styles.projectDescription}>{project.description}</p>
              <button 
                className={styles.viewButton} 
                onClick={() => window.open(project.repoLink, '_blank')}
              >
                View on Figma
              </button>
            </div>
          ))}
      </div>

    </section>
  );
}

export default Projects;
