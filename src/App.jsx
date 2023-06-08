import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Purchases from "./pages/Purchases";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRouters";

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <>
      <HashRouter>
        <NavBar />
        {isLoading && <Loading />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
