import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { getLogin } from "./../../features/auth/services/getLogin.service.ts";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const login = await getLogin();
        
        if (login) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
