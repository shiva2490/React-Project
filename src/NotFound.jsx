import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NotFound() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        const redirectTimer = setTimeout(() => {
            navigate("/home");
        }, 3000);

        return () => {
            clearTimeout(redirectTimer);
            clearInterval(timer);
        };
    }, [navigate]);

    return (
        <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="text-center">
                <div className="mb-4">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/755/755014.png" 
                        alt="404 Error"
                        className="img-fluid mb-4"
                        style={{ 
                            width: '200px',
                            filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))',
                            animation: 'bounce 1.5s infinite'
                        }} 
                    />
                    <h1 className="display-4 fw-bold text-danger mb-3">
                        404 - Page Not Found
                    </h1>
                    <p className="lead text-muted mb-3">
                        Oops! The page you're looking for has vanished into the digital void.
                    </p>
                    <div className="progress mb-4" style={{ height: '4px' }}>
                        <div 
                            className="progress-bar bg-danger" 
                            role="progressbar" 
                            style={{ width: '100%', transition: 'width 3s linear' }}
                            aria-valuenow={100} 
                            aria-valuemin={0} 
                            aria-valuemax={100}
                        />
                    </div>
                    <p className="text-secondary">
                        Redirecting to homepage in 
                        <span className="fw-bold text-danger mx-1">{countdown}</span> 
                        seconds...
                    </p>
                </div>
            </div>
            
            <style>
                {`
                    @keyframes bounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-20px); }
                    }
                `}
            </style>
        </div>
    );
}

export default NotFound;