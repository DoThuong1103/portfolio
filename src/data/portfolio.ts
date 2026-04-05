export const personalInfo = {
  name: "Đỗ Bá Thượng",
  role: "Front-End Developer",
  email: "dothuong2k1@gmail.com",
  phone: "0987962056",
  location: "Nam Từ Liêm, Hà Nội",
  dob: "11/03/2001",
  summary:
    "Quan tâm đến tối ưu hiệu năng, clean code và trải nghiệm người dùng (UX). Mong muốn tiếp tục phát triển chuyên sâu về React ecosystem và kiến trúc frontend cho các hệ thống lớn.",
  github: "https://github.com/dothuong2k1",
  linkedin: "https://linkedin.com/in/dothuong2k1",
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

export const experiences = [
  {
    id: 1,
    company: "PGT Solutions JSC",
    role: "Frontend Developer",
    period: "07/2023 – Hiện tại",
    current: true,
    tasks: [
      "Phát triển và bảo trì frontend cho các ứng dụng web sử dụng React.js và Next.js",
      "Chuyển đổi thiết kế Figma thành giao diện responsive chuẩn pixel",
      "Phân tích logic nghiệp vụ và đề xuất giải pháp kỹ thuật cùng team",
      "Sửa lỗi và tối ưu hiệu năng cho các module frontend",
      "Tham gia phát triển các dự án lớn như Sunloft NFT, B2B Platform",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    id: 2,
    company: "Savvycom JSC",
    role: "Frontend Developer",
    period: "01/2023 – 06/2023",
    current: false,
    tasks: [
      "Tham gia phát triển dự án thương mại điện tử DIVIT",
      "Xây dựng giao diện bằng React.js và Material UI",
      "Tích hợp REST API bằng Axios",
      "Tối ưu việc lấy dữ liệu bằng SWR",
    ],
    tech: ["React.js", "Material UI", "Axios", "SWR"],
  },
];

export interface Project {
  id: number;
  name: string;
  period: string;
  client: string;
  teamSize: number;
  role: string;
  gradient: string;
  accentColor: string;
  description: string;
  tech: string[];
  responsibilities: string[];
  highlight: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "JATCO",
    period: "09/2025 – Hiện tại",
    client: "Dự án Outsourcing Nhật",
    teamSize: 6,
    role: "Frontend Developer",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    accentColor: "#6c63ff",
    description:
      "Thiết kế và phát triển hệ thống phân tích và trực quan hóa dữ liệu, xây dựng các biểu đồ như fishbone diagram, bar chart, line chart và tree chart để phân tích nguyên nhân gốc rễ, xu hướng và mối quan hệ giữa các tham số dữ liệu.",
    tech: ["ReactJS", "D3.js", "Redux Toolkit", "MUI", "Tailwind CSS"],
    responsibilities: [
      "Phát triển Admin Dashboard để quản lý dữ liệu hệ thống",
      "Quản lý danh sách dữ liệu và tham số phân tích",
      "Quản lý cấu hình biểu đồ và nguồn dữ liệu",
      "Xây dựng giao diện dashboard responsive và tối ưu hiệu năng hiển thị dữ liệu lớn",
      "Tích hợp API và xử lý dữ liệu từ backend cho các biểu đồ phân tích",
      "Phối hợp với backend và team sản phẩm thiết kế cấu trúc dữ liệu",
    ],
    highlight: "Fishbone · Bar · Line · Tree Chart",
    icon: "BarChart3",
  },
  {
    id: 2,
    name: "SUNLOFT NFT",
    period: "05/2024 – 08/2025",
    client: "Dự án Outsourcing Nhật",
    teamSize: 8,
    role: "Frontend Developer",
    gradient: "from-pink-600 via-rose-500 to-orange-500",
    accentColor: "#f472b6",
    description:
      "Phát triển nền tảng NFT Marketplace cho phép người dùng tạo, giao dịch và quản lý NFT với các chức năng minting, marketplace listing.",
    tech: ["Next.js", "Redux", "TailwindCSS", "Ant Design"],
    responsibilities: [
      "Xây dựng UI responsive và tối ưu hiệu năng bằng Next.js và Tailwind CSS",
      "Phối hợp với blockchain developers triển khai tính năng giao dịch NFT",
      "Xây dựng Admin Dashboard: User, NFT & Notification management",
    ],
    highlight: "NFT Marketplace · Minting · Blockchain",
    icon: "Hexagon",
  },
  {
    id: 3,
    name: "B2B PLATFORM",
    period: "07/2023 – 05/2024",
    client: "Dự án Outsourcing Nhật",
    teamSize: 8,
    role: "Frontend Developer",
    gradient: "from-cyan-600 via-teal-500 to-emerald-500",
    accentColor: "#67e8f9",
    description:
      "Phát triển hệ thống B2B trading platform hỗ trợ giao dịch giữa khách hàng và đại lý, bao gồm đặt hàng, báo giá, xuất hóa đơn, quản lý giao hàng và thông báo trạng thái đơn hàng.",
    tech: ["Next.js", "Redux", "TailwindCSS", "Firebase"],
    responsibilities: [
      "Thiết lập cấu trúc project frontend và tích hợp Firebase Realtime notifications & chat",
      "Phát triển chức năng đặt hàng (order placement) và xuất hóa đơn PDF",
      "Xây dựng các UI component responsive và tối ưu hiệu năng",
    ],
    highlight: "Realtime Chat · Order · Invoice PDF",
    icon: "ShoppingCart",
  },
];

export const education = {
  school: "Đại học Công nghệ Đông Á",
  period: "2019 – 2023",
  degree: "Cử nhân Công nghệ Thông tin",
  grade: "Tốt nghiệp loại Khá",
};
