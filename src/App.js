import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import MainNavbar from './Components/Navbar/MainNavbar';
import Navbar from './Components/Navbar/Navbar';
import SlideFour from './Components/Slides/SlideFour';
import SlideOne from './Components/Slides/SlideOne';
import SlideThree from './Components/Slides/SlideThree';
import SlideTwo from './Components/Slides/SlideTwo';
import Menu from './Components/ToogleMenu/Menu';

function App() {
  const [toogleMenu, setToogleMenu] = useState(false)

  return (
    <div className="App">
     <Navbar />
     <MainNavbar setToogleMenu={setToogleMenu} toogleMenu={toogleMenu} />
     {
      toogleMenu &&
      <Menu />
     }
     <div className='container mx-auto px-5'>
     <SlideOne />
     <SlideTwo />
     <SlideThree />
     <SlideFour />
     </div>
     <Footer />
    </div>
  );
}

export default App;
