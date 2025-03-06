import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-items" element={<Items />} />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </Router>
  );
}

export default App;
