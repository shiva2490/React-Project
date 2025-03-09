import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

function Home() {
    const dispatch = useDispatch();
    const vegItems = useSelector(state => state.products.veg);
    const nonVegItems = useSelector(state => state.products.nonVeg);
    const milkItems = useSelector(state => state.products.milk);
    const timeLeft = useSelector(state => state.timer.timeLeft);
    
    const allItems = [
        ...vegItems.map(item => ({ ...item, category: 'veg' })),
        ...nonVegItems.map(item => ({ ...item, category: 'nonVeg' })),
        ...milkItems.map(item => ({ ...item, category: 'milk' }))
    ];
    
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    const calculatePrice = (price) => timeLeft > 0 ? price * 0.9 : price;

    const filteredItems = allItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="container-fluid py-4 home-container">
            {timeLeft > 0 && (
                <div className="alert alert-warning text-center fw-bold mb-4 fade-in">
                    <i className="fas fa-clock me-2"></i>
                    FLASH OFFER! Order within {formatTime(timeLeft)} for 10% OFF!
                </div>
            )}

            <div className="hero-section text-center mb-5">
                <h1 className="display-4 fw-bold text-light mb-3">
                    <i className="fas fa-utensils me-3 text-warning"></i>
                    Welcome to Flavor Haven
                </h1>
                <p className="lead text-light opacity-75">Discover our exquisite menu items</p>
            </div>

            <div className="row mb-4 g-3">
                <div className="col-md-8">
                    <div className="input-group search-bar">
                        <span className="input-group-text bg-light border-end-0">
                            <i className="fas fa-search text-muted"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Search dishes..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-select category-filter"
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        <option value="veg">Vegetarian</option>
                        <option value="nonVeg">Non-Vegetarian</option>
                        <option value="milk">Dairy & Sweets</option>
                    </select>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {currentItems.map((item, index) => (
                    <div key={index} className="col">
                        <div className="card h-100 shadow-sm menu-card">
                            <div className="card-img-container position-relative">
                                <img 
                                    src={item.image} 
                                    className="card-img-top" 
                                    alt={item.name}
                                />
                                <span className={`category-badge badge ${getCategoryBadgeClass(item.category)}`}>
                                    {getCategoryIcon(item.category)} {item.category === 'nonVeg' ? 'Non-Veg' : item.category}
                                </span>
                            </div>
                            
                            <div className="card-body d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="card-title mb-0">{item.name}</h5>
                                    <div className="d-flex flex-column">
                                        {timeLeft > 0 && (
                                            <del className="text-muted small">
                                                ₹{item.price.toFixed(2)}
                                            </del>
                                        )}
                                        <span className="price-tag badge bg-success mt-1">
                                            ₹{calculatePrice(item.price).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="mt-auto">
                                    <button
                                        className="btn btn-primary w-100 add-to-cart-btn"
                                        onClick={() => dispatch(addToCart({
                                            ...item,
                                            price: calculatePrice(item.price)
                                        }))}
                                    >
                                        <i className="fas fa-cart-plus me-2"></i>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <nav className="d-flex justify-content-center mt-4">
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button 
                                className="page-link" 
                                onClick={() => paginate(currentPage - 1)}
                            >
                                Previous
                            </button>
                        </li>
                        
                        {[...Array(totalPages).keys()].map(number => (
                            <li key={number} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                                <button 
                                    className="page-link" 
                                    onClick={() => paginate(number + 1)}
                                >
                                    {number + 1}
                                </button>
                            </li>
                        ))}
                        
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button 
                                className="page-link" 
                                onClick={() => paginate(currentPage + 1)}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            )}

            {filteredItems.length === 0 && (
                <div className="text-center py-5 empty-state">
                    <i className="fas fa-search fa-3x text-muted mb-3"></i>
                    <h4 className="text-muted">No items found</h4>
                    <p className="text-muted">Try adjusting your search or filters</p>
                </div>
            )}
        </div>
    );
}

const getCategoryBadgeClass = (category) => {
    switch(category) {
        case 'veg': return 'bg-success';
        case 'nonVeg': return 'bg-danger';
        case 'milk': return 'bg-warning text-dark';
        default: return '';
    }
};

const getCategoryIcon = (category) => {
    switch(category) {
        case 'veg': return <i className="fas fa-leaf"></i>;
        case 'nonVeg': return <i className="fas fa-drumstick-bite"></i>;
        case 'milk': return <i className="fas fa-ice-cream"></i>;
        default: return null;
    }
};

export default Home;