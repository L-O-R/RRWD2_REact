import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./index.module.css";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid Email")
    .required("Email is Required"),
  password: yup
    .string()
    .min(8, "Password must be of 8 characters")
    .required("password is required"),
});

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Form Values: ", values);
    },
  });
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4">
        <input
          aria-label="User Email"
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="enter your email"
          className={styles.input}
        />
        {formik.touched.email && formik.errors.email && (
          <p>{formik.errors.email}</p>
        )}
        <input
          aria-label="password"
          aria-autocomplete="true"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="enter your password"
          className={styles.input}
        />
        {formik.touched.password &&
          formik.errors.password && (
            <p>{formik.errors.password}</p>
          )}

        <br />
        <br />
        <button type="submit">Submit</button>
        <p>Values: {JSON.stringify(formik.values)}</p>
        <p>Errors: {JSON.stringify(formik.errors)}</p>
        <p>touched: {JSON.stringify(formik.touched)}</p>
      </form>
    </div>
  );
};

export default App;
