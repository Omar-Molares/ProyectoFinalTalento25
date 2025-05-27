import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsCategory from './pages/ProductsCategory';
import NavBar from './components/NavBar';
import Footer from './pages/Footer';

function App() {

  return (
     <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<ProductsCategory />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
