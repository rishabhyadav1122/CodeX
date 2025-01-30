import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const VerifyEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (token) {
      verifyEmailToken(token);
    }
  }, [token]);

  const verifyEmailToken = async (token) => {
    try {
      const response = await fetch(
        `https://code-x-sigma.vercel.app/api/auth/verifyEmail?token=${token}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Verification failed");
      }

      const data = await response.json();
      if (data.message === "Email verified successfully") {
        toast.success("Email successfully verified! Redirecting to home page...");
        setTimeout(() => navigate("/login"), 3000);
      }
    } catch (error) {
      toast.error(error.message);
      navigate("/register");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Please Verify your Email </h1>
      <p>Check your email for verification and then Login.</p>
    </div>
  );
};

