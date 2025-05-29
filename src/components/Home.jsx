import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard"

export default function Home() {

    const [products, setProducts] = useState(null);
    const {catId} = useParams();

    useEffect(() => {
        const url = catId
        ? `https://fakestoreapi.com/products/category/${catId}`
        : `https://fakestoreapi.com/products/`

        fetch(url)
          .then((response) => response.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error('error no se cargo', error))
    }, [catId])



    return (
        <div>
            <h1>productos {catId}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}