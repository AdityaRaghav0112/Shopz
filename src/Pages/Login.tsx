import React from "react";
import SignupFormDemo from "../components/signup-form-demo";
import type { AuthFormData } from "../components/signup-form-demo";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (data: AuthFormData) => {
    const res = await api.post("/auth/login", {
      email: data.email,
      password: data.password,
    });

    const { token, user } = res.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    alert("Login successful!");
    navigate("/");
    window.location.reload(); //refresh UI
  };

  return <SignupFormDemo type="login" onSubmit={handleLogin} />;
};

export default Login;
