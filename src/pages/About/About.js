import { useContext } from "react"
import styles from "./About.module.css"
import darkModeStyles from "../../darkMode.module.css"

// svg
import PersonalInfo from "../../img/personal_info2.svg"
// import Wip from '../../components/Wip/Wip'

// icons
import { FaReact, FaJsSquare, FaGit, FaHtml5, FaCss3Alt, FaPhp, FaNpm, FaCheckCircle } from "react-icons/fa"

import { ThemeContext } from "../../context"

export default function About() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className={styles.container}>
      <div className={styles["l-side"]}>
        <img src={PersonalInfo} alt="PersonalInfo" />
      </div>
      <div className={`${styles["r-side"]} ${darkMode ? darkModeStyles["dark"] : darkModeStyles["light"]}`}>
        <h2>About me</h2>
        <div className={styles.line}></div>
        <p>As a web developer, I specialize in building interactive and visually appealing web applications. I am committed to continuously learning and improving my skills, and I enjoy the challenges and opportunities that come with creating user-friendly websites.</p>

        <h4>Qualities</h4>
        <ul>
          <li>
            <FaCheckCircle className={styles.check} />
            <div>Highly organized and efficient.</div>
          </li>
          <li>
            <FaCheckCircle className={styles.check} />
            <div>Good research skills and attention to details.</div>
          </li>
          <li>
            <FaCheckCircle className={styles.check} />
            <div>Ability to work independently or as a part of a team.</div>
          </li>
          <li>
            <FaCheckCircle className={styles.check} />
            <div>Can work efficiently even under pressure.</div>
          </li>
        </ul>
        <h4>Skills</h4>
        <div className={styles["skills-icon"]}>
          <FaJsSquare />
          <FaHtml5 />
          <FaCss3Alt />
          <FaReact />
          <FaNpm />
          <FaPhp />
          <FaGit />
        </div>
        <div className={styles["skills-text"]}>
          <span>MySQL</span>
          <span>Framework7</span>
          <span>Rest API</span>
          <span>Stored Procedure</span>
          <span>Cordova</span>
          <span>Adobe Photoshop</span>
        </div>
      </div>
    </div>
    // <Wip page="ABOUT" />
  )
}
