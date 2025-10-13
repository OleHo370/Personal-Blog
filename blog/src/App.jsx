import Nav from './Nav';
import HomePage from './HomePage';
import { Routes, Route } from 'react-router-dom';
import PrescriptionCheckerPage from './PrescriptionCheckerPage';
import MazeRobotPage from './MazeRobotPage';
import DrumRobotPage from './DrumRobotPage';


export default function App() {
  
 return (
   <>
     <Nav />

     {<Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/prescription-manager-app" element={<PrescriptionCheckerPage />} />
       <Route path="/maze-robot" element={<MazeRobotPage />} />
       <Route path="/drum-robot" element={<DrumRobotPage />} />
     </Routes>}
   </>
 );
}
