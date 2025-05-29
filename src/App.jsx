import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import ProductDetail from "./components/ProductDetail"
import NavBar from "./components/NavBar"
import Footer from "./pages/Footer"
import Login from "./pages/Login"

function App() {

  return (
     <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/category/:catId" element={<Home/>} />
          <Route exact path="/product/:productId" element={<ProductDetail/>} />
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App
