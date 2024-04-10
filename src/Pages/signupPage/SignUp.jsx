import React from 'react';
import styles from './SignUp.module.css';
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle} from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import Logo from "../../assets/digizenLogo.png";
import { Link } from 'react-router-dom';

const LoginForm = () => {

    return (
        <div className={styles.signWrapper}>
            <form action=''  className={styles.form}>
                <div className={styles.signSpace}><img src={ Logo} alt="Description of the image" className={styles.imgStyle} />
Digizen</div>
                <IoIosClose className={styles.closeIcon}/>
                <h2>Sign Up</h2>
                <div className={styles.signLink}>
                    <p>Have an account already? <Link to ="/login">Log In</Link></p>
                </div>
               
                <button className={styles.signFab} type='submit'> <FaFacebook className={styles.faceBook} />Sign up with Facebook</button>
                <button className={styles.signFog} type='submit'> <FcGoogle className={styles.gooGle}/>Sign up with Google</button>

                <div className={styles.signLine}>
                    <hr className={styles.signFull}/>
                    <p className={styles.signText}>or</p>
                </div>
                <div className={styles.signContainer}>
                    <div className={styles.inputBox}> 
                        <label for="name">First name</label>
                        <input type='name'  placeholder=''required />
                    </div>
                    <div className={styles.inputBox}>
                        <label for="text">Last name</label>
                        <input type='text'  placeholder='' required />
                    </div>
                </div>
                <div className={styles.inputBox}>
                <label for="email">Email address</label>
                    <input type='email'  placeholder='' required id='email'/>
                </div>


                <button className={styles.signSubmit} type='submit'>Sign Up</button>

            </form>
        </div>
    );
};


export default LoginForm;