import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUS from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Milk from "./Milk";
import { logout } from "./Store";
import Login from "./Login";
import NotFound from "./NotFound";
import "./App.css";
import { decrementTime } from './Store';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartPulse, setCartPulse] = useState(false);
    const cart = useSelector((state) => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
      const timer = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
      
      return () => clearInterval(timer);
    }, [dispatch]);

    useEffect(() => {
        if (totalItems > 0) {
            setCartPulse(true);
            const timer = setTimeout(() => setCartPulse(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [totalItems]);

    return (
        <BrowserRouter>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-primary fixed-top shadow-sm">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand fw-bold">
                        <i className="fas fa-shopping-basket me-2"></i> FreshMart
                    </Link>
                    
                    {/* Hamburger Menu Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/veg" className="nav-link hover-grow" onClick={() => setIsOpen(false)}>
                                    <i className="fas fa-leaf me-2"></i> Veggies
                                </Link>
                            </li>
                                <li className="nav-item">
                                <Link to="/nonveg" className="nav-link hover-grow" onClick={() => setIsOpen(false)}>
                                <i className="fas fa-drumstick-bite me-2"></i>
                                    Non-Veg
                                </Link>
                                </li>
                            <li className="nav-item">
                                <Link to="/milk" className="nav-link hover-grow" onClick={() => setIsOpen(false)}>
                                    <i className="fas fa-ice-cream me-2"></i> Dairy
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    to="/cart" 
                                    className={`nav-link position-relative ${cartPulse ? 'cart-pulse' : ''}`} 
                                    onClick={() => setIsOpen(false)}
                                >
                                   Cart <i className="fas fa-cart-shopping me-2"></i> 
                                    {totalItems > 0 && (
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {totalItems}
                                        </span>
                                    )}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/orders" className="nav-link hover-grow" onClick={() => setIsOpen(false)}>
                                    <i className="fas fa-clock-rotate-left me-2"></i> Orders
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/aboutus" className="nav-link hover-grow" onClick={() => setIsOpen(false)}>
                                    <i className="fas fa-hand-holding-heart me-2"></i> About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactus" className="nav-link hover-grow" onClick={() => setIsOpen(false)}>
                                    <i className="fas fa-comments me-2"></i> Contact
                                </Link>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center gap-3">
                            {isAuthenticated ? (
                                <>
                                    <div className="text-white">
                                        <i className="fas fa-user-circle me-2"></i>
                                        {user}
                                    </div>
                                    <button
                                        className="btn btn-outline-light hover-grow"
                                        onClick={() => {
                                            dispatch(logout());
                                            setIsOpen(false);
                                        }}
                                    >
                                        <i className="fas fa-sign-out-alt me-2"></i> Logout
                                    </button>
                                </>
                            ) : (
                                <Link 
                                    to="/login" 
                                    className="btn btn-success hover-grow" 
                                    onClick={() => setIsOpen(false)}
                                >
                                    <i className="fas fa-sign-in-alt me-2"></i> Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mt-5 pt-5 route-transition">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/veg" element={<Veg />} />
                    <Route path="/nonveg" element={<NonVeg />} />
                    <Route path="/milk" element={<Milk />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/aboutus" element={<AboutUS />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="social-icons">
                        <a href="#!" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                        <a href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#!" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    </div>
                    
                    <div className="footer-links">
                        <Link to="/aboutus" className="mx-3">About Us</Link>
                        <Link to="/contactus" className="mx-3">Contact Us</Link>
                        <Link to="/privacy" className="mx-3">Privacy Policy</Link>
                        <Link to="/terms" className="mx-3">Terms of Service</Link>
                    </div>

                    <p className="mt-3">
                        © {new Date().getFullYear()} FreshMart. All rights reserved.
                    </p>
                    
                    <p className="text-muted small mt-2">
                        Made with <i className="fas fa-heart text-danger"></i> for fresh food
                    </p>
                </div>
            </footer>
        </BrowserRouter>
    );
}

export default App;