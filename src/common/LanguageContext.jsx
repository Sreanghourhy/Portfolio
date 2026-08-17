import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

const translations = {
  km: {
    nav: { skills: 'ជំនាញ', gallery: 'វិចិត្រសាល', contact: 'ទំនាក់ទំនង' },
    hero: {
      name: 'ហុី ស្រៀងហួ',
      hello: 'សួស្តី ខ្ញុំឈ្មោះ',
      title: 'អ្នកអភិវឌ្ឍកម្មវិធី Full-stack ដែលបង្កើតបទពិសោធន៍ឌីជីថលប្រកបដោយគំនិតច្នៃប្រឌិត។',
      description: 'ខ្ញុំបង្កើតផលិតផលវេប និងទូរសព្ទដែលឆ្លើយតបបានល្អ ដោយប្រើ Vue.js, Laravel, JavaScript និង Flutter។ ខ្ញុំចូលចិត្តបម្លែងគំនិតទៅជាបទពិសោធន៍ដែលមានប្រយោជន៍ និងងាយស្រួលប្រើ។',
      resume: 'ទាញយកប្រវត្តិរូប', gallery: 'មើលវិចិត្រសាល',
    },
    skills: {
      title: 'ជំនាញ', intro: 'បច្ចេកវិទ្យា និងឧបករណ៍ដែលខ្ញុំប្រើ ដើម្បីបម្លែងគំនិតទៅជាផលិតផល។',
      frontend: 'ផ្នែកខាងមុខ', backend: 'ផ្នែកខាងក្រោយ និងទូរសព្ទ', design: 'ការរចនា និងលំហូរការងារ',
      selected: 'ការងារជ្រើសរើស', projects: 'គម្រោង និងបទពិសោធន៍',
    },
    gallery: { title: 'សមិទ្ធផល និងការងារស្ម័គ្រចិត្ត', intro: 'រូបភាពពីការប្រកួត ការងារសហគមន៍ និងការងារស្ម័គ្រចិត្ត។' },
    contact: {
      eyebrow: 'តោះធ្វើការជាមួយគ្នា', title: 'តើអ្នកមានគម្រោងក្នុងចិត្តមែនទេ?',
      description: 'ខ្ញុំបើកចំហចំពោះឱកាសការងារអ្នកអភិវឌ្ឍ កិច្ចសហការ និងគម្រោងដែលខ្ញុំអាចបង្កើតបទពិសោធន៍មានប្រយោជន៍ និងរីកចម្រើនជាមួយក្រុមល្អ។',
      button: 'ភ្ជាប់ទំនាក់ទំនងតាម LinkedIn',
    },
    footer: 'រចនា និងបង្កើតឡើងដោយយកចិត្តទុកដាក់។',
  },
  en: {
    nav: { skills: 'Skills', gallery: 'Gallery', contact: 'Contact' },
    hero: {
      name: 'Hy Sreanghour',
      hello: "Hello, I'm", title: 'Full-stack developer building thoughtful digital experiences.',
      description: 'I build responsive web and mobile products with Vue.js, Laravel, JavaScript, and Flutter. I enjoy turning ideas into useful, accessible experiences and learning through every project.',
      resume: 'Download résumé', gallery: 'View gallery',
    },
    skills: {
      title: 'Skills', intro: 'The technologies and tools I use to take products from idea to launch.',
      frontend: 'Frontend', backend: 'Backend & mobile', design: 'Design & workflow',
      selected: 'Selected work', projects: 'Projects & Experience',
    },
    gallery: { title: 'Achievements & Volunteering', intro: 'Moments from competitions, community work, and volunteering.' },
    contact: {
      eyebrow: "Let's work together", title: 'Have a project in mind?',
      description: "I'm open to developer opportunities, collaborations, and projects where I can build useful experiences and grow with a great team.",
      button: 'Connect on LinkedIn',
    },
    footer: 'Designed & built with care.',
  },
  ja: {
    nav: { skills: 'スキル', gallery: 'ギャラリー', contact: 'お問い合わせ' },
    hero: {
      name: 'ヒースレンホール',
      hello: 'はじめまして、', title: '思いやりのあるデジタル体験を創るフルスタック開発者です。',
      description: 'Vue.js、Laravel、JavaScript、Flutterを使って、レスポンシブなWeb・モバイル製品を開発しています。アイデアを便利で使いやすい体験に変えることが好きです。',
      resume: '履歴書をダウンロード', gallery: 'ギャラリーを見る',
    },
    skills: {
      title: 'スキル', intro: 'アイデアから製品の公開までに使用する技術とツールです。',
      frontend: 'フロントエンド', backend: 'バックエンド・モバイル', design: 'デザイン・ワークフロー',
      selected: '主な実績', projects: 'プロジェクト・経験',
    },
    gallery: { title: '実績・ボランティア', intro: 'コンテスト、地域活動、ボランティアでの思い出です。' },
    contact: {
      eyebrow: '一緒に働きましょう', title: 'プロジェクトのアイデアはありますか？',
      description: '開発の機会、コラボレーション、そして役立つ体験を作りながら素晴らしいチームと成長できるプロジェクトを探しています。',
      button: 'LinkedInでつながる',
    },
    footer: '心を込めてデザイン・開発しました。',
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'km');

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, text: translations[language] }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
