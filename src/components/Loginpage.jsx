import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import userServices from "../../services/userservices.js";

const Loginpage = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Initial values for form fields
  const initialValues = {
    email: "",
    password: "",
    remember_me: false,
  };

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address") // Email validation
      .required("Email is required") // Required validation
      .matches(/^\S+@\S+\.\S+$/, "Email must be valid"), // Exact validation
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .required("Password is required"),
  });

  // Formik hook for handling form state and submission
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Make the login API call
        const response = await userServices.signin(
          values.email,
          values.password
        );
        console.log("API response:", response);
        // Check if the response exists and if it contains a success property
        if (
          response &&
          response.data &&
          response.data.message === "login successful"
        ) {
          // If login is successful, set isLoggedIn to true and redirect the user
          console.log(response);
          navigate("/");
          setIsLoggedIn(true);
          toast.success("Login successful");

          resetForm();
        } else  {
          console.log(response);
          // If the response contains a specific error message from the server
          toast.error(response.data.message);
        } 
      } catch (error) {
        
        // If there's an error with the API call, handle it here
        console.error("Error:", error);
        toast.error(
          "An error occurred while logging in. Please try again later."
        );
      }
    },
  });

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {/* Login Section */}
      <section className="bg-light p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xxl-11">
              <div className="card border-light-subtle shadow-sm">
                <div className="row g-0">
                  {/* Left Column: Image */}
                  <div className="col-12 col-md-6">
                    <img
                      className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                      loading="lazy"
                      src="/img/login.jpg"
                      alt="Welcome back you've been missed!"
                    />
                  </div>
                  {/* Right Column: Login Form */}
                  <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <div className="col-12 col-lg-11 col-xl-10">
                      <div className="card-body p-3 p-md-4 p-xl-5">
                        <div className="row">
                          <div className="col-12">
                            {/* Logo */}
                            <div className="text-center mb-4">
                              <Link to="/">
                                <img
                                  src="/Logo.ico"
                                  alt="BootstrapBrain Logo"
                                  width="175"
                                  height="70"
                                />
                              </Link>
                            </div>
                            <h4 className="text-center">Sign In</h4>
                          </div>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={formik.handleSubmit}>
                          <div className="row gy-3 overflow-hidden">
                            {/* Email Input */}
                            <div className="col-12">
                              <div className="form-floating mb-3">
                                <input
                                  type="email"
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  name="email"
                                  placeholder="name@example.com"
                                  value={formik.values.email}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  required
                                />
                                <label className="form-label">Email</label>
                                {formik.touched.email &&
                                  formik.errors.email && (
                                    <div className="invalid-feedback">
                                      {formik.errors.email}
                                    </div>
                                  )}
                              </div>
                            </div>
                            {/* Password Input */}
                            <div className="col-12">
                              <div className="form-floating mb-3 position-relative">
                                <input
                                  type={showPassword ? "text" : "password"}
                                  className={`form-control pr-5 ${
                                    formik.touched.password &&
                                    formik.errors.password
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  name="password"
                                  placeholder="Password"
                                  value={formik.values.password}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  required
                                />
                                <label className="form-label">Password</label>
                                <span
                                  className="password-toggle-icon position-absolute top-50 translate-middle-y"
                                  style={{ right: "25px", cursor: "pointer" }}
                                  onClick={togglePasswordVisibility}
                                >
                                  <i
                                    className={`fas ${
                                      showPassword ? "fa-eye-slash" : "fa-eye"
                                    }`}
                                  ></i>
                                </span>
                                {formik.touched.password &&
                                  formik.errors.password && (
                                    <div className="invalid-feedback">
                                      {formik.errors.password}
                                    </div>
                                  )}
                              </div>
                            </div>
                            {/* Remember Me Checkbox */}
                            <div className="col-12">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="remember_me"
                                  id="remember_me"
                                  checked={formik.values.remember_me}
                                  onChange={formik.handleChange}
                                />
                                <label
                                  className="form-check-label text-secondary"
                                  htmlFor="remember_me"
                                >
                                  Keep me logged in
                                </label>
                              </div>
                            </div>
                            {/* Submit Button */}
                            <div className="col-12">
                              <div className="d-grid">
                                <button
                                  className="btn btn-dark btn-lg"
                                  type="submit"
                                >
                                  Login now
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                        {/* Additional Links */}
                        <div className="row">
                          <div className="col-12">
                            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                              {/* Sign Up Link */}
                              <p className="mb-0 mt-5 text-secondary text-center">
                                Don't have an account yet?{" "}
                                <Link
                                  to="/register"
                                  className="link-primary text-decoration-none"
                                >
                                  Sign up
                                </Link>
                              </p>
                            </div>
                            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                              {/* Forget Password Link */}
                              <Link to="/forgetpassword">Forget Password</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Loginpage;
