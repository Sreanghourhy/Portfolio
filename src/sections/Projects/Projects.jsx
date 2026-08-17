import styles from './ProjectsStyles.module.css';
import atcImage from '../../assets/Volunteer/ATC.jpg';
import atsImage from '../../assets/Volunteer/ats.jpg';
import roboconImage from '../../assets/Volunteer/robocon.jpg';
import { useLanguage } from '../../common/LanguageContext';

const activities = [
  {
    title: 'CADT Robocon',
    year: '2024',
    image: roboconImage,
  },
  {
    title: 'Air Tech Competition',
    year: 'ATC',
    image: atcImage,
  },
  {
    title: 'Air Tech Show',
    year: 'ATS',
    image: atsImage,
  },
];

function Projects() {
  const { text } = useLanguage();

  return (
    <section id="achievements" className={styles.container}>
      <h1 className="sectionTitle">{text.gallery.title}</h1>
      <p className={styles.intro}>{text.gallery.intro}</p>
      <div className={styles.gallery}>
        {activities.map((activity) => (
          <figure className={styles.galleryItem} key={activity.title}>
            <div className={styles.imageFrame}>
              {activity.image ? (
                <img src={activity.image} alt={`${activity.title} activity`} />
              ) : (
                <span aria-label="Photo coming soon" role="img">Photo coming soon</span>
              )}
            </div>
            <figcaption>
              <span>{activity.title}</span>
              <small>{activity.year}</small>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Projects;
