const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const pizzaRoutes = require("./routes/pizzaRoutes");
const orderRoutes = require("./Routes/orderRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to the Pizza Ordering App!");
});

// Routes
app.use("/api/pizzas", pizzaRoutes);
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
