import styles from './NavigationStyles.module.css';

function Navigation() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#hero" aria-label="Hy Sreanghour — home">
        HS<span>.</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navigation;
