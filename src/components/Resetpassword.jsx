import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import userServices from "../../services/userservices";
import { toast } from "react-toastify";

const Resetpassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("New Password is required")
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const { newPassword } = values;
        const token = window.location.pathname.split("/").pop();

        const response = await userServices.resetPassword(token, newPassword);

        if (response && response.status === 200) {
          toast.success(response.data.message);
          setTimeout(() => {
            window.location.href = "/login"; // Redirect to login page
          }, 3000);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("An error occurred while resetting password:", error);
        toast.error("An error occurred while resetting password");
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="text-center mb-3">
                    <a href="#!">
                      <img
                        src="/Logo.ico"
                        alt="Logo"
                        width="175"
                        height="100"
                      />
                    </a>
                  </div>
                  <h2 className="fw-normal text-center text-secondary mb-4">
                    Reset Password
                  </h2>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row gy-2 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3 position-relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            className={`form-control pr-5 ${
                              formik.touched.newPassword &&
                              formik.errors.newPassword
                                ? "is-invalid"
                                : ""
                            }`}
                            name="newPassword"
                            placeholder="New Password"
                            value={formik.values.newPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                          />
                          <label className="form-label">New Password</label>
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
                          {formik.touched.newPassword &&
                            formik.errors.newPassword && (
                              <div className="invalid-feedback">
                                {formik.errors.newPassword}
                              </div>
                            )}
                        </div>
                        <div className="form-floating mb-3 position-relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            className={`form-control pr-5 ${
                              formik.touched.confirmPassword &&
                              formik.errors.confirmPassword
                                ? "is-invalid"
                                : ""
                            }`}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                          />
                          <label className="form-label">Confirm Password</label>
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
                          {formik.touched.confirmPassword &&
                            formik.errors.confirmPassword && (
                              <div className="invalid-feedback">
                                {formik.errors.confirmPassword}
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid my-3">
                          <button className="btn btn-dark btn-lg" type="submit">
                            Submit
                          </button>
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

export default Resetpassword;
