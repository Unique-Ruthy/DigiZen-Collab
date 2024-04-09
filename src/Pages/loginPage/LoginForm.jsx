import React from 'react';
import styles from './LoginForm.module.css';
import { IoEyeOffSharp} from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle} from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import Logo from "../../assets/digizenLogo.png";
import { Link } from 'react-router-dom';

const LoginForm = ({className}) => {

    return (
        <div className={styles.loginWrapper}>
            <form action='' className={styles.formWrap}>
                <div className= {styles.imageSpace}><img src={ Logo} alt="Description of the image" className= {styles.imageStyle} />
Digizen</div>
                <IoIosClose className={styles.closeIcon} />
                <h2>Log in</h2>
                <div className={styles.registerLink}>
                    <p>Don't have an account? <Link to='/SignUp'>Sign up</Link></p>
                </div>
               
                <button className={styles.fab} type='submit'> <FaFacebook className={styles.faceBook} />Log in with Facebook</button>
                <button className={styles.fog} type='submit'> <FcGoogle className={styles.gooGle} />Log in with Google</button>

                <div className={styles.orLine}>
                    <hr className={styles.wfull} />
                    <p className={styles.orText}>or</p>
                </div>
                <div className={styles.inputBox}> 
                <label for="email">Your email</label>
                    <input type='text'  placeholder='' id='Login-text' name='text' required />
                </div>
                <div className={styles.inputBox}>
                <label for="password">Your password</label>
                    <input type='password'  placeholder='' required />
                    <IoEyeOffSharp className={styles.icon}/>
                </div>

                <div className={styles.rememberForgot}>
                <label><input type='checkbox'/>Remember me </label>
                {/* Link to the forgot password page  */}
                <a href='#'>Forgot your password?</a>
                </div>

                <button className={styles.submit} type='submit'>Log In</button>

            </form>
        </div>
    );
};


export default LoginForm;