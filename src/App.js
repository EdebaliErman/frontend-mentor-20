import { useState } from 'react';
import Cards from './Components/Cards/Cards';
import ComplatedCard from './Components/ComplatedCard/ComplatedCard';
import './Style/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mail, setMail] = useState()
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Cards setMail={setMail}  />} />
        <Route path='/complated' element={<ComplatedCard mail={mail} />} />
      </Routes>
    </Router>
  );
}

export default App;
