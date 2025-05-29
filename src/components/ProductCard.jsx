import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'



export default function ProductCard({ product }) {

    const handleAddToCart = () => {
  Swal.fire({
    title: '¡Agregado al carrito!',
    text: ` fue agregado correctamente.`,
    icon: 'success',
    confirmButtonText: 'OK'
  });
};


   
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h2 style={styles.title}>{product.title}</h2>
      <p style={styles.price}>${product.price.toFixed(2)}</p>
      <p>{product.description.slice(0, 70)}</p>
      <button><Link to={`/product/${product.id}`}>Ver Detalle</Link></button>
      <button onClick={handleAddToCart} style={styles.button}>
          Agregar al carrito
        </button>
    </div>
  );
}



const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '250px',
    margin: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  image: {
    height: '150px',
    objectFit: 'contain',
    marginBottom: '10px',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  price: {
    fontSize: '1.1rem',
    color: 'green',
    marginBottom: '6px',
  },
};
