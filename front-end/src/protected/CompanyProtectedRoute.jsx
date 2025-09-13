import { Navigate, Outlet } from "react-router-dom";

function CompanyProtectedRoute() {
  const companyToken = localStorage.getItem("company_token");
  return companyToken ? <Outlet /> : <Navigate to="/company/register" replace={true} />;
}

export default CompanyProtectedRoute;
