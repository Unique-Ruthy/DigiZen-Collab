/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./LoginForm.module.css";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import Logo from "./../../../assets/digizenLogo.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { Formik, Form } from "formik";
import { useState } from "react";
import UseContextParent from "./context/useContext";
import axios from "axios";
// import { useContext } from "react";
import { UserContext } from "./context/useContext";

// eslint-disable-next-line react/prop-types
const LoginForm = () => {
  // eslint-disable-next-line no-undef
  const { data, setData } = useContext(UserContext);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const onSubmitHandler = (inputValues) => {
    axios
      .post("https://convene-backend.onrender.com/users/login", {
        name: inputValues.fullName,
        email: inputValues.email,
        password: inputValues.password,
      })
      .then(function (response) {
        // setUser(response)
        setUser(response.data.data);
        navigate("/landingPage");
        console.log(response, "response");
      })
      .catch(function (error) {
        setUser(error.response);
        console.log(error);
      });

    // console.log(user, "users")
    console.log(user, "data from login");

    return (
      <div className={styles.loginWrapper}>
        <Formik
          onSubmit={onSubmitHandler}
          initialValues={{ email: "", password: "" }}
        >
          {({ values, handleChange }) => {
            return (
              <div className={styles.formWrapper}>
                <Form className={styles.formWrap}>
                  <Link to="/" className={styles.headerLink}>
                    <div className={styles.imageSpace}>
                      <img
                        src={Logo}
                        alt="Description of the image"
                        className={styles.imageStyle}
                      />
                      <p>Digizen</p>
                    </div>
                  </Link>
                  {/* <IoIosClose className={styles.closeIcon} /> */}

                  <div className={styles.registerLink}>
                    <h2 className={styles.loginHeader}>Log in</h2>
                    <p>
                      Don`t have an account?{" "}
                      <Link to="/SignUpForm">Sign up</Link>
                    </p>
                  </div>

                  <Button
                    variant="authBtn"
                    className={styles.fab}
                    type="submit"
                  >
                    <FaFacebook className={styles.faceBook} />
                    Log in with Facebook
                  </Button>
                  <Button
                    variant="authBtn"
                    className={styles.fog}
                    type="submit"
                  >
                    <FcGoogle className={styles.gooGle} />
                    Log in with Google
                  </Button>

                  <div className={styles.orLine}>
                    <hr className={styles.wfull} />
                    <p className={styles.orText}>or</p>
                  </div>

                  <div className={styles.inputFieldWrapper}>
                    <div className={styles.inputBox}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        required
                        value={inputValues.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.inputBox}>
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        placeholder="Please enter password"
                        required
                        value={inputValues.password}
                        onChange={handleChange}
                      />
                      <IoEyeOffSharp className={styles.icon} />
                    </div>

                    <div className={styles.rememberForgot}>
                      <label htmlFor="">
                        <input type="checkbox" />
                        Remember me{" "}
                      </label>
                      {/* Link to the forgot password page  */}
                      <Link to="#">Forgot your password?</Link>
                    </div>

                    <Button
                      variant="authBtnLoginSubmit"
                      className={styles.submit}
                      type="submit"
                    >
                      Log In
                    </Button>
                  </div>
                </Form>
              </div>
            );
          }}
          ;
        </Formik>
      </div>
    );
  };
};

export default LoginForm;
