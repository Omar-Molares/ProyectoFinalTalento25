import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa';

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  return (
     <Navbar bg="dark" data-bs-theme="dark">
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          marginRight: "20px",
          marginLeft: "20px",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>
      <Button className="btn btn-success me-2">
        <Link  to="/category/men's clothing">
          Ropa hombre
        </Link>
      </Button>
      <Button className="btn btn-success me-2">
        <Link  to="/category/electronics">
          Electronica
        </Link>
      </Button>
      <Button className="btn btn-success me-2">
        <Link to="/category/women's clothing">
          Ropa mujer
        </Link>
      </Button>
      <Button className="btn btn-success me-2">
        <Link  to="/category/jewelery">
          Joyas
        </Link>
      </Button>
      <Button className="justify-content-end">Login</Button>
       <a href="/carrito" className="relative">
            <FaShoppingCart size={24} />
       </a>
    </Navbar>
  );
}

export default NavBar;
