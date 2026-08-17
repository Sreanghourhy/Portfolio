import styles from './ContactStyles.module.css';
import { useLanguage } from '../../common/LanguageContext';

function Contact() {
  const { text } = useLanguage();

  return (
    <section id="contact" className={styles.container}>
      <p className={styles.eyebrow}>{text.contact.eyebrow}</p>
      <h1>{text.contact.title}</h1>
      <p className={styles.description}>
        {text.contact.description}
      </p>
      <a href="https://www.linkedin.com/in/hy-sreanghour-3b3829320/" target="_blank" rel="noreferrer">
        {text.contact.button} <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

export default Contact;
