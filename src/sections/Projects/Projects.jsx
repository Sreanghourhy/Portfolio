import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import PlantShop from '../../assets/Project_Pic/plantshop.jfif';
import POS_SYSTEM from '../../assets/Project_Pic/POS_SYSTEM.jfif';
import calunder_event from '../../assets/Project_Pic/calunder_event.jfif';
import mobile_app from '../../assets/Project_Pic/mobile_app.jfif';

const projects = [
  {
    id: 1,
    title: "Plants Shop",
    description: "School Project Y2T3",
    image: PlantShop,
    link: "https://github.com/Sreanghourhy/Final_Project_Year2_Term3",
    tech: ["PHP", "MYSQL", "HTML", "CSS"]
  },
  {
    id: 2,
    title: "Mobile App",
    description: "School Project Y3T1",
    image: mobile_app,
    link: "https://github.com/Sreanghourhy/Final_Project_Mobile_App",
    tech: ["Dart", "Firebase", "Flutter"]
  },
  {
    id: 3,
    title: "April Phnom Penh",
    description: "Processing ",
    image: POS_SYSTEM,
    link: "https://github.com/CollabStack/April-Backend",
    tech: ["Laravel", "Nuxt3", "TailwindCSS"]
  },
  {
    id: 4,
    title: "Calendar Events",
    description: "Planing ",
    image: calunder_event,
    link: "#",
    tech: ["React JS", "Laravel", "TailwindCSS"]
  }
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            src={project.image}
            link={project.link}
            h3={project.title}
            p={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;