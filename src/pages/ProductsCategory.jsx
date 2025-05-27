import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';


function ProductsByCategory() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [category]);

  return (
    <div>
      <h2>Productos en: {category}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ width: 200, margin: 10, padding: 10, border: '1px solid #ddd' }}>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
            <p>{product.title}</p>
            <p>${product.price}</p>
            <button>Agragar a carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsByCategory;
