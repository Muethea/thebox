
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';


function App() {
  return (
    <>

    <Navbar/>    
      
       <Routes>
        <Route path='/' element={<Home />}>

        </Route>
        <Route path='about' element={<About />}>

        </Route>

        <Route path='projects' element={<Projects />}>

        </Route>


        <Route path='services' element={<Services />}>

        </Route>
        <Route path='contact' element={<Contact />}>

        </Route>
      </Routes>

 
    </>
  );
}

export default App;
