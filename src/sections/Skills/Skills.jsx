import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import ProjectCard from '../../common/ProjectCard';
import HTML from '../../assets/list-skill-icon/html.svg';
import CSS from '../../assets/list-skill-icon/css.svg';
import Tailwind from '../../assets/list-skill-icon/tailwind.svg';
import Laravel from '../../assets/list-skill-icon/laravel.svg';
import Java from '../../assets/list-skill-icon/javascript.svg';
import TypeScript from '../../assets/list-skill-icon/typescript.svg';
import Nuxt from '../../assets/list-skill-icon/nuxt.svg';
import React from '../../assets/list-skill-icon/react.svg';
import Vue from '../../assets/list-skill-icon/vue.svg';
import PHP from '../../assets/list-skill-icon/php.svg';
import Dart from '../../assets/list-skill-icon/dart.svg';
import Flutter from '../../assets/list-skill-icon/flutter.svg';
import Figma from '../../assets/list-skill-icon/figma.svg';
import githubIcon from '../../assets/list-skill-icon/github.svg';
import Git from '../../assets/list-skill-icon/git.svg';
import Gitea from '../../assets/list-skill-icon/gitea.svg';
import Database from '../../assets/list-skill-icon/database.svg';
import API from '../../assets/list-skill-icon/api.svg';
import Firebase from '../../assets/list-skill-icon/firebase.svg';
import { useLanguage } from '../../common/LanguageContext';

const skillGroups = [
  {
    title: 'Core Technologies',
    skills: [
      [HTML, 'HTML'], [CSS, 'CSS'], [Java, 'JavaScript'],
      [TypeScript, 'TypeScript'], [PHP, 'PHP'], [Dart, 'Dart'],
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      [React, 'React'], [Vue, 'Vue.js'], [Nuxt, 'Nuxt'],
      [Laravel, 'Laravel'], [Flutter, 'Flutter'], [Tailwind, 'Tailwind CSS'],
    ],
  },
  {
    title: 'Databases & Backend Services',
    skills: [
      [Database, 'SQL'], [Database, 'PostgreSQL'],
      [Firebase, 'Firebase'], [API, 'REST APIs'],
    ],
  },
  {
    title: 'Design & Development Tools',
    skills: [
      [Figma, 'Figma'], [Git, 'Git'],
      [githubIcon, 'GitHub'], [Gitea, 'Gitea'],
    ],
  },
];

const projects = [
  {
    title: 'Office of the Council of Ministers (Meeting System)',
    role: 'Full-Stack Developer',
    period: 'Jan 2026 — Present',
    details: [
      'Built a Vue.js participant portal for meeting access, calendar viewing, room guidance, attendance verification, and single sign-on.',
      'Implemented passcode-based attendance tracking, document preview, and step-by-step room navigation.',
      'Delivered a Khmer UI and responsive design across all modules.',
    ],
    tech: ['Vue.js', 'Laravel', 'Khmer UI'],
  },
  {
    title: 'Civil Servant Profile Management System',
    role: 'Full-Stack Developer · Office of the Council of Ministers Internship',
    period: 'Jan 2026 — May 2026',
    details: [
      'Built a Laravel and Vue.js application to digitize civil servant records for a government agency.',
      'Designed the PostgreSQL schema and secure authentication with Laravel Passport and Telegram OTP.',
      'Developed CRUD profiles, QR and ID card generation, PDF export, search, filtering, and pagination.',
    ],
    tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'OAuth2'],
  },
  {
    title: 'TverTask Capstone — School Project II',
    role: 'UX/UI Designer & Front-End Developer',
    period: 'Oct 2025 — Dec 2025',
    details: [
      'Designed intuitive experiences across the dashboard, leaderboard, gamified XP, music integrations, and avatar features.',
      'Created clean, responsive interfaces focused on usability and a consistent product experience.',
    ],
    tech: ['UX/UI', 'Frontend', 'Responsive Design'],
  },
  {
    title: 'Wintech CMS Website',
    role: 'Full-Stack Developer · Internship',
    period: 'May 2025 — Aug 2025',
    details: [
      'Implemented authentication flows, responsive web views, and consistent interfaces across devices.',
      'Built CRUD features, role-based authorization, image uploads, reliable APIs, and secure data handling.',
    ],
    tech: ['Laravel', 'Vue.js', 'REST API'],
  },
  {
    title: 'SmartSched Capstone — School Project I',
    role: 'Front-End Developer',
    period: 'Jan 2025 — Apr 2025',
    details: [
      'Designed a user-friendly calendar scheduling application.',
      'Developed date pickers, time slots, notifications, and continuous music playback between screens.',
    ],
    tech: ['Frontend', 'Calendar UI', 'UX/UI'],
  },
  {
    title: 'ABU Robocon',
    role: 'Mechanical Engineer',
    period: 'Jan 2024 — Jul 2024',
    details: [
      'Developed control algorithms for autonomous and manual robot operations.',
      'Collaborated with electronics and software teams to integrate mechanical systems with sensors and actuators.',
    ],
    tech: ['Robotics', 'Control Systems', 'Teamwork'],
  },
  {
    title: 'Plants Shop',
    role: 'Full-Stack Developer · School Project',
    period: 'Year 2',
    description: 'A complete online plant shop created as a second-year school project.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    link: 'https://github.com/Sreanghourhy/Final_Project_Year2_Term3',
  },
];

function Skills() {
  const { text } = useLanguage();
  const groupTitles = [
    text.skills.core,
    text.skills.frameworks,
    text.skills.services,
    text.skills.design,
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">{text.skills.title}</h1>
      <p className={styles.intro}>{text.skills.intro}</p>
      <div className={styles.groups}>
        {skillGroups.map((group, index) => (
          <article className={styles.group} key={group.title}>
            <h2>{groupTitles[index]}</h2>
            <div className={styles.skillList}>
              {group.skills.map(([icon, name]) => (
                <SkillList key={name} src={icon} skill={name} />
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className={styles.projectSection}>
        <div className={styles.projectHeading}>
          <p>Selected work</p>
          <h2>Projects &amp; Experience</h2>
        </div>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
