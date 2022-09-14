import React, { useState, useContext } from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import Toggle from "../Toggle/Toggle"

import styles from "./Navbar.module.css"

import { ThemeContext } from "../../context"

export default function Navbar({ menus }) {
  const [show, setShow] = useState(false)

  // for hiding and showing of navbar when screen size is less than 600px
  // hamburger toggle
  function showSwitch() {
    return setShow(!show)
  }

  const scrollToTop = () => {
    scroll.scrollToTop(0)
  }

  const MenuItems = menus.map((menu) => (
    <Link key={menu.id} onClick={() => showSwitch()} activeClass="active" to={menu.title} spy={true} smooth={true} offset={-50} duration={600}>
      {menu.title}
    </Link>
  ))

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <>
      <div className={`${styles.navbar} ${darkMode && styles["dark-mode"]}`}>
        <div className={styles["toggle-container"]}>
          <div className={styles.logo} onClick={scrollToTop}>
            AF
          </div>
          <Toggle />
        </div>
        <div className={show ? `${styles.links} ${styles.hamburger}` : `${styles.links}`}>{MenuItems}</div>
        <div onClick={() => showSwitch()} className={show ? `${styles["bars-button"]} ${styles.hamburger}` : styles["bars-button"]}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  )
}

// import React, { useState } from "react"
// import logo from "../../logo.svg"
// import { Link, animateScroll as scroll } from "react-scroll"
// import styles from "./Navbar.module.css"

// const Navbar = ({ menus }) => {
//   const scrollToTop = () => {
//     scroll.scrollToTop(0)
//   }

//   const [show, setShow] = useState(false)

//   // for hiding and showing of navbar when screen size is less than 600px
//   // hamburger toggle
//   function showSwitch() {
//     return setShow(!show)
//   }

//   const MenuItems = menus.map((menu) => (
//     <li key={menu.id} className={styles["nav-item"]}>
//       <Link activeClass="active" to={menu.title} spy={true} smooth={true} offset={-50} duration={500}>
//         {menu.title}
//       </Link>
//     </li>
//   ))

//   return (
//     <nav className={styles.nav} id="navbar">
//       <div className={styles["nav-content"]}>
//         <img src={logo} className={styles["nav-logo"]} alt="Logo" onClick={scrollToTop} />
//         {/* <ul className={styles["nav-item"]}>{MenuItems}</ul> */}
//         <ul className={show ? `${styles["nav-items"]} ${styles.hamburger}` : `${styles["nav-items"]}`}>{MenuItems}</ul>
//         <div onClick={() => showSwitch()} className={show ? `${styles["bars-button"]} ${styles.hamburger}` : styles["bars-button"]}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
