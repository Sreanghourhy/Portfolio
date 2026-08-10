import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import HTML from '../../assets/list-skill-icon/html.svg';
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



const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      [HTML, 'HTML'], [Java, 'JavaScript'], [Vue, 'Vue.js'],
      [Nuxt, 'Nuxt'], [React, 'React'], [Tailwind, 'Tailwind CSS'],
    ],
  },
  {
    title: 'Backend & mobile',
    skills: [
      [PHP, 'PHP'], [Laravel, 'Laravel'], [Dart, 'Dart'],
      [Flutter, 'Flutter'], [Firebase, 'Firebase'], [API, 'REST APIs'],
    ],
  },
  {
    title: 'Design & workflow',
    skills: [[Figma, 'Figma'], [githubIcon, 'Git & GitHub']],
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <p className={styles.intro}>
        The technologies and tools I use to take products from idea to launch.
      </p>
      <div className={styles.groups}>
        {skillGroups.map((group) => (
          <article className={styles.group} key={group.title}>
            <h2>{group.title}</h2>
            <div className={styles.skillList}>
              {group.skills.map(([icon, name]) => (
                <SkillList key={name} src={icon} skill={name} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
