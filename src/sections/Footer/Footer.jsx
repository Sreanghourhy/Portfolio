import styles from './FooterStyles.module.css';
import { useLanguage } from '../../common/LanguageContext';

function Footer() {
  const { text } = useLanguage();

  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {new Date().getFullYear()} {text.hero.name}. {text.footer}
      </p>
    </section>
  );
}

export default Footer;
