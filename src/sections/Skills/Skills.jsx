import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import HTMLlight from '../../assets/list-skill-icon/html.svg';
import Tailwind from '../../assets/list-skill-icon/tailwind.svg';
import Laravel from '../../assets/list-skill-icon/laravel.svg';
import Java from '../../assets/list-skill-icon/javascript.svg';
import Nuxt from '../../assets/list-skill-icon/nuxt.svg';
import React from '../../assets/list-skill-icon/react.svg';
import Vue from '../../assets/list-skill-icon/vue.svg';
import PHP from '../../assets/list-skill-icon/php.svg';
import Dart from '../../assets/list-skill-icon/dart.svg';
import Flutter from '../../assets/list-skill-icon/flutter.svg';
import Figma from '../../assets/list-skill-icon/figma.svg';
import githubIcon from '../../assets/list-skill-icon/github.svg';
import API from '../../assets/list-skill-icon/api.svg';
import Firebase from '../../assets/list-skill-icon/firebase.svg';



function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={HTMLlight} skill="HTML" />
        <SkillList src={Tailwind} skill="Tailwind" />
        <SkillList src={Laravel} skill="Laravel" />
        <SkillList src={Java} skill="JavaScript" />
        <SkillList src={Nuxt} skill="Nuxt" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={React} skill="React" />
        <SkillList src={PHP} skill="php" />
        <SkillList src={Vue} skill="Vue" />
        <SkillList src={Dart} skill="Dart" />
        <SkillList src={Flutter} skill="flutter" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={Figma} skill="Figma" />
        <SkillList src={githubIcon} skill="Git" />
        <SkillList src={API} skill="API" />
        <SkillList src={Firebase} skill="Firebase" />
      </div>
    </section>
  );
}

export default Skills;
