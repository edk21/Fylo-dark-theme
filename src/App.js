import './App.css';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Productivity from './components/Productivity';
import Testimony from './components/Testimony';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Cards/>
      <Productivity/>
      <Testimony/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
