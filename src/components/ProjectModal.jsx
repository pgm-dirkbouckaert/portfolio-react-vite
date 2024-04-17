import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { GoLinkExternal } from 'react-icons/go';

const ProjectModal = ({ isModalopen, closeModal, project, language }) => {
  return (
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
          {project.url ? (
            <a href={project.url} target="_blank">
              {project[language].title}
              <GoLinkExternal size={25} />
            </a>
          ) : (
            project[language].title
          )}
        </h3>
        <div className="project-category-icons">
          {project[language].categoryIcons.map((icon, index) => {
            return (
              <img key={index} src={`images/techs/${icon}`} alt="tech icon" />
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
            {project.url && (
              <li>
                <a href={project.url} target="_blank">
                  {project[language].linkText}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
