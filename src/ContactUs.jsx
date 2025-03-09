import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero text-center text-white py-5">
        <div className="container">
          <h1 className="hero-title display-4 fw-bold mb-4">
            <i className="bi bi-chat-dots-fill me-3"></i>Contact FreshMart
          </h1>
          <p className="hero-subtitle lead">We're Here to Help You</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container main-content py-5">
        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-4">
            <div className="contact-info-card p-4 rounded-3 shadow">
              <h3 className="section-title mb-4">
                <i className="bi bi-geo-alt-fill me-2"></i>Visit Us
              </h3>
              <address className="contact-details">
                <p className="mb-3">
                  <strong>Headquarters</strong><br />
                  123 Fresh Street<br />
                  Grocery District<br />
                  Nutrition City, NC 56789
                </p>
                
                <p className="mb-1">
                  <i className="bi bi-telephone me-2"></i>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </p>
                <p>
                  <i className="bi bi-envelope me-2"></i>
                  <a href="mailto:info@freshmart.com">tshivashankar249@gmail.com</a>
                </p>
              </address>

              <div className="business-hours mt-4">
                <h4 className="mb-3">
                  <i className="bi bi-clock-history me-2"></i>Opening Hours
                </h4>
                <ul className="list-unstyled">
                  <li>Mon-Fri: 8 AM - 8 PM</li>
                  <li>Saturday: 9 AM - 7 PM</li>
                  <li>Sunday: 10 AM - 6 PM</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="contact-form-card p-4 rounded-3 shadow">
              <h3 className="section-title mb-4">
                <i className="bi bi-send-fill me-2"></i>Send Message
              </h3>
              
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      required 
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="subject" 
                      required 
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      rows="5" 
                      required 
                    ></textarea>
                  </div>
                  <div className="col-12 text-end">
                    <button type="submit" className="btn cta-button px-4 py-2">
                      <i className="bi bi-send me-2"></i>Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="row g-4 mt-4 text-center">
          <div className="col-md-4">
            <div className="method-card p-4 h-100">
              <i className="bi bi-envelope method-icon"></i>
              <h4 className="my-3">Email Support</h4>
              <p>24/7 email support with 12-hour response time</p>
              <a href="mailto:support@freshmart.com" className="method-link">
                tshivashankar249@gmail.com
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="method-card p-4 h-100">
              <i className="bi bi-telephone method-icon"></i>
              <h4 className="my-3">Phone Support</h4>
              <p>24/5 phone support for urgent queries</p>
              <a href="tel:+1800FRESHMART" className="method-link">
                1-800-FRESHMART
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="method-card p-4 h-100">
              <i className="bi bi-chat-dots method-icon"></i>
              <h4 className="my-3">Live Chat</h4>
              <p>Instant chat support during business hours</p>
              <button className="method-link">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;