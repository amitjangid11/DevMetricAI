// pages/OAuthCallback.jsx
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OAuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const loginToken = params.get("login_token"); // ✅ case 1: direct login
    const signupToken = params.get("token"); // ✅ case 2: need to complete profile

    if (loginToken) {
      // ✅ User already exists, log them in
      localStorage.setItem("auth_token", loginToken);
      navigate("/"); // or home
    } else if (signupToken) {
      // ✅ User needs to complete profile
      localStorage.setItem("initial-token", signupToken);
      navigate("/complete-profile");
    } else {
      // ❌ No token received
      console.error("No token received from backend");
      navigate("/login");
    }
  }, [location, navigate]);

  return <div>Redirecting...</div>;
};

export default OAuthCallback;
