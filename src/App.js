import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Social from './pages/social';
import Recommendations from './pages/recommendations';
import Projects from './pages/projects';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/social' element={<Social/>} />
        <Route path='/recommendations' element={<Recommendations/>} />
        <Route path='/projects' element={<Projects/>} />

    </Routes>
    </Router>
);
}
  
export default App;


