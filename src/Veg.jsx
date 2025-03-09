import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";
import ReactPaginate from "react-paginate";

function Veg() {
    const dispatch = useDispatch();
    const vegItems = useSelector(state => state.products.veg);
    const timeLeft = useSelector(state => state.timer.timeLeft);
    const [filterLessThan150, setFilterLessThan150] = useState(false);
    const [filterGreaterThan150, setFilterGreaterThan150] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    const calculatePrice = (price) => timeLeft > 0 ? price * 0.9 : price;

    const filteredItems = vegItems.filter(item => {
        if (filterLessThan150 && item.price >= 150) return false;
        if (filterGreaterThan150 && item.price <= 150) return false;
        return true;
    });

    const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentItems = filteredItems.slice(offset, offset + itemsPerPage);

    const handlePageClick = ({ selected }) => setCurrentPage(selected);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="container mt-5 pt-4">
            {timeLeft > 0 && (
                <div className="alert alert-warning text-center fw-bold mb-4 fade-in">
                    <i className="fas fa-clock me-2"></i>
                    FLASH OFFER! Order within {formatTime(timeLeft)} for 10% OFF!
                </div>
            )}

            <h2 className="text-success text-center mb-4">
                <i className="fas fa-carrot me-2"></i> Veg Items
            </h2>

            <div className="filter-controls mb-4 card-hover">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                    <div className="form-check form-switch">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="lessThan150"
                            checked={filterLessThan150}
                            onChange={() => setFilterLessThan150(!filterLessThan150)}
                        />
                        <label className="form-check-label" htmlFor="lessThan150">
                            <i className="fas fa-rupee-sign me-1"></i> Below 150
                        </label>
                    </div>
                    <div className="form-check form-switch">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="greaterThan150"
                            checked={filterGreaterThan150}
                            onChange={() => setFilterGreaterThan150(!filterGreaterThan150)}
                        />
                        <label className="form-check-label" htmlFor="greaterThan150">
                            <i className="fas fa-rupee-sign me-1"></i> Above 150
                        </label>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-4 g-4">
                {currentItems.map((item, index) => (
                    <div key={index} className="col">
                        <div className="card h-100 shadow-sm card-hover">
                            <img 
                                src={item.image} 
                                className="card-img-top img-scale" 
                                alt={item.name} 
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-truncate">{item.name}</h5>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex flex-column">
                                        {timeLeft > 0 && (
                                            <del className="text-muted small">
                                                ₹{item.price.toFixed(2)}
                                            </del>
                                        )}
                                        <span className="h5 text-success blink-price">
                                            ₹{calculatePrice(item.price).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <button 
                                    className="btn btn-outline-success mt-auto hover-grow"
                                    onClick={() => dispatch(addToCart({
                                        ...item,
                                        price: calculatePrice(item.price)
                                    }))}
                                >
                                    <i className="fas fa-cart-plus me-2"></i>Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredItems.length > itemsPerPage && (
                <div className="d-flex justify-content-center mt-4">
                    <ReactPaginate
                        previousLabel={<i className="fas fa-chevron-left"></i>}
                        nextLabel={<i className="fas fa-chevron-right"></i>}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        containerClassName="pagination"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        activeClassName="active"
                        previousClassName="page-item"
                        nextClassName="page-item"
                    />
                </div>
            )}

            {filteredItems.length === 0 && (
                <div className="text-center mt-5 text-muted">
                    <h4><i className="fas fa-times-circle me-2"></i>No veg items found</h4>
                </div>
            )}
        </div>
    );
}

export default Veg;