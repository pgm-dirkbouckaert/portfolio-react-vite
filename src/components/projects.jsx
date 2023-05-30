import { useContext, useEffect, useState } from 'react';
import { projects } from '../data';
import { LanguageContext } from '../contexts/language.context';
import ProjectList from './project-list';

const Projects = () => {
  const getCategories = () => {
    return [...new Set(projects.map((project) => project[language].category))];
  };
  const { language } = useContext(LanguageContext);
  const [categories] = useState(getCategories);

  return (
    <>
      {categories &&
        categories.map((category, index) => (
          <ProjectList key={index} category={category} index={index} />
        ))}
    </>
  );
};

export default Projects;
