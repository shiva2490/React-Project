import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrement, increment, remove, purchageDetailsReducer } from "./Store";
import { useState } from "react";

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [discount, setDiscount] = useState(0);
    const [coupon, setCoupon] = useState('');
    const [couponDiscount, setCouponDiscount] = useState(0);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountAmount = (subtotal * discount) / 100;
    const couponAmount = (subtotal * couponDiscount) / 100;
    const total = subtotal - discountAmount - couponAmount;

    const applyCoupon = () => {
        const coupons = {
            'FH10': 10,
            'FH20': 20,
            'FH30': 30,
            'FH40': 40
        };
        const discount = coupons[coupon.toUpperCase()] || 0;
        setCouponDiscount(discount);
        if (!discount) alert('Invalid coupon code');
    };

    const checkout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        dispatch(purchageDetailsReducer({
            items: [...cart],
            total,
            date: new Date().toLocaleString()
        }));
        dispatch(clearCart());
    };

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5 display-4">
                <i className="fas fa-shopping-basket me-3 text-primary"></i>
                Your Shopping Cart
            </h1>

            {cart.length === 0 ? (
                <div className="text-center py-5">
                    <i className="fas fa-shopping-basket fa-4x text-muted mb-4"></i>
                    <h3 className="text-muted">Your cart is empty</h3>
                    <p className="text-muted">Start adding items to see them here</p>
                </div>
            ) : (
                <div className="row g-4">
                    {/* Cart Items */}
                    <div className="col-lg-8">
                        <div className="card shadow-sm border-0">
                            <div className="card-body p-4">
                                {cart.map((item, index) => (
                                    <div key={item.id || index} className="d-flex align-items-center mb-4 pb-4 border-bottom">
                                        <img 
                                            src={item.image} 
                                            alt={item.name}
                                            className="rounded-3 me-4"
                                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                        />
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1">{item.name}</h5>
                                            <div className="d-flex align-items-center">
                                                <span className="text-muted me-3">₹{(item.quantity*item.price).toFixed(2)}</span>
                                                <div className="btn-group">
                                                <button 
                                                        className="btn btn-outline-secondary btn-sm"
                                                        onClick={() => dispatch(decrement(item))}
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <i className="fas fa-minus"></i>
                                                    </button>
                                                    <span className="px-3">{item.quantity}</span>
                                                    <button 
                                                        className="btn btn-outline-secondary btn-sm"
                                                        onClick={() => dispatch(increment(item))}
                                                    >
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <button 
                                            className="btn btn-link text-danger"
                                            onClick={() => dispatch(remove(item))}
                                        >

                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="col-lg-4">
                        <div className="card shadow-sm border-0">
                            <div className="card-body p-4">
                                <h4 className="mb-4">Order Summary</h4>
                                
                                <div className="list-group mb-4">
                                    <div className="list-group-item d-flex justify-content-between">
                                        <span>Subtotal:</span>
                                        <span>₹{subtotal.toFixed(2)}</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className="list-group-item d-flex justify-content-between">
                                            <span>Discount ({discount}%):</span>
                                            <span className="text-danger">-₹{discountAmount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    {couponDiscount > 0 && (
                                        <div className="list-group-item d-flex justify-content-between">
                                            <span>Coupon Discount:</span>
                                            <span className="text-danger">-₹{couponAmount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="list-group-item d-flex justify-content-between fw-bold">
                                        <span>Total:</span>
                                        <span>₹{total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Apply Discount:</label>
                                    <div className="d-flex gap-2 mb-3">
                                        {[10, 20, 30].map(percent => (
                                            <button
                                                key={percent}
                                                className={`btn btn-sm flex-grow-1 ${discount === percent ? 
                                                    'btn-primary' : 'btn-outline-primary'}`}
                                                onClick={() => setDiscount(prev => prev === percent ? 0 : percent)}
                                            >
                                                {percent}% Off
                                            </button>
                                        ))}
                                    </div>

                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Coupon code"
                                            value={coupon}
                                            onChange={(e) => setCoupon(e.target.value)}
                                        />
                                        <button 
                                            className="btn btn-outline-success"
                                            onClick={applyCoupon}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>

                                <button 
                                    className="btn btn-primary w-100 py-3 checkout-btn"
                                    onClick={checkout}
                                >
                                    <i className="fas fa-lock me-2"></i>
                                    Secure Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;