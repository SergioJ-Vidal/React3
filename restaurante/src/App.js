import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      </BrowserRouter>  
    </div>
  );
}

export default App;
