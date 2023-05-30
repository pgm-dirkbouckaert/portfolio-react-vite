import './who-am-i.css';
import { FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import { navItems, whoAmI } from '../data';
import { useLanguage } from '../contexts/language.context';

const WhoAmI = () => {
  const { language } = useLanguage();

  return (
    <section id="who-am-i" className="page who-am-i">
      <div className="container">
        <div className="profile">
          <img src={`images/avatar.png`} alt="avatar" />
          <h1>Dirk Bouckaert</h1>
          <div className="social">
            <a
              href="https://github.com/pgm-dirkbouckaert"
              title="GitHub"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dirk-bouckaert-ahs/"
              title="LinkedIn"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div
          className="info"
          id="info"
          dangerouslySetInnerHTML={{ __html: whoAmI[language] }}
        ></div>
      </div>
      <a
        href={navItems[language][1].href}
        className="chevron-link chevron-link--down"
      >
        <FaChevronDown />
      </a>
    </section>
  );
};

export default WhoAmI;
