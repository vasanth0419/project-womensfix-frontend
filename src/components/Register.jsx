import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import userServices from "../../services/userservices.js";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
      .matches(/^\S+@\S+\.\S+$/, "Email must be valid"), // Exact validation
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .required("Password is required"),
    iAgree: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
  });

  // Define registerUser function outside onSubmit handler
  const registerUser = async (userData) => {
    try {
      const { firstName, lastName, email, password } = userData;
      const username = `${firstName}_${lastName}`;
      const response = await userServices.signup(username, email, password);

      // if the request is successful, log the response
      console.log(response);
    } catch (error) {
      // Handle registration error (e.g., show error message to the user)
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      iAgree: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Call registerUser function with form values
        await registerUser(values);
        navigate("/login");
        // Redirect to the login page after successful registration
        toast.success("Registration Successful");
      } catch (error) {
        console.error(error);
        // Handle registration error (e.g., show error message to the user)
        toast.error("Registration failed. Please try again.");
      }
    },
  });

  const handleChange = (event) => {
    formik.handleChange(event);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <section className="bg-light p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xxl-11">
              <div className="card border-light-subtle shadow-sm">
                <div className="row g-0">
                  <div className="col-12 col-md-6">
                    <img
                      className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                      loading="lazy"
                      src="/img/signup.jpg"
                      alt="Welcome back you've been missed!"
                    />
                  </div>
                  <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <div className="col-12 col-lg-11 col-xl-10">
                      <div className="card-body p-3 p-md-4 p-xl-5">
                        <div className="text-center mb-4">
                          <a href="#!">
                            <img
                              src="/Logo.ico"
                              alt="Logo"
                              width="175"
                              height="70"
                            />
                          </a>
                        </div>
                        <h2 className="h4 text-center">Sign Up</h2>

                        <form onSubmit={formik.handleSubmit}>
                          <div className="row gy-3 overflow-hidden">
                            {/* First Name */}
                            <div className="col-12">
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  className={`form-control ${
                                    formik.touched.firstName &&
                                    formik.errors.firstName
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  name="firstName"
                                  placeholder="First Name"
                                  value={formik.values.firstName}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur} // Add onBlur event handler to trigger form validation
                                />
                                <label className="form-label">First Name</label>
                                {formik.touched.firstName &&
                                  formik.errors.firstName && ( // Use logical AND to conditionally render the error message
                                    <div className="invalid-feedback">
                                      {formik.errors.firstName}
                                    </div>
                                  )}
                              </div>
                            </div>

                            {/* Last Name */}
                            <div className="col-12">
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  className={`form-control ${
                                    formik.touched.lastName &&
                                    formik.errors.lastName
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  name="lastName"
                                  placeholder="Last Name"
                                  value={formik.values.lastName}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur} // Add onBlur event handler to trigger form validation
                                />
                                <label className="form-label">Last Name</label>
                                {formik.touched.lastName &&
                                  formik.errors.lastName && ( // Use logical AND to conditionally render the error message
                                    <div className="invalid-feedback">
                                      {formik.errors.lastName}
                                    </div>
                                  )}
                              </div>
                            </div>

                            {/* email id */}
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

                            {/* password */}
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
                                  className="password-toggle-icon position-absolute top-50  translate-middle-y"
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

                            {/* Checkbox */}
                            <div className="col-12">
                              <div className="form-check">
                                <input
                                  className={`form-check-input ${
                                    formik.touched.iAgree &&
                                    !formik.values.iAgree
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="checkbox"
                                  id="iAgree"
                                  name="iAgree"
                                  checked={formik.values.iAgree}
                                  onChange={formik.handleChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="iAgree"
                                >
                                  I agree to the terms and conditions
                                </label>
                                {formik.touched.iAgree &&
                                  !formik.values.iAgree && (
                                    <div className="invalid-feedback">
                                      You must agree to the terms and conditions
                                    </div>
                                  )}
                              </div>
                            </div>

                            {/* signup button  */}
                            <div className="col-12">
                              <div className="d-grid">
                                <button
                                  className="btn btn-dark btn-lg"
                                  type="submit"
                                >
                                  Sign up
                                </button>
                                <ToastContainer />
                              </div>
                            </div>
                          </div>
                        </form>
                        <div className="row">
                          {/* additional links  */}
                          <div className="col-12">
                            <p className="mb-0 mt-5 text-secondary text-center">
                              Already have an account?{" "}
                              <Link to="/login">
                                <a
                                  href="#!"
                                  className="link-primary text-decoration-none"
                                >
                                  Sign in
                                </a>
                              </Link>
                            </p>
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
    </div>
  );
};

export default Register;
