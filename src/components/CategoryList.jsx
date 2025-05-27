import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div>
      <h2>Categorías</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat}>
            <Link to={`/category/${cat}`} style={{ textDecoration: 'none' }}>
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
