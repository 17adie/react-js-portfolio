import styles from "./ProjectCard.module.css"

// data
import { data } from "../../data/projects"

// icons
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function Card() {
  const ProjectList = data.map((items) => {
    const have_git = (link) => (
      <a href={link} target="_blank">
        <FaGithub />
      </a>
    )

    const have_demo = (link) => (
      <a href={link} target="_blank">
        <FaExternalLinkAlt />
      </a>
    )

    return (
      <li key={items.id}>
        <img src={items.img_url} alt="" />
        <div className={styles.overlay}>
          <h2>{items.title}</h2>
          <span>{items.subtitle}</span>
          <div className={styles.icons}>
            {items.git_link != "" ? have_git(items.git_link) : ""}
            {items.demo_link != "" ? have_demo(items.demo_link) : ""}
          </div>
        </div>
      </li>
    )
  })

  return (
    <div className={styles["project-container"]}>
      <h2>My projects.</h2>
      <div className={styles.line}></div>
      <ul className={styles["image-gallery"]}>{ProjectList}</ul>
    </div>
  )
}
