import { Routes, Route, Link } from "react-router-dom";
import BookDemo from "./pages/BookDemo/BookDemo"; // your page
import './App.css';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/book-demo">Book Demo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-demo" element={<BookDemo />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to Vite + React</h1>
      <p>Click "Book Demo" to see the form.</p>
    </div>
  );
}

export default App;
