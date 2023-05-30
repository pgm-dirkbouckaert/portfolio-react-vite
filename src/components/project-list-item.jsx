import './project-list-item.css';
import { GoLinkExternal } from 'react-icons/go';
import { useLanguage } from '../contexts/language.context';
import { useState } from 'react';
// import Modal
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

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
        <Modal
          open={isModalopen}
          onClose={closeModal}
          top
          classNames={{
            modal: 'customModal',
          }}
        >
          <div className="modal-content">
            <h3 className="project-title">
              <a href={project.url} target="_blank">
                {project[language].title}
                <GoLinkExternal size={25} />
              </a>
            </h3>
            <div className="project-category-icons">
              {project[language].categoryIcons.map((icon, index) => {
                return (
                  <img
                    key={index}
                    src={`images/techs/${icon}`}
                    alt="tech icon"
                  />
                );
              })}
            </div>
            <div className="project-summary">
              <h5>{project[language].summary}</h5>
            </div>
            <div className="project-details">
              <ul>
                {project[language].details.split('|').map((item, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item.trim() }}
                  ></li>
                ))}
                <li>
                  <a href={project.url} target="_blank">
                    {project[language].linkText}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProjectListItem;
