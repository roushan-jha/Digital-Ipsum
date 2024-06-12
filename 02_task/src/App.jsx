import Footer from "./components/Footer";
import SimpleCard from "./components/Basic/SimpleCard";
import Stats from "./components/Basic/Stats";
import MainCard from "./components/Basic/MainCard";

function App() {
  const headings = [
    "Best Technology Tools", "Fast & Responsive Result", 
    "More Flexible Pricing", "Data Security Guarantee"
  ];
  const paragraphs = [
    "It's easier to develop a business with the latest modern technology tools that we have so that it can give your business the opportunity to grow bigger",
    "We guarantee the impact of our work can be seen quickly and precisely because of our business strategy and great team that work professionally",
    "The price offers we provide tend to be more flexible, you can choose according to your needs, you don't have to choose a particular package",
    "We will manage your business and company data security wisely and guaranteed to be safe from outside parties, without any fraud from our side"
  ];
  
  return (
    <div className="w-full bg-green-400">
      <h1 className="text-center">Hello World</h1>
      <Footer />
    </div>
  )
}

export default App
