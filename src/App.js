import { useContext } from "react"
import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"

import { ThemeContext } from "./context"

function App() {
  const menuItems = [
    {
      id: 1,
      title: "Home",
      url: "home",
      fragment: <Home />,
    },
    {
      id: 2,
      title: "About",
      url: "about",
      fragment: <About />,
    },
    {
      id: 3,
      title: "Projects",
      url: "Projects",
      fragment: <Projects />,
    },
    {
      id: 4,
      title: "Contact",
      url: "contact",
      fragment: <Contact />,
    },
  ]

  const MenuContainer = menuItems.map((menu) => (
    <div key={menu.id} className="section-content" id={menu.title}>
      {menu.fragment}
    </div>
  ))

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="App" style={{ backgroundColor: darkMode ? "#222" : "#fff", color: darkMode && "#fff" }}>
      <Navbar menus={menuItems} />

      {MenuContainer}
    </div>
  )
}

export default App
