import { useContext } from "react"
import styles from "./Contact.module.css"
import darkModeStyles from "../../darkMode.module.css"
import ContactImg from "../../img/contact.svg"

// import Wip from '../../components/Wip/Wip'
import ContactForm from "../../Components/ContactForm/ContactForm"

// icons
import { FaPhoneSquareAlt, FaEnvelopeSquare, FaHome } from "react-icons/fa"

import { ThemeContext } from "../../context"

export default function Contact() {
  const info = {
    mobile: "0909 776 2803",
    email: "aldrinefacistol@yahoo.com",
    address: "Calamba City, Laguna 4027",
  }

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className={styles.container}>
      <div className={styles["l-side"]}>
        <img src={ContactImg} alt="Contact" />
      </div>
      <div className={styles["r-side"]}>
        <div className={styles["contact-me"]}>
          <h2>Contact me</h2>
          <div className={styles.line}></div>
          <div className={`${styles["contact-info"]}  ${darkMode ? darkModeStyles["dark-contact"] : darkModeStyles["light-contact"]}`}>
            <div>
              <FaPhoneSquareAlt />
              <span>{info.mobile}</span>
            </div>
            <div>
              <FaEnvelopeSquare />
              <span>{info.email}</span>
            </div>
            <div>
              <FaHome />
              <span>{info.address}</span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
    // <Wip page="CONTACT" />
  )
}
