import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Orders() {
    const orders = useSelector(state => state.orders);

    return (
        <div className="orders-container">
            <div className="container py-5">
                <header className="orders-header text-center mb-5">
                    <h1 className="display-4 fw-bold text-dark mb-3">
                        <i className="fas fa-clipboard-list me-3 text-primary"></i>
                        Order History
                    </h1>
                    <p className="lead text-muted">Review your previous purchases and order details</p>
                </header>

                {orders.length === 0 ? (
                    <div className="empty-orders text-center py-5">
                        <div className="empty-icon mb-4">
                            <i className="fas fa-shopping-basket fa-4x text-muted"></i>
                        </div>
                        <h3 className="h4 text-muted mb-3">No Orders Found</h3>
                        <p className="text-muted">Your completed orders will appear here</p>
                    </div>
                ) : (
                    <div className="order-timeline">
                        {orders.map((order, index) => (
                            <div key={index} className="order-card mb-4">
                                <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                                    <div className="card-header bg-gradient-primary text-white py-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                        <h3 className="h5 mb-0">
                                        <i className="fas fa-receipt me-2"></i>
                                        <span className="order-badge">
                                            Order #{orders.length - index}
                                        </span>
                                        </h3>
                                            <span className="badge bg-primary text-white fs-6">
                                            {new Date(order.date).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="card-body p-4">
                                        <div className="order-meta mb-4">
                                            <div className="row">
                                                <div className="col-md-6 mb-3 mb-md-0">
                                                    <div className="d-flex align-items-center">
                                                        <i className="fas fa-calendar-alt fa-fw text-muted me-2"></i>
                                                        <span className="text-dark">
                                                            {new Date(order.date).toLocaleString()}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-center">
                                                        <i className="fas fa-wallet fa-fw text-muted me-2"></i>
                                                        <span className="text-dark">
                                                            Total: ₹{order.total.toFixed(2)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <h5 className="h6 text-uppercase text-muted mb-3">
                                            <i className="fas fa-box-open me-2"></i>
                                            Purchased Items ({order.items.length})
                                        </h5>

                                        <div className="order-items">
                                            {order.items.map((item, idx) => (
                                                <div key={idx} className="order-item d-flex align-items-center py-3 border-bottom">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="item-image rounded-3"
                                                            style={{ width: '75px', height: '75px', objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 fw-semibold">{item.name}</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="text-muted small">
                                                                <span className="me-3">
                                                                    Qty: {item.quantity}
                                                                </span>
                                                                <span>
                                                                    ₹{item.price.toFixed(2)} each
                                                                </span>
                                                            </div>
                                                            <div className="fw-bold text-dark">
                                                                ₹{(item.price * item.quantity).toFixed(2)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="card-footer bg-light py-3">
                                        <div className="row">
                                            <div className="col">
                                                <button className="btn btn-outline-primary btn-sm">
                                                    <i className="fas fa-redo-alt me-2"></i>
                                                    Reorder
                                                </button>
                                            </div>
                                            <div className="col-auto">
                                                <button className="btn btn-link text-muted">
                                                    <i className="fas fa-print me-2"></i>
                                                    Print Receipt
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Orders;