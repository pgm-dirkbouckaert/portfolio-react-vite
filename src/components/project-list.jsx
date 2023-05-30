import './project-list.css';
import { FaChevronDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { navItems, projects } from '../data';
import { useLanguage } from '../contexts/language.context';
import ProjectListItem from './project-list-item';
import { useActiveNav } from '../contexts/active-navitem.context';

const ProjectSection = ({ category }) => {
  const { language } = useLanguage();
  const { activeNav, setActiveNav } = useActiveNav();
  const [filteredProjects, setFilteredProjects] = useState(null);
  const [href, setHref] = useState(null);
  const [nextHref, setNextHref] = useState(null);

  useEffect(() => {
    setFilteredProjects(
      projects.filter((project) => project[language].category === category)
    );
    // Set href
    setHref(navItems[language].find((item) => item.text === category).href);
    // Set next href (navigate whith chevron)
    const nextHrefIndex =
      navItems[language].findIndex((item) => item.text === category) + 1;
    if (nextHrefIndex === navItems[language].length) setNextHref('#contact');
    else setNextHref(navItems[language][nextHrefIndex].href);
  }, []);

  const handleChevronClick = (e) => {
    setActiveNav(nextHref.replace('#', 'navitem-'));
  };

  if (!href) return null;
  if (!nextHref) return null;
  if (!filteredProjects) return null;

  return (
    <section
      id={href.replace('#', '')}
      className={`page projects ${href.replace('#', '')}`}
    >
      <h1>{category}</h1>
      <ul className="project-list container">
        {filteredProjects.map((project) => (
          <ProjectListItem key={project.id} project={project} />
        ))}
      </ul>
      <a
        href={nextHref}
        className="chevron-link chevron-link--down"
        onClick={handleChevronClick}
      >
        <FaChevronDown />
      </a>
    </section>
  );
};

export default ProjectSection;
