// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../../assets/digizenLogo.png";
import { Link } from "react-router-dom";
import Button from "../../Button";
import { Formik, Form } from "formik";
import axios from "axios";

const SignUpForm = () => {
  const [user, setUser] = useState({ FullName: "", email: "", password: "" });

  const onSubmitHandler = (inputValues) => {
    // console.log(inputValues);
    axios
      .post("https://convene-backend.onrender.com/users", {
        name: inputValues.FullName,
        email: inputValues.email,
        password: inputValues.password,
      })
      .then(function (response) {
        setUser(response.data);
        console.log(user, "users");
        console.log(response, "response");
      })
      .catch(function (error) {
        setUser(error);
        console.log(error, "error");
      });
  };

  return (
    <div className={styles.signWrapper}>
      <Formik
        onSubmit={onSubmitHandler}
        initialValues={{ FullName: "", email: "", password: "" }}
      >
        {({ values, handleChange }) => {
          return (
            <div className={styles.formWrap}>
              <Form action="" className={styles.form}>
                <Link to="/" className={styles.headerLink}>
                  <div className={styles.signSpace}>
                    <img
                      src={Logo}
                      alt="Description of the image"
                      className={styles.imgStyle}
                    />
                    <p>Digizen</p>
                  </div>
                </Link>

                {/* <IoIosClose className={styles.closeIcon} /> */}

                <div className={styles.signTextWrap}>
                  <h2 className={styles.upText}>Sign Up</h2>
                  <div className={styles.signLink}>
                    <p>
                      Have an account already?
                      <span>
                        <Link to="/LoginForm" className={styles.span}>
                          Log In
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>

                <Button
                  variant="authBtn"
                  className={styles.signFab}
                  type="submit"
                >
                  <FaFacebook className={styles.faceBook} />
                  Sign up with Facebook
                </Button>
                <Button
                  variant="authBtn"
                  className={styles.signFog}
                  type="submit"
                >
                  <FcGoogle className={styles.gooGle} />
                  Sign up with Google
                </Button>

                <div className={styles.inputFieldWrapper}>
                  <div className={styles.orLine}>
                    <hr className={styles.wfull} />
                    <p className={styles.orText}>OR</p>
                  </div>

                  <div className={styles.signContainer}>
                    <div className={styles.inputBox}>
                      <label htmlFor="text">FullName</label>
                      <input
                        type="text"
                        id="FullName"
                        placeholder=""
                        required
                        value={values.FullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.inputBox}>
                      <label htmlFor="text">Email</label>
                      <input
                        type="email"
                        placeholder="Email address"
                        id="email"
                        required
                        value={values.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      id="password"
                      required
                      value={values.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <Button
                  variant="authBtnSubmit"
                  className={styles.signSubmit}
                  type="submit"
                >
                  Sign Up
                </Button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUpForm;
