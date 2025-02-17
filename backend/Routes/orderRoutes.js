const express = require("express");
const router = express.Router();
const db = require("../db");

// Place an order
router.post("/", (req, res) => {
    const {pizza_id, user_name, quantity } = req.body;
    const query = "INSERT INTO order_details (pizza_id, user_name, quantity) VALUES (?, ?, ?)";

    db.query(query, [pizza_id, user_name, quantity], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Order placed successfully", order_id: results.insertId });
    });
});

module.exports = router;
