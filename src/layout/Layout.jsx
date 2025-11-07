// src/layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="content"><Outlet /></main>
      <Footer />
    </div>
  );
}
