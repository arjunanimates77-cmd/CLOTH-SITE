import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="text-center">
        <h1 className="font-oswald font-bold text-6xl mb-4 text-glow">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! This page doesn't exist in our streetwear universe
        </p>
        <a 
          href="/" 
          className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
        >
          RETURN HOME
        </a>
      </div>
    </div>
  );
};

export default NotFound;
