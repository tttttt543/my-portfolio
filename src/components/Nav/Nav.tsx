import { useState } from 'react';
import { motion } from 'framer-motion';
import './nav.css';
import logo from '/src/assets/logo.svg';
import { Menu, Close } from '../../assets/icons';
import { navLinks } from '../../globals/constants';
const Nav = () => {
  const [Open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-logo-box">
        <a href={`${location}`} onClick={() => location.reload()}>
          <img src={logo} alt="rwxdan" className="nav-logo" />
        </a>
      </div>
      <div>
        <img
          src={Open ? Close : Menu}
          alt="Menu"
          className="nav-menu"
          onClick={() => setOpen((prev) => !prev)}
        />
        <motion.div initial={{ x: 100 }} animate={{ x: 0 }}>
          <ul className={`nav-links-box ${Open ? 'expanded' : ''}`}>
            {navLinks.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`${
                    index === navLinks.length - 1
                      ? '/resume.pdf'
                      : `#${item.id}`
                  }`}
                  className={` ${
                    index === navLinks.length - 1
                      ? 'nav-links resume'
                      : 'nav-links'
                  }  `}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Nav;
