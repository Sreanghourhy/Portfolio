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
import { useLanguage } from '../../common/LanguageContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { text } = useLanguage();

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
        <p className={styles.eyebrow}>{text.hero.hello}</p>
        <h1>
          {text.hero.name}
        </h1>
        <h2>{text.hero.title}</h2>
        <span className={styles.socials}>
          <a href="https://github.com/Sreanghourhy" target="_blank" rel="noreferrer" aria-label="Visit my GitHub profile">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/hy-sreanghour-3b3829320/" target="_blank" rel="noreferrer" aria-label="Visit my LinkedIn profile">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          {text.hero.description}
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryButton} href={CV} download="Hy-Sreanghour-Resume.pdf">{text.hero.resume}</a>
          <a className={styles.secondaryButton} href="#achievements">{text.hero.gallery}</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
