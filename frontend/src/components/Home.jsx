import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/pizzas")
        .then((response) => {
            console.log("API Response:", response.data); // Debug log
            setPizzas(response.data);
        })
        .catch((error) => console.error("Error fetching pizzas:", error));
}, []);


  return (
    <div>
      <h1>Pizza Menu</h1>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.pizza_id}>
            <h3>{pizza.pizza_name} ({pizza.size})</h3>
            <p>Category: {pizza.category}</p>
            <p>Ingredients: {pizza.ingredients}</p>
            <p>Price: ${pizza.price}</p>
            <Link to={`/order/${pizza.pizza_id}`}>Order Now</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
