
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-polynesia-off-white px-6 py-12">
      <div className="neu-flat p-12 max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-polynesia-coral mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-polynesia-deep-blue mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="neu-button inline-flex items-center justify-center bg-polynesia-blue text-white hover:bg-polynesia-deep-blue transition-colors"
        >
          <Home size={18} className="mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
