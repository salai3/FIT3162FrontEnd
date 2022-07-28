import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Dashboard from "./Dashboard";
import InventoryPage from "./InventoryPage";
import OrderDetails from "./OrderDetails";
import PurchaseHistoryPage from "./PurchaseHistoryPage";

const Layout = () => {
    return(<React.Fragment>
        <Navbar />
        <main>
            <Routes>
                <Route path="*" element={<Dashboard />} />
                <Route path="orders" element={<PurchaseHistoryPage />}/>
                <Route path="orders/:orderId" element={<OrderDetails />}/>
                <Route path="products" element={<InventoryPage />} />
            </Routes>
        </main>
    </React.Fragment>);
};

export default Layout;