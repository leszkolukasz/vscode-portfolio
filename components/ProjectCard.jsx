import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';
import { useState } from 'react';
import GalleryModal from './GalleryModal';

const classNames = [
  "react", "node", "orange", "redux", "bulma", "next", "react-query", "brown", "pink", "yellow"
]

const ProjectCard = ({ project }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={project.image} layout='fill' objectFit='contain' alt={project.name} />
      </div>
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={classNames[Math.floor(Math.random() * classNames.length)]}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          {project.demo && <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            Live Demo
          </a>}
          {project.gallery_path && (
            <a
              className={styles.underline}
              onClick={() => setIsOpen(true)}
            >
              Gallery
            </a>
          )}
        </div>
      </div>
    </div>
    {modalIsOpen && <GalleryModal gallery={project.gallery} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ProjectCard;
