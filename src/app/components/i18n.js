// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      About: "About",
      Projects: "Projects",
      "Academic Projects": "Academic Projects",
      "Technical Expertise & Tools": "Technical Expertise & Tools",
      "Core Programming Languages": "Core Programming Languages",
      "Web & Mobile Development": "Web & Mobile Development",
      "Development Tools & IDEs": "Development Tools & IDEs",
      "Methodologies & Practices": "Methodologies & Practices",
      "Collaboration & Design Tools": "Collaboration & Design Tools",
      "Data & Analytics": "Data & Analytics",
      "Software Engineer at ": "Software Engineer at ",
      ", where I work on innovative travel technology solutions. I focus on full-stack development with Java and React, building reliable and user-friendly applications.": ", where I work on innovative travel technology solutions. I focus on full-stack development with Java and React, building reliable and user-friendly applications.",
      "A showcase of my university projects that helped shape my development journey": "A showcase of my university projects that helped shape my development journey",
      Contact: "Contact",
      "Hey, I'm Reen Martini": "Hey, I'm Reen Martini",
      "I enjoy solving complex problems and learning new technologies. I'm always looking for ways to improve and grow as a developer.":
        "I enjoy solving complex problems and learning new technologies. I'm always looking for ways to improve and grow as a developer.",
      "Cocktail recipes": "Cocktail recipes",
      "Work with me": "Work with me",
      Close: "Close",
      "Find your itinerary !": "Find your itinerary !",
      "What if we looked at the world ?": "What if we looked at the world ?",
      "The perfect website for your cocktails recipes!":
        "The perfect website for your cocktails recipes!",
      "Game inspired by Doodle Jump ": "Game inspired by Doodle Jump",
      "Money pot manager": "Money pot manager",
      "Lights up": "Lights up",
      "This is a preview of some of the projects I have done during my studies. I have worked on other projects making me gain skills not only in other programming languages, frameworks and tools, but also in methodology, teamwork and productivity. I am currently working on some new projects that I unfortunately cannot share with you just yet...":
        "This is a preview of some of the projects I have done during my studies. I have worked on other projects making me gain skills not only in other programming languages, frameworks and tools, but also in methodology, teamwork and productivity. I am currently working on some new projects that I unfortunately cannot share with you just yet...",
      "I can't share this repository, but here's a video presentation of the app :)":
        "I can't share this repository, but here's a video presentation of the app :)",
      "But that's not all !": "But that's not all !",
      "I have also worked on projects using these languages":
        "I have also worked on projects using these languages",
      "And these tools and frameworks": "And these tools and frameworks",
      "Sometimes I design my own projects with":
        "Sometimes I design my own projects with",
      "Send me an email": "Send me an email",
      "Find me on LinkedIn": "Find me on LinkedIn",
      "Each project is a new adventure, and requires a different approche":
        "Each project is a new adventure, and requires a different approche",
      "I am passionate about learning new technologies and building software solutions. I am a quick learner and a team player.":
        "I am passionate about learning new technologies and building software solutions. I am a quick learner and a team player.",
    },
  },
  fr: {
    translation: {
      About: "À propos",
      Projects: "Projets",
      "Academic Projects": "Projets Académiques",
      "Technical Expertise & Tools": "Expertise Technique & Outils",
      "Core Programming Languages": "Langages de Programmation",
      "Web & Mobile Development": "Développement Web & Mobile",
      "Development Tools & IDEs": "Outils & IDEs de Développement",
      "Methodologies & Practices": "Méthodologies & Pratiques",
      "Collaboration & Design Tools": "Outils de Collaboration & Design",
      "Data & Analytics": "Données & Analytique",
      "Software Engineer at ": "Ingénieure logiciel chez ",
      ", where I work on innovative travel technology solutions. I focus on full-stack development with Java and React, building reliable and user-friendly applications.": ", où je travaille sur des solutions innovantes dans le domaine du voyage. Je me spécialise dans le développement full-stack avec Java et React, en créant des applications fiables et conviviales.",
      "A showcase of my university projects that helped shape my development journey": "Une vitrine de mes projets universitaires qui ont façonné mon parcours de développement",
      Contact: "Contact",
      "Hey, I'm Reen Martini": "Salut, je suis Reen Martini",
      "I enjoy solving complex problems and learning new technologies. I'm always looking for ways to improve and grow as a developer.":
        "J'aime résoudre des problèmes complexes et apprendre de nouvelles technologies. Je cherche constamment à m'améliorer et à évoluer en tant que développeuse.",
      "Work with me": "Travailler avec moi",
      Close: "Fermer",
      "Find your itinerary !": "Trouvez votre itinéraire !",
      "What if we looked at the world ?": "Et si on regardait le monde ?",
      "The perfect website for your cocktails recipes!":
        "Le site parfait pour vos recettes de cocktails !",
      "Game inspired by Doodle Jump ": "Jeu inspiré de Doodle Jump",
      "Money pot manager": "Gestionnaire de cagnotte",
      "Cocktail recipes": "Recettes de cocktails",
      "Lights up": "Allumez les lumières",
      "This is a preview of some of the projects I have done during my studies. I have worked on other projects making me gain skills not only in other programming languages, frameworks and tools, but also in methodology, teamwork and productivity. I am currently working on some new projects that I unfortunately cannot share with you just yet...":
        "Ceci est un aperçu de certains des projets que j'ai réalisés pendant mes études. J'ai travaillé sur d'autres projets qui m'ont permis d'acquérir des compétences non seulement dans d'autres langages de programmation, frameworks et outils, mais aussi en méthodologie, travail d'équipe et productivité. Je travaille actuellement sur de nouveaux projets que je ne peux malheureusement pas encore partager avec vous...",
      "I can't share this repository, but here's a video presentation of the app :)":
        "Je ne peux pas partager ce dépôt, mais voici une vidéo de présentation de l'application :)",
      "But that's not all...": "Mais ce n'est pas tout...",
      "I have also worked on projects using these languages":
        "J'ai également travaillé sur des projets utilisant ces langages ",
      "And these tools and frameworks": "Et ces outils et frameworks",
      "Sometimes I design my own projects with":
        "Parfois, je design mes propres projets avec",
      "Send me an email": "Envoyez-moi un email",
      "Find me on LinkedIn": "Retrouvez-moi sur LinkedIn",
      "Each project is a new adventure, and requires a different approche":
        "Chaque projet est une nouvelle aventure, et nécessite une approche différente",
      "In my final year at the University of Paris Cité, pursuing a Master's degree in Computer Science - Languages & Programming.":
        "En dernière année d'études à l'Université de Paris Cité, poursuivant un master en informatique - Langages et programmation.",
      "I am passionate about learning new technologies and building software solutions. I am a quick learner and a team player.":
        "Je suis passionnée par l'apprentissage de nouvelles technologies et le développement de solutions logicielles. J'apprends et je m'adapte rapidement et j'aime le travail en équipe.",
      Modelling: "Modélisation",
      "All rights reserved © 2024": "Tous droits réservés © 2024",
      "Find me on Github" : "Retrouvez-moi sur Github",
      
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en", // Default language
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
