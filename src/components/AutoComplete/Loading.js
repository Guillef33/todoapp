import { useEffect, useState } from "react";
// import "./styles.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  console.log(products);

  return (
    <div className="input-container">
      {isLoading ? (
        <div className="App">
          <h1>Cargando...</h1>
        </div>
      ) : (
        <div className="App">
          <h1>Listo</h1>
          {products.map((product) => {
            return <li>{product.category}</li>;
          })}
        </div>
      )}
    </div>
  );
}
