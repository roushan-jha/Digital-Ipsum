import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import PropertyListPage from "./pages/PropertyListPage"
import ServicesPage from "./pages/ServicesPage"
import AgentPage from "./pages/AgentPage"
import CareerPage from "./pages/CareerPage"
import ContactPage from "./pages/ContactPage"
import Footer from "./components/Footer"

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/property" element={<PropertyListPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/agent" element={<AgentPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
