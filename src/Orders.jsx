import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Orders() {
    const ordersObject = useSelector(state => state.orders);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-primary">
                <i className="fas fa-shopping-bag me-2"></i> Order History
            </h1>

            {ordersObject.length === 0 ? (
                <div className="alert alert-info text-center">
                    <i className="fas fa-info-circle me-2"></i> No Orders Yet
                </div>
            ) : (
                <div className="row justify-content-center"> 
                    {ordersObject.map((purchase, index) => (
                        <div key={index} className="col-md-6 mb-4"> 
                            <div className="card shadow-lg border-light rounded">
                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">Order #{index + 1}</h5>
                                </div>
                                <div className="card-body">
                                    <p className="mb-1">
                                        <i className="fas fa-calendar-alt me-2"></i>
                                        <strong>Date:</strong> {purchase.purchageDate}
                                    </p>
                                    <p className="mb-1">
                                        <i className="fas fa-dollar-sign me-2"></i>
                                        <strong>Total:</strong> ₹{purchase.totalAmount.toFixed(2)}
                                    </p>
                                    <hr />
                                    <h6 className="text-muted"><i className="fas fa-box-open me-2"></i>Items:</h6>
                                    <ul className="list-group">
                                        {purchase.items.map((item, idx) => (
                                            <li key={idx} className="list-group-item d-flex align-items-center">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="me-3 rounded"
                                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                                />
                                                <div>
                                                    <strong>{item.name}</strong>
                                                    <p className="mb-0 text-muted">{item.quantity} x ₹{item.price}</p>
                                                </div>
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
