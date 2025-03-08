import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";
import ReactPaginate from "react-paginate";

function NonVeg() {
    const dispatch = useDispatch();
    const nonVegItems = useSelector(state => state.products.nonVeg);
    const [filterLessThan150, setFilterLessThan150] = useState(false);
    const [filterGreaterThan150, setFilterGreaterThan150] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    const filteredItems = nonVegItems.filter(item => {
        if (filterLessThan150 && item.price >= 150) return false;
        if (filterGreaterThan150 && item.price <= 150) return false;
        return true;
    });

    const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentItems = filteredItems.slice(offset, offset + itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="container mt-5 pt-4">
            <h2 className="text-danger text-center mb-4 animate__fadeIn">
                <i className="fas fa-drumstick-bite me-2"></i> Non-Veg Items
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
                                    <span className="h5 text-danger blink-price">
                                        ₹{item.price}
                                    </span>
                                </div>
                                <button 
                                    className="btn btn-outline-danger mt-auto hover-grow"
                                    onClick={() => dispatch(addToCart(item))}
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
                    <h4><i className="fas fa-times-circle me-2"></i>No non-veg items found</h4>
                </div>
            )}
        </div>
    );
}

export default NonVeg;