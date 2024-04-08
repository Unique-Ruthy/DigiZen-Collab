import styles from "./category.module.css";
import { HiArrowRight } from "react-icons/hi2";
import youngLady from "../../assets/young woman with vr glasses.png";
import cyberSecurity from "../../assets/cybersecurity.png";
import instagram from "../../assets/instagram.png";
import privacy from "../../assets/privacy-tip.png";
import social from "../../assets/social-myspace.png";
import DigitalLiteracy from "../../assets/Digital Literacy.png";

const Category = () => {
  return (
    <div className={styles.categoryWrapper}>
      <div className={styles.categoryWrap}>
        <img
          src={youngLady}
          alt="a youngLady"
          className={styles.categoryImage}
        />
      </div>

      <h1>Categories</h1>

      <div>
        <ul className={styles.category}>
          <ul className={styles.categoryLists}>
            <li className={styles.categoryList}>
              <img
                src={social}
                alt="Digital Citizenship"
                className={styles.imgWrapper}
              />
            </li>
            <p>Digital Citizen</p>
            <HiArrowRight className={styles.categoryArrow} />
          </ul>

          <ul className={styles.categoryLists}>
            <li className={styles.categoryList}>
              <img
                src={privacy}
                alt="privacy setting"
                className={styles.imgWrapper}
              />
            </li>
            <p>Data Privacy</p>
            <HiArrowRight className={styles.categoryArrow} />
          </ul>

          <ul className={styles.categoryLists}>
            <li className={styles.categoryList}>
              <img
                src={instagram}
                alt="Social Media Safety"
                className={styles.imgWrapper}
              />
            </li>
            <p>Social Media Safety</p>
            <HiArrowRight className={styles.categoryArrow} />
          </ul>

          <ul className={styles.categoryLists}>
            <li className={styles.categoryList}>
              <img
                src={DigitalLiteracy}
                alt="Digital Literacy"
                className={styles.imgWrapper}
              />
            </li>
            <p>Digital Literacy</p>
            <HiArrowRight className={styles.categoryArrow} />
          </ul>

          <ul className={styles.categoryLists}>
            <li className={styles.categoryList}>
              <img
                src={cyberSecurity}
                alt="Cyber Security"
                className={styles.imgWrapper}
              />
            </li>
            <p>Cyber Security</p>
            <HiArrowRight className={styles.categoryArrow} />
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Category;
