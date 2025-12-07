import React from "react";
import SignupFormDemo from "../components/signup-form-demo";
import type { AuthFormData } from "../components/signup-form-demo";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (data: AuthFormData) => {
    const name = `${data.firstname} ${data.lastname}`.trim();

    const res = await api.post("/auth/register", {
      name,
      email: data.email,
      password: data.password,
    });

    console.log(res.data);
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return <SignupFormDemo type="signup" onSubmit={handleSignup} />;
};

export default Signup;
