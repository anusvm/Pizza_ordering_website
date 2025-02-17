import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Order() {
    const { pizza_id } = useParams();
    const [userName, setUserName] = useState("");
    const [quantity, setQuantity] = useState(1);

    const placeOrder = () => {
        axios.post("http://localhost:5000/api/orders", {
            pizza_id,
            user_name: userName,
            quantity
        }).then((response) => {
            alert(response.data.message);
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div>
            <h1>Place Order</h1>
            <input 
                type="text" 
                placeholder="Your Name" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
            />
            <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} 
            />
            <button onClick={placeOrder}>Order Now</button>
        </div>
    );
}

export default Order;
