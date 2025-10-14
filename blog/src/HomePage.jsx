import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BlockyGradient from './BlockyGradient';
import { AnimatedSection } from './AnimatedSection';
import ContactForm from './ContactForm';

import welcomeSectionBgImg from './assets/images/welcomesectionbg.png';
import prescriptionSampleImg from './assets/images/prescriptionsample.png';
import oleBlogSampleImg from './assets/images/oleblogsample.png';
import drivingSampleImg from './assets/images/drivingsample.png';
import drumSampleImg from './assets/images/drumsample.png';
import aboutMeSampleImg from './assets/images/aboutmesample.png';
export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();


  const handlePrescriptionClick = () => {
    navigate('/prescription-manager-app');
  };

  const handleMazeRobotClick = () => {
    navigate('/maze-robot');
  };

  const handleDrumRobotClick = () => {
    navigate('/drum-robot');
  };

   const handleBlogClick = () => {
    navigate('/blog-website');
  };


  useEffect(() => {
    if (location.state?.scrollTo) {

      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
      
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="homepage">
      <div className="welcomesection" style={{ backgroundImage: `url(${welcomeSectionBgImg})` }}>
        <AnimatedSection className="welcomesectionbox">
          <h1>Welcome to <span className="highlight">Olé's Blog!</span></h1>
          <p className="welcomedesc">This is my personal archive of cool projects, such as websites, apps, and robots, that I have built throughout the past years.</p>
        </AnimatedSection>
      </div>
  
      <AnimatedSection className="projectsection" id="prosec" delay={0.2}>
        <div className="projectsectionbox">
          <div className="foldertab">
            <h2> My <span className="highlight">Projects</span></h2>
          </div>
          <div className="foldercontent">
            <div className="projectlist">
              <AnimatedSection className="projectbox" onClick={handlePrescriptionClick} delay={0.2}>
                <BlockyGradient />
                <div className="projecttext">
                  <h3>Prescription Manager App</h3>
                  <div className="skillslist">
                    <span className="skill">JavaScript</span>
                    <span className="skill">CSS</span>
                    <span className="skill">HTML</span>
                    <span className="skill">Bootstrap</span>
                    <span className="skill">Swift</span>
                    <span className="skill">AWS</span>
                    <span className="skill">Figma</span>
                  </div>
                  <p>A healthcare app that connects doctors and heart patients, allowing doctors to create digital prescriptions that automatically sync to patients' phones and watches with scheduled reminders.</p>
                </div>
                <div className="projectimage">
                  <img src={prescriptionSampleImg}/>
                </div>
              </AnimatedSection>

              <AnimatedSection className="projectbox" onClick={handleBlogClick} delay={0.2}>
                <BlockyGradient />
                <div className="projecttext">
                  <h3>Olé's Blog</h3>
                  <div className="skillslist">
                    <span className="skill">React</span>
                    <span className="skill">JavaScript</span>
                    <span className="skill">CSS</span>
                    <span className="skill">HTML</span>
                    <span className="skill">Bootstrap</span>
                    <span className="skill">EmailJS</span>
                  </div>
                  <p>A portfolio website that showcases my projects in a detailed blog format, with photos and videos.</p>
                </div>
                <div className="projectimage">
                  <img src={oleBlogSampleImg}/>
                </div>
              </AnimatedSection>

              <AnimatedSection className="projectbox" onClick={handleMazeRobotClick} delay={0.2}>
                <BlockyGradient />
                <div className="projecttext">
                  <h3>Maze-Navigating Robot Car</h3>
                  <div className="skillslist">
                    <span className="skill">C++</span>
                    <span className="skill">Arduino</span>
                    <span className="skill">CAD</span>
                  </div>
                  <p>An autonomous robot car that navigates mazes independently, using ultrasonic sensor data to make decisions and find paths from start to finish with real-time obstacle detection and turning logic.</p>
                </div>
                <div className="projectimage">
                  <img src={drivingSampleImg}/>
                </div>
              </AnimatedSection>

              <AnimatedSection className="projectbox" onClick={handleDrumRobotClick} delay={0.2}>
                <BlockyGradient />
                <div className="projecttext">
                  <h3>Hi-Hat and Drum-Playing Robots</h3>
                  <div className="skillslist">
                    <span className="skill">C++</span>
                    <span className="skill">Arduino</span>
                    <span className="skill">CAD</span>
                  </div>
                   <p>A synchronized set of drum and hi-hat-playing robots that perform complete drum pieces by reading MIDI files from a computer and taking commands from WiFi signals.</p>
                </div>
                <div className="projectimage">
                  <img src={drumSampleImg}/>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="aboutsection" id="aboutsec" delay={0.2}>
        <div className="aboutsectionbox">
          <div className="foldertab">
            <h2>About <span className="highlight">Me</span></h2>
          </div>
        
          <div className="foldercontent">
            <AnimatedSection className="aboutcontent" delay={0.2}>
              <BlockyGradient />
              <div className="aboutphoto">
                <img src={aboutMeSampleImg}/>
              </div>

              <div className="abouttext">
                <h3>Hey there! </h3>
                <p>I’m Olé Ho, a freshman at the University of Waterloo studying computer science and finance. I'm driven by an insatiable curiosity about the inner workings of technology and a passion for using it to solve real-life challenges. Currently, I’m learning more about full-stack applications, financial trading models, and machine learning. Plus, in my free time, you’ll probably see me tinkering around my desk and creating custom miniature models of the most grotesque creatures I can imagine.</p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </AnimatedSection>

      <ContactForm />
    </div>
  );
}