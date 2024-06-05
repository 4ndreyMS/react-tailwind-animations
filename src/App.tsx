import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/nav";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/products" Component={ProductsPage}></Route>
          <Route path="/about" Component={AboutPage}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
