import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="d-flex justify-content-center align-items-center vh-100">
                <Outlet/>
            </main>
            <Footer />
        </>
    )
}