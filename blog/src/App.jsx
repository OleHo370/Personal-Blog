import Nav from './Nav';
import './styles.css';

export default function App() {

  return (
    <>
      <Nav />
      <div className="homepage">
        <div className="welcomesection">
          <div className="welcomesectionbox">
            <h1>Welcome to <span className = "highlight">Olé's Blog!</span></h1>
            <p className="welcomedesc">This is my personal archive of cool projects, such as websites, apps, and robots, that I have built throughout the past years</p>
          </div>
        </div>
      </div>
    </>
  );
}