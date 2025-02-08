import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

function Orders() {
    const ordersObject = useSelector(state => state.orders);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-primary">
                <i className="fas fa-shopping-bag me-2"></i> Order History {/* Font Awesome Icon */}
            </h1>

            {ordersObject.length === 0 ? (
                <div className="alert alert-info text-center">
                    <i className="fas fa-info-circle me-2"></i> No Orders Yet {/* Font Awesome Icon */}
                </div>
            ) : (
                <div className="row justify-content-center">
                    {ordersObject.map((purchase, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <div className="card shadow-lg border-light rounded">
                                <div className="card-body">
                                    <h5 className="card-title text-center mb-3 text-success">
                                        Order #{index + 1}
                                    </h5>
                                    <p className="d-flex align-items-center mb-2">
                                        <i className="fas fa-calendar-alt me-2"></i> {/* Font Awesome Icon */}
                                        <strong>Date:</strong> {purchase.purchageDate}
                                    </p>
                                    <p className="d-flex align-items-center mb-2">
                                        <i className="fas fa-dollar-sign me-2"></i> {/* Font Awesome Icon */}
                                        <strong>Total Amount:</strong> ₹{purchase.totalAmount.toFixed(2)}
                                    </p>
                                    <p className="d-flex align-items-center mb-2">
                                        <i className="fas fa-box-open me-2"></i> {/* Font Awesome Icon */}
                                        <strong>Items:</strong>
                                    </p>
                                    <ul className="list-group">
                                        {purchase.items.map((item, idx) => (
                                            <li key={idx} className="list-group-item">
                                                <i className="fas fa-caret-right me-2"></i> {/* Font Awesome Icon */}
                                                {item.name} - {item.quantity} x ₹{item.price}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Orders;