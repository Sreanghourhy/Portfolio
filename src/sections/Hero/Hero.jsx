import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Sreanghour.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Hy Sreanghour"
        />
        <button
          className={styles.colorMode}
          type="button"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          onClick={toggleTheme}
        >
          <img src={themeIcon} alt="" aria-hidden="true" />
        </button>
      </div>
      <div className={styles.info}>
        <p className={styles.eyebrow}>Hello, I&apos;m</p>
        <h1>
          Hy Sreanghour
        </h1>
        <h2>Full-stack developer building thoughtful digital experiences.</h2>
        <span className={styles.socials}>
          <a href="https://github.com/Sreanghourhy" target="_blank" rel="noreferrer" aria-label="Visit my GitHub profile">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/hy-sreanghour-3b3829320/" target="_blank" rel="noreferrer" aria-label="Visit my LinkedIn profile">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          I build responsive web and mobile products with Vue.js, Laravel,
          JavaScript, and Flutter. I enjoy turning ideas into useful,
          accessible experiences and learning through every project.
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryButton} href={CV} download>Download résumé</a>
          <a className={styles.secondaryButton} href="#projects">View projects</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
