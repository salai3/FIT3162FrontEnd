import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../UI/Navbar";
import Dashboard from "./Dashboard";
import ProductDetails from "./Products/ProductDetails";
import OrderDetails from "./Orders/OrderDetails";
import PurchaseHistoryPage from "./Orders/PurchaseHistoryPage";
import SuppliersPage from "./Suppliers/SuppliersPage";
import Breadcrumb from "../UI/Breadcrumb";

const InventoryPage = React.lazy(() => import('./Products/InventoryPage'));

const Layout = () => {
    return(<React.Fragment>
        <Navbar />
        <Breadcrumb />
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