import styles from './NavigationStyles.module.css';
import { useLanguage } from '../../common/LanguageContext';

function Navigation() {
  const { language, setLanguage, text } = useLanguage();

  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#hero" aria-label="Hy Sreanghour — home">
        HS<span>.</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#skills">{text.nav.skills}</a>
        <a href="#achievements">{text.nav.gallery}</a>
        <a href="#contact">{text.nav.contact}</a>
        <label className={styles.languagePicker}>
          <span aria-hidden="true">◎</span>
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            aria-label="Select website language"
          >
            <option value="km">ខ្មែរ</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
        </label>
      </nav>
    </header>
  );
}

export default Navigation;
