import logo from './logo.svg';
import './App.css';
import Header from './layout/header/index';
import Footer from './layout/footer';
import Services from './components/services';

import Dishes from './components/standout-Dishes/dish';
import Categories from './components/category';
import Testimonials from './components/Testimonials';

import HeroSection from './components/banner/Hero-section';


function App() {
  return (
    <div className="App">
     <Header/>
    {/*  */}
    
    <HeroSection/>
     <Categories/>
     <Dishes/>
     <Testimonials/>
     <Services/>
     <Footer/>
    </div>
  );
}

export default App;
