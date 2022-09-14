import React from "react"

import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"

import styles from "./Toggle.module.css"

import { useContext } from "react"
import { ThemeContext } from "../../context"

import { FaMoon, FaSun } from "react-icons/fa"

const Toggle = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" })
  }

  return (
    <div className={styles.t}>
      <FaSun color="#734046" />
      <FaMoon color="#734046" />
      {/* <img src={FaSun} alt="" className={styles["t-icon"]} /> */}
      {/* <img src={FaMoon} alt="" className={styles["t-icon"]} /> */}
      <div className={styles["t-button"]} onClick={handleClick} style={{ left: darkMode ? "0" : "25px" }}></div>
    </div>
  )
}

export default Toggle
