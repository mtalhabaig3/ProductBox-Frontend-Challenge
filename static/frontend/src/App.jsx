import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";
import { Provider } from "react-redux";
import { store } from "./store/store"; // Import your Redux store
import Navbar from "./components/ui/NavBar";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar /> {/* Navbar appears on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-items" element={<Items />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
