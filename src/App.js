import "./styles/style.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Route from "./components/Route";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  //navigation start
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };
  //navigation end

  return (
    <div>
      <NavBar navigate={navigate}></NavBar>
      <div>
        <Route path="/" currentPath={currentPath}>
          <HomePage />
        </Route>
        <Route path="/about" currentPath={currentPath}>
          <AboutPage />
        </Route>
        <Route path="/shop" currentPath={currentPath}>
          <ShopPage />
        </Route>
        <Route path="/checkout" currentPath={currentPath}>
          <CheckoutPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
