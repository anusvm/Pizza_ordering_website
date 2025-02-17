const express = require("express");
const router = express.Router();
const db = require("../db");

// Fetch all pizzas with type details
router.get("/", (req, res) => {
    const query = `
        SELECT pizzas.pizza_id, pizzas.price, pizzas.size, 
               pizza_types.name AS pizza_name, pizza_types.category, pizza_types.ingredients 
        FROM pizzas 
        JOIN pizza_types ON pizzas.pizza_type_id = pizza_types.pizza_type_id
    `;

    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

module.exports = router;
