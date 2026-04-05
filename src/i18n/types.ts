export type Locale = 'vi' | 'en' | 'ja';

export interface TranslationsExperience {
  id: number;
  period: string;
  tasks: string[];
}

export interface TranslationsProject {
  id: number;
  client: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface Translations {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contactBtn: string;
  };
  hero: {
    available: string;
    helloIm: string;
    typewriterWords: string[];
    viewProjects: string;
    contactMe: string;
    scroll: string;
  };
  about: {
    tag: string;
    headingBefore: string;
    headingGradient: string;
    subheading: string;
    personalGoalTitle: string;
    educationTitle: string;
    workStyleTitle: string;
    funFact: string;
    stats: { label: string; value: number; suffix: string }[];
  };
  skills: {
    tag: string;
    headingBefore: string;
    headingGradient: string;
    subheading: string;
    mainTech: string;
  };
  experience: {
    tag: string;
    headingBefore: string;
    headingGradient: string;
    subheading: string;
    current: string;
    items: TranslationsExperience[];
  };
  projects: {
    tag: string;
    headingBefore: string;
    headingGradient: string;
    subheading: string;
    teamMembers: string;
    viewDetail: string;
    collapse: string;
    responsibilities: string;
    items: TranslationsProject[];
  };
  contact: {
    tag: string;
    headingBefore: string;
    headingGradient: string;
    subheading: string;
    phoneLabel: string;
    addressLabel: string;
    socialTitle: string;
    availableTitle: string;
    replyTime: string;
  };
  form: {
    heading: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    successTitle: string;
    successMsg: string;
    sendAnother: string;
    serverError: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    subjectRequired: string;
    messageRequired: string;
  };
  footer: {
    madeWith: string;
    location: string;
  };
  data: {
    summary: string;
    school: string;
    degree: string;
    grade: string;
  };
}
