import Footer from "./components/Basic/Footer"
import NavBar from "./components/Basic/NavBar"
import LandingPage from "./components/LandingPage"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
   <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
    <Footer />
   </Router>
  )
}

export default App
