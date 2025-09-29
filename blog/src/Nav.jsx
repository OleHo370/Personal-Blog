import { useState } from 'react';

export default function Nav() {
  const stateArr = useState(false);
  const active = stateArr[0];
  const setActive = stateArr[1];

  function toggleMenu() {
    setActive(!active);
  };

  function goToHome(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  function goToProjects(e) {
    e.preventDefault();
    const proSec = document.getElementById('prosec');
    proSec.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    setActive(false);
  }

  function goToAbout(e) {
    e.preventDefault();
    const aboutSec = document.getElementById('aboutsec');
    aboutSec.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    setActive(false);
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
            <a href="/" className="button">Contact Me</a>
          </li>
        </ul>

        <i className={"bi" + (active ? " bi-x-square" : " bi-list") + " hamburgerlist"} onClick={toggleMenu}></i>
      </div>
    </nav>
  );
}
