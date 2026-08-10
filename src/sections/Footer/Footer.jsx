import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {new Date().getFullYear()} Hy Sreanghour. Designed &amp; built with care.
      </p>
    </section>
  );
}

export default Footer;
