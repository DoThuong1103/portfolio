export const personalInfo = {
  name: "Đỗ Bá Thượng",
  email: "dothuong2k1@gmail.com",
  phone: "0987962056",
  location: "Nam Từ Liêm, Hà Nội",
  dob: "11/03/2001",
  github: "https://github.com/DoThuong1103",
  linkedin: "https://www.linkedin.com/in/do-thuong-8b7080267/",
};

export const skills = [
  {
    category: "Languages",
    icon: "Code2",
    color: "#6c63ff",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "Layers",
    color: "#a78bfa",
    items: ["React.js", "Next.js"],
  },
  {
    category: "State Management",
    icon: "Database",
    color: "#67e8f9",
    items: ["Redux", "Redux Toolkit", "Zustand"],
  },
  {
    category: "UI Libraries",
    icon: "Palette",
    color: "#f472b6",
    items: ["Tailwind CSS", "Ant Design", "Material UI"],
  },
  {
    category: "Data & API",
    icon: "Plug",
    color: "#4ade80",
    items: ["Axios", "SWR", "Firebase Realtime DB", "Firebase Notification", "Firebase Chat", "D3.js"],
  },
];

// Static (non-localizable) experience data
export const experiences = [
  {
    id: 1,
    company: "PGT Solutions JSC",
    role: "Frontend Developer",
    current: true,
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    id: 2,
    company: "Savvycom JSC",
    role: "Frontend Developer",
    current: false,
    tech: ["React.js", "Material UI", "Axios", "SWR"],
  },
];

// Static (non-localizable) project data — descriptions/responsibilities are in i18n
export interface Project {
  id: number;
  name: string;
  teamSize: number;
  role: string;
  gradient: string;
  accentColor: string;
  tech: string[];
  highlight: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "JATCO",
    teamSize: 6,
    role: "Frontend Developer",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    accentColor: "#6c63ff",
    tech: ["ReactJS", "D3.js", "Redux Toolkit", "MUI", "Tailwind CSS"],
    highlight: "Fishbone · Bar · Line · Tree Chart",
    icon: "BarChart3",
  },
  {
    id: 2,
    name: "SUNLOFT NFT",
    teamSize: 8,
    role: "Frontend Developer",
    gradient: "from-pink-600 via-rose-500 to-orange-500",
    accentColor: "#f472b6",
    tech: ["Next.js", "Redux", "TailwindCSS", "Ant Design"],
    highlight: "NFT Marketplace · Minting · Blockchain",
    icon: "Hexagon",
  },
  {
    id: 3,
    name: "B2B PLATFORM",
    teamSize: 8,
    role: "Frontend Developer",
    gradient: "from-cyan-600 via-teal-500 to-emerald-500",
    accentColor: "#67e8f9",
    tech: ["Next.js", "Redux", "TailwindCSS", "Firebase"],
    highlight: "Realtime Chat · Order · Invoice PDF",
    icon: "ShoppingCart",
  },
];

// Education — only static period stays here; school/degree/grade are in i18n
export const education = {
  period: "2019 – 2023",
};
