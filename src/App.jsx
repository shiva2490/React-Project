import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react"; // Import useState
import { useDispatch, useSelector } from "react-redux";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Orders from "./Orders";
import ContactUs from "./ContactUs";
import AboutUS from "./AboutUs";
import Home from "./Home";
import Milk from "./Milk";
import { logout } from "./Store";
import Login from "./Login";
import NotFound from "./NotFound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
    const [isOpen, setIsOpen] = useState(false); // State to control navbar toggle
    const cart = useSelector((state) => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    let dispatch = useDispatch();

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand text-light">
                        <i className="fas fa-store me-2"></i> Store
                    </Link>
                    {/* Toggle Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    {/* Navbar Links */}
                    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/veg" className="nav-link text-light" onClick={() => setIsOpen(false)}>
                                    <i className="fas fa-carrot me-2"></i> Veg-Items
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/nonveg" className="nav-link text-light" onClick={() => setIsOpen(false)}>
                                    <i className="fas fa-drumstick-bite me-2"></i> Non-Veg
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/milk" className="nav-link text-light" onClick={() => setIsOpen(false)}>
                                    <i className="fas fa-cheese me-2"></i> Deserts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link text-light position-relative" onClick={() => setIsOpen(false)}>
                                    <i className="fas fa-shopping-cart fa-lg"></i>
                                    {totalItems > 0 && (
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                                            {totalItems}
                                        </span>
                                    )}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/orders" className="nav-link text-light" onClick={() => setIsOpen(false)}>
                                    <i className="fas fa-box me-2"></i> Orders
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contus" className="nav-link text-light" onClick={() => setIsOpen(false)}>
                                    <i className="fas fa-phone-alt me-2"></i> ContactUs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/aobus" className="nav-link text-light" onClick={() => setIsOpen(false)}>
                                    <i className="fas fa-info-circle me-2"></i> AboutUs
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            {isAuthenticated ? (
                                <>
                                    <span className="navbar-text text-light me-3">
                                        <i className="fas fa-user-circle me-1"></i> Welcome, {user}!
                                    </span>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            dispatch(logout());
                                            setIsOpen(false); // Close navbar on logout
                                        }}
                                    >
                                        <i className="fas fa-sign-out-alt me-2"></i> Logout
                                    </button>
                                </>
                            ) : (
                                <Link to="/login" className="btn btn-success" onClick={() => setIsOpen(false)}>
                                    <i className="fas fa-sign-in-alt me-2"></i> Signin
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                <h1 className="text-center text-primary">
                    <i className="fas fa-shopping-basket me-2"></i> Welcome to Our Store
                </h1>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/veg" element={<Veg />} />
                    <Route path="/nonveg" element={<NonVeg />} />
                    <Route path="/milk" element={<Milk />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/contus" element={<ContactUs />} />
                    <Route path="/aobus" element={<AboutUS />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
