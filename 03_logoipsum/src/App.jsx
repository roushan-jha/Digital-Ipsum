import Footer from "./components/Basic/Footer"
import NavBar from "./components/Basic/NavBar"
import LandingPage from "./components/LandingPage"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductPage from './components/ProductPage'
import BlogPage from './components/BlogPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ScrollToTop from "./components/Basic/ScrollToTop"


function App() {

  return (
   <Router>
    <ScrollToTop />
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contact/general" element={<ContactPage />} />
      <Route path="/contact/payment" element={<ContactPage />} />
      <Route path="/contact/service" element={<ContactPage />} />
      <Route path="/contact/refund" element={<ContactPage />} />
      <Route path="/contact/other" element={<ContactPage />} />
    </Routes>
    <Footer />
   </Router>
  )
}

export default App
