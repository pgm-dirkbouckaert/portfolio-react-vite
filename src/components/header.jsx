import './header.css';
import * as Scroll from 'react-scroll';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';
import { navItems } from '../data';
import { FaCode } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/language.context';
import { useActiveNav } from '../contexts/active-navitem.context';

const Header = () => {
  const { language, handleChangeLanguage } = useLanguage();
  const { activeNav, setActiveNav } = useActiveNav();
  const [scrollOffset, setScrollOffset] = useState(0);
  const refHamburgerCheckbox = useRef();
  const refHeader = useRef();

  useEffect(() => {
    setScrollOffset(refHeader.current.clientWidth < 880 ? -350 : -64);
    Events.scrollEvent.register('begin', function (to, element) {
      // console.log('begin', arguments);
    });
    Events.scrollEvent.register('end', function (to, element) {
      // console.log('end', arguments);
    });
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to) => {
    // console.log(to);
    setActiveNav(`navitem-${to}`);
  };

  const handleNavClick = (e) => {
    setActiveNav(e.target.id);
    refHamburgerCheckbox.current.click();
    setScrollOffset(refHeader.current.clientWidth < 880 ? -350 : -64);
  };

  return (
    <header ref={refHeader}>
      <nav>
        <input
          type="checkbox"
          className="hamburger-checkbox"
          id="hamburger-checkbox"
          ref={refHamburgerCheckbox}
        />
        <RxHamburgerMenu size="1.5em" className="hamburger-icon-closed" />
        <IoCloseOutline size="1.75em" className="hamburger-icon-open" />
        <ul>
          <li>
            <a href="">
              <FaCode />
            </a>
          </li>
          {navItems &&
            navItems[language].map((item, index) => (
              <li key={index}>
                <Link
                  activeClass="active"
                  to={item.href.replace('#', '')}
                  spy={true}
                  smooth={true}
                  offset={scrollOffset}
                  duration={300}
                  onSetActive={handleSetActive}
                  id={`navitem-${item.href.replace('#', '')}`}
                  href={item.href}
                  className={
                    'navitem-' + item.href.replace('#', '') === activeNav
                      ? 'active'
                      : ''
                  }
                  onClick={handleNavClick}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          <li>
            <select
              className="choose-language"
              value={language}
              onChange={handleChangeLanguage}
            >
              <option value="nl">NL</option>
              <option value="en">EN</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
