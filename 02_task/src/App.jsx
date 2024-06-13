import Footer from "./components/Footer";
import Home from "./components/Home";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Services from "./components/Services";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
      <Router>
        <Home />
        <Clients />
        <Features />
        <Services />
        <About />
        <Footer />
      </Router>
  )
}

export default App
