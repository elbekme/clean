import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header  from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Card from './components/Card/Card';
import Articles from './components/Articles/Articles';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Card/>
    <Articles/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
