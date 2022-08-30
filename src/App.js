import './App.css';
import CardsAndInfo from './Components/CardsAndInfo';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Testimonial from './Components/Testimonial';

function App() {
  return (
    <div className="app">
      <Navbar />

      <Hero />
      <CardsAndInfo/>
      <Testimonial/>
     <Footer/>




    </div>
  );
}

export default App;
