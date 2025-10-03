import Nav from './Nav';
import HomePage from './HomePage';
import { Routes, Route } from 'react-router-dom';
import PrescriptionCheckerPage from './PrescriptionCheckerPage';


export default function App() {
  
 return (
   <>
     <Nav />

     {<Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/prescription-manager-app" element={<PrescriptionCheckerPage />} />
     </Routes>}
   </>
 );
}
