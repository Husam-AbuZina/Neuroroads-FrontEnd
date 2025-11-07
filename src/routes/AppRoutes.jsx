// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import BookDemo from "../pages/BookDemo/BookDemo";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="apps" element={<Apps />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book-demo" element={<BookDemo />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
