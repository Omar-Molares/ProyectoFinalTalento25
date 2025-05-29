import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product detail:', error));
  }, [productId]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <div style={styles.details}>
        <h1>{product.title}</h1>
        <p><strong>Categoría:</strong> {product.category}</p>
        <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
        <p><strong>Descripción:</strong> {product.description}</p>
        <Link to="/">Volver al Home</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '24px',
    padding: '20px',
    flexWrap: 'wrap',
  },
  image: {
    width: '300px',
    objectFit: 'contain',
  },
  details: {
    maxWidth: '600px',
  },
};