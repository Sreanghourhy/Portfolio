import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <p className={styles.eyebrow}>Let&apos;s work together</p>
      <h1>Have a project in mind?</h1>
      <p className={styles.description}>
        I&apos;m open to developer opportunities, collaborations, and projects
        where I can build useful experiences and grow with a great team.
      </p>
      <a href="https://www.linkedin.com/in/hy-sreanghour-3b3829320/" target="_blank" rel="noreferrer">
        Connect on LinkedIn <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

export default Contact;
