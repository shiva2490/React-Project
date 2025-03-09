import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Make sure to create this file

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="hero-section text-center text-white py-5">
        <div className="container">
          <h1 className="hero-title display-4 fw-bold mb-4">
            <i className="bi bi-info-circle me-3"></i>About FreshMart
          </h1>
          <p className="hero-subtitle lead">Quality You Can Taste, Service You Can Trust</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container main-content py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="about-image-frame p-4">
              <img 
                src="http://canadianbeauty.com/wp-content/uploads/2016/01/IMG_0081.jpg" 
                alt="Fresh Groceries" 
                className="img-fluid rounded-3 shadow-lg" 
              />
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="about-text ps-lg-5">
              <h2 className="section-title mb-4">
                <i className="bi bi-shop-window me-2"></i>Our Story
              </h2>
              <p className="lead mb-4">
                Since 2010, FreshMart has been revolutionizing the way people shop for groceries.
                What started as a small family business has grown into a trusted name in online
                grocery delivery across the nation.
              </p>
              
              <h3 className="mission-title mt-5 mb-3">
                <i className="bi bi-bullseye me-2"></i>Our Mission
              </h3>
              <p className="mission-text">
                To provide fresh, high-quality groceries with unparalleled convenience while
                supporting local producers and sustainable practices.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="features-section mt-5">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="feature-card h-100 p-4">
                <i className="bi bi-lightning-charge feature-icon"></i>
                <h4 className="my-3">Lightning-Fast Delivery</h4>
                <p>90% of orders delivered within 2 hours</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card h-100 p-4">
                <i className="bi bi-currency-dollar feature-icon"></i>
                <h4 className="my-3">Price Match Guarantee</h4>
                <p>Best prices or we'll match the difference</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card h-100 p-4">
                <i className="bi bi-star feature-icon"></i>
                <h4 className="my-3">Premium Quality</h4>
                <p>Rigorous quality checks on every product</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="cta-section text-center mt-5">
          <button 
            onClick={() => navigate("/contact")} 
            className="btn cta-button btn-lg px-5 py-3"
          >
            <i className="bi bi-chat-dots me-2"></i>Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;