import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Nav() {
  const stateArr = useState(false);
  const active = stateArr[0];
  const setActive = stateArr[1];
  const navigate = useNavigate();
  const location = useLocation();

  function toggleMenu() {
    setActive(!active);
  }

  function goToHome(e) {
    e.preventDefault();
    setActive(false);
    
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  function goToProjects(e) {
    e.preventDefault();
    setActive(false);
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'prosec' } });
    } else {
      const proSec = document.getElementById('prosec');
      if (proSec) {
        proSec.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }

  function goToAbout(e) {
    e.preventDefault();
    setActive(false);
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'aboutsec' } });
    } else {
      const aboutSec = document.getElementById('aboutsec');
      if (aboutSec) {
        aboutSec.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }

  function goToContact(e) {
    e.preventDefault();
    setActive(false);
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'contactsec' } });
    } else {
      const contactSec = document.getElementById('contactsec');
      if (contactSec) {
        contactSec.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }

  return (
    <nav className="nav">
      <div className="topmenu">
        <a href="/" className="homelogo" onClick={goToHome}>
          <div className="homelogobox">
            <i className="bi bi-house-fill"></i>
            <span>Olé Ho</span>
          </div>
        </a>

        <ul className={"tablist" + (active ? " active" : "")}>
          <li className="tab">
            <a href="#prosec" className="tablink" onClick={goToProjects}>My Projects</a>
          </li>
          <li className="tab">
            <a href="#aboutsec" className="tablink" onClick={goToAbout}>About Me</a>
          </li>
          <li className="contactbutton">
            <a href="#contactsec" className="button" onClick={goToContact}>Contact Me</a>
          </li>
        </ul>

        <i className={"bi" + (active ? " bi-x-square" : " bi-list") + " hamburgerlist"} onClick={toggleMenu}></i>
      </div>
    </nav>
  );
}