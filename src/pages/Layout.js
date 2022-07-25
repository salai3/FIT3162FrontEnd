import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Dashboard from "./Dashboard";
import PurchaseHistoryPage from "./PurchaseHistoryPage";

const Layout = () => {
    return(<React.Fragment>
        <Navbar />
        <main>
            <Routes>
                <Route path="*" element={<Dashboard />} />
                <Route path="orders" element={<PurchaseHistoryPage />}/>
            </Routes>
        </main>
    </React.Fragment>);
};

export default Layout;