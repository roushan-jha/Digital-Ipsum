import Footer from "./components/Basic/Footer"
import NavBar from "./components/Basic/NavBar"
import LandingPage from "./components/LandingPage"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductPage from './components/ProductPage'
import BlogPage from './components/BlogPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'


function App() {

  return (
   <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <Footer />
   </Router>
  )
}

export default App
