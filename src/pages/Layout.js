import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Dashboard from "./Dashboard";
import InventoryPage from "./Products/InventoryPage";
import ProductDetails from "./Products/ProductDetails";
import OrderDetails from "./Orders/OrderDetails";
import PurchaseHistoryPage from "./Orders/PurchaseHistoryPage";
import SuppliersPage from "./Suppliers/SuppliersPage";

const Layout = () => {
    return(<React.Fragment>
        <Navbar />
        <main>
            <Routes>
                <Route path="*" element={<Dashboard />} />
                <Route path="orders" element={<PurchaseHistoryPage />}/>
                <Route path="orders/:orderId" element={<OrderDetails />}/>
                <Route path="products" element={<InventoryPage />} />
                <Route path="products/:productId" element={<ProductDetails />}/>
                <Route path="suppliers" element={<SuppliersPage />} />
            </Routes>
        </main>
    </React.Fragment>);
};

export default Layout;