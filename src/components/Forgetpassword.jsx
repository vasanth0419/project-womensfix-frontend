import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik"; // Import useFormik hook
import * as Yup from "yup"; // Import Yup for validation
import userServices from "../../services/userservices";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address") // Email validation
      .required("Email is required") // Required validation
      .matches(/^\S+@\S+\.\S+$/, "Email must be valid"), // Exact validation
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // Make the password reset API call
        const response = await userServices.forgetpassword(values.email);

        // Check if the response exists
        if (response) {
          // If password reset request is successful, display success message and redirect the user
          toast.success(response.data.message);
          navigate("/login");
        } else {
          // If there's an error, display error message
          toast.error(
            "Failed to request password reset. Please try again later."
          );
        }
      } catch (error) {
        // If there's an error with the API call, handle it here
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
      }
    },
  });

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {/* Password Reset */}
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="text-center mb-3">
                    <Link to="/">
                      <img
                        src="/Logo.ico"
                        alt="Logo"
                        width="175"
                        height="100"
                      />
                    </Link>
                  </div>
                  <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                    Provide the email address associated with your account to
                    recover your password.
                  </h2>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row gy-2 overflow-hidden">
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
                          {formik.touched.email && formik.errors.email && (
                            <div className="invalid-feedback">
                              {formik.errors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid my-3">
                          <button type="submit" className="btn btn-dark btn-lg">
                            Reset Password
                          </button>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex gap-2 justify-content-around">
                          <Link
                            to="/login"
                            className="link-secondary text-decoration-none"
                          >
                            Log In
                          </Link>
                          <Link
                            to="/register"
                            className="link-secondary text-decoration-none"
                          >
                            Register
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgetPassword;
