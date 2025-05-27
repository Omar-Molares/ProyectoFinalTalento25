import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Todos los productos</h1>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map(product => (
            <div key={product.id} style={{ width: 200, padding: 10, margin: 10, border: '1px solid #ddd' }}>
              <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
              <h4>{product.title}</h4>
              <p>{product.description.slice(0, 70)}</p>
              <Button>Agregar a carrito</Button>      
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
