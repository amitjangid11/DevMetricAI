import { Navigate, Outlet, useLocation } from "react-router-dom";

function CompanyProtectedRoute() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get("token");

  // If token in URL → save to localStorage
  if (token) {
    localStorage.setItem("company_token", token);
    // Clean the URL
    const newParams = new URLSearchParams(location.search);
    newParams.delete("token");
    window.history.replaceState({}, "", `${location.pathname}?${newParams}`);
  }

  const companyToken = localStorage.getItem("company_token");

  return companyToken ? (
    <Outlet />
  ) : (
    <Navigate to="/company/register" replace={true} />
  );
}

export default CompanyProtectedRoute;
