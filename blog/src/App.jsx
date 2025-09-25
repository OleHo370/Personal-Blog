import Nav from './Nav';
import './styles.css';
import prescriptionSampleImg from './assets/images/prescriptionsample.png';
import drivingSampleImg from './assets/images/drivingsample.png';
import drumSampleImg from './assets/images/drumsample.png';

export default function App() {

  return (
    <>
      <Nav />
      <div className="homepage">
        <div className="welcomesection">
          <div className="welcomesectionbox">
            <h1>Welcome to <span className = "highlight">Olé's Blog!</span></h1>
            <p className="welcomedesc">This is my personal archive of cool projects, such as websites, apps, and robots, that I have built throughout the past years.</p>
          </div>
        </div>

        <div className="projectsection" id="prosec">
          <div className="projectsectionbox">
            <h2> My <span className = "highlight">Projects</span></h2>

            <div className="projectlist">

              <div className="projectbox">
                <div className="projecttext">
                  <h3>Prescription Manager App</h3>
                  <p>test description ijodsfijbfoapkjnfds</p>
                  <div className="skillslist">
                    <span className="skill">JavaScript</span>
                    <span className="skill">CSS</span>
                    <span className="skill">HTML</span>
                    <span className="skill">Swift</span>
                    <span className="skill">AWS</span>
                    <span className="skill">Figma</span>
                  </div>
                </div>
                <div className="projectimage">
                  <img src={prescriptionSampleImg}/>
                </div>
              </div>

              <div className="projectbox">
                <div className="projecttext">
                  <h3>Olé's Blog</h3>
                  <p>test description ijodsfijbfoapkjnfds</p>
                  <div className="skillslist">
                    <span className="skill">React</span>
                    <span className="skill">JavaScript</span>
                    <span className="skill">CSS</span>
                    <span className="skill">HTML</span>
                  </div>
                </div>
                
              </div>

              <div className="projectbox">
                <div className="projecttext">
                  <h3>Maze-Navigating Robot Car</h3>
                  <p>test description ijodsfijbfoapkjnfds</p>
                  <div className="skillslist">
                    <span className="skill">C++</span>
                    <span className="skill">Arduino</span>
                    <span className="skill">CAD</span>
                  </div>
                </div>
                <div className="projectimage">
                  <img src={drivingSampleImg}/>
                </div>
              </div>

              <div className="projectbox">
                <div className="projecttext">
                  <h3>Drum-Playing Robot</h3>
                  <p>test description ijodsfijbfoapkjnfds</p>
                  <div className="skillslist">
                    <span className="skill">C++</span>
                    <span className="skill">Arduino</span>
                    <span className="skill">CAD</span>
                  </div>
                </div>
                <div className="projectimage">
                  <img src={drumSampleImg}/>
                </div>
                
                
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}