import { Routes, Route, Link } from "react-router-dom";
import BookDemo from "./pages/BookDemo/BookDemo";
import "./App.css";
import "./styles/globals.css";

function App() {
  return (
    <>
      {/* MOBILE-READY NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/book-demo" className="nav-link">Book Demo</Link>
        </div>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-demo" element={<BookDemo />} />
        </Routes>
      </main>
    </>
  );
}

function Home() {
  return (
    <div className="wrap">
      <h1>Welcome to NeuroRoads</h1>
      <p>Click "Book Demo" to explore the VR therapy form.</p>
    </div>
  );
}

export default App;
