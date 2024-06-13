import Footer from "./components/Footer";
import Home from "./components/Home";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  
  return (
    <div className="w-full">
      <Home />
      <Clients />
      <Features />
      <Services />
      <About />
      <Footer />
    </div>
  )
}

export default App
