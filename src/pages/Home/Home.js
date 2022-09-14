import styles from "./Home.module.css"

// icons
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa"

// svg
import ProgrammingSvg from "../../img/programming-coffee.svg"

export default function Home() {
  const links = {
    github: "https://github.com/17adie",
    facebook: "https://www.facebook.com/17aldrn/",
    linkedin: "https://www.linkedin.com/in/aldrinefacistol/",
  }

  return (
    <div className={styles.container}>
      <div className={styles["l-side"]}>
        <div className={styles.info}>
          <span>Hi there!</span>
          <span>ALDRINE FACISTOL</span>
          <span>Web Developer</span>
        </div>

        <div className={styles.icons}>
          <a href={links.github} target="_blank">
            <FaGithub />
          </a>
          <a href={links.linkedin} target="_blank">
            <FaLinkedin />
          </a>
          <a href={links.facebook} target="_blank">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className={styles["r-side"]}>
        <img src={ProgrammingSvg} alt="Programming" />
      </div>
    </div>
  )
}
