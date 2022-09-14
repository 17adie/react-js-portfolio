import styles from "./Projects.module.css"

// import Wip from '../../components/Wip/Wip'
import ProjectCard from "../../Components/ProjectCard/ProjectCard"

export default function Projects() {
  return (
    <div className={styles.container}>
      <ProjectCard />
    </div>
    // <Wip page="PROJECT" />
  )
}
