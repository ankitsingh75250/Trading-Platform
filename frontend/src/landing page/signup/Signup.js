import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Signup() {
  const [state, setState] = useState("signup");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      state === "signup"
        ? `${API_URL}/auth/signup`
        : `${API_URL}/auth/login`;

    const payload =
      state === "signup"
        ? formData
        : {
            email: formData.email,
            password: formData.password,
          };

    try {
      const { data } = await axios.post(url, payload);

      localStorage.setItem("token", data.jwtToken);
      localStorage.setItem("userName", data.name);
      localStorage.setItem("userEmail", data.email);

      alert(data.message);

      window.location.href = `${API_URL}`;
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container w-50 mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <h1 className="mb-4 text-center">
            {state === "signup" ? "Signup" : "Login"}
          </h1>

          <form onSubmit={handleSubmit}>
            {state === "signup" && (
              <div className="mb-3">
                <label className="form-label fs-5">Name</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom rounded-0 shadow-none"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label fs-5">Email</label>
              <input
                type="email"
                className="form-control border-0 border-bottom rounded-0 shadow-none"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fs-5">Password</label>
              <input
                type="password"
                className="form-control border-0 border-bottom rounded-0 shadow-none"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="p-2 btn btn-primary fs-5 mb-4 mt-2"
                style={{ width: "50%" }}
              >
                {state === "signup" ? "Signup" : "Login"}
              </button>
            </div>
          </form>

          <div className="text-center">
            {state === "signup" ? (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => setState("login")}
                  style={{ color: "#387ed1", cursor: "pointer" }}
                >
                  Login
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => setState("signup")}
                  style={{ color: "#387ed1", cursor: "pointer" }}
                >
                  Signup
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;