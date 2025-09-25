// RedirectHandler.jsx
import { Navigate } from "react-router-dom";

function RedirectHandler() {
  const authToken = localStorage.getItem("auth_token");
  const companyToken = localStorage.getItem("company_token");

  if (companyToken) {
    return <Navigate to="/company" replace />;
  }
  if (authToken) {
    return <Navigate to="/app/home" replace />;
  }

  return <Navigate to="/main" replace />; // fallback to MainHome
}

export default RedirectHandler;
