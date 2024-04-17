import './project-list-item.css';
import { useLanguage } from '../contexts/language.context';
import { useState } from 'react';
// import custom Modal
import ProjectModal from './ProjectModal';

const ProjectListItem = ({ project }) => {
  const { language } = useLanguage();
  const [isModalopen, setisModalOpen] = useState(false);

  const showProjectDetails = (e) => {
    e.preventDefault();
    setisModalOpen(true);
  };

  const closeModal = () => {
    setisModalOpen(false);
  };

  return (
    <>
      <li className="project-card">
        <a href="" data-project-id={project.id} onClick={showProjectDetails}>
          <img src={`images/${project.image}`} alt="project" />
          <h5
            className="project-title"
            dangerouslySetInnerHTML={{
              __html: project[language].title.replace('NT2', 'NT2<br>'),
            }}
          ></h5>
        </a>
        <div className="tooltip">{project[language].summary}</div>
      </li>
      {isModalopen && (
        <ProjectModal
          isModalopen={isModalopen}
          project={project}
          language={language}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ProjectListItem;
