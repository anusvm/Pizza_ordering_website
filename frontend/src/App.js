import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Order from "./components/Order";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order/:pizza_id" element={<Order />} />
            </Routes>
        </Router>
    );
}

export default App;
