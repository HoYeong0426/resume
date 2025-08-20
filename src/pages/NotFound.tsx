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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <p className="text-gray-500 mb-6">
          The route <code className="bg-gray-200 px-2 py-1 rounded">{location.pathname}</code> does not exist.
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold text-blue-800 mb-2">How to access this portfolio:</h3>
          <div className="space-y-2 text-sm text-blue-700">
            <p><strong>Local Development:</strong> <code className="bg-blue-100 px-1 rounded">http://localhost:8080/</code></p>
            <p><strong>GitHub Pages:</strong> <code className="bg-blue-100 px-1 rounded">https://hoyeong0426.github.io/resume/</code></p>
          </div>
        </div>
        
        <p className="text-gray-500 mb-6">
          You're currently trying to access: <code className="bg-gray-200 px-2 py-1 rounded">{location.pathname}</code>
        </p>
        
        <p className="text-gray-500 mb-6">
          {import.meta.env.PROD ? 
            "This is the GitHub Pages version. Please use the root path to access the portfolio." :
            "This is the local development version. Please use the root path to access the portfolio."
          }
        </p>
        
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
