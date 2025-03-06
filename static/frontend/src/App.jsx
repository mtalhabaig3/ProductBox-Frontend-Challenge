import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";
import { Provider } from "react-redux";
import { store } from "./store/store"; // Import your Redux store

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-items" element={<Items />} />
          <Route path="/add-item" element={<AddItem />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
