// Portfolio constants - All portfolio data in one place

export interface Author {
  _id: string;
  name: string;
  initials: string;
  avatar?: { asset?: { url?: string } };
  description?: any[];
  summary?: any[];
  location?: string;
  skills: {
    [category: string]: string[];
  };
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    email?: string;
  };
}

export interface WorkExperience {
  _id: string;
  company: string;
  title: string;
  logo?: { asset?: { url?: string } };
  location?: string;
  startDate: string;
  endDate?: string;
  description?: any[];
  url?: string;
}

export interface Education {
  _id: string;
  school: string;
  degree: string;
  logo?: { asset?: { url?: string } };
  startDate: string;
  endDate: string;
  url?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: any[];
  startDate?: string;
  endDate?: string;
  technologies?: string[];
  image?: { asset?: { url?: string } };
  video?: string;
  links?: { title: string | null; url: string | null; type: string | null }[];
}

// --- NEW INTERFACES ---

export interface Certification {
  _id: string;
  title: string;
  issuer: string;
  date: string;
  url: string;
  icon?: string;
}

export interface Hackathon {
  _id: string;
  title: string;
  dates: string;
  location: string;
  description: string;
  role: string;
  image?: string;
  links?: { title: string; url: string; icon?: any }[];
}

// --- ACTUAL DATA ---

export const AUTHOR: Author = {
  _id: "author-1",
  name: "Vedant Soni",
  initials: "VS",
  avatar: {
    asset: {
      url: "/projects/profile.jpeg",
    },
  },
  description: [
    { _type: "block", children: [{ _type: "span", text: "DevOps Engineer focused on scalable and reliable systems." }] },
  ],
  summary: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "I am a DevOps Engineer specializing in cloud infrastructure and data analytics, focused on automation, scalable systems, CI/CD pipelines, and data-driven decision making.",
        },
      ],
    },
  ],
  location: "India",
  skills: {
    "DevOps & Cloud": [
      "LINUX", "Terraform", "AWS", "Jenkins", "Docker", 
      "Kubernetes", "Chef", "Ansible", "Prometheus", "Grafana"
    ],
    "Data Analytics": [
      "SQL", "Power BI", "Tableau", "Pandas", "NumPy"
    ],
    "Blockchain": [
      "Solidity", "MetaMask", "Ganache", "Remix IDE"
    ],
    "Backend & APIs": [
      "Node.js", "Express.js", "MongoDB", "REST APIs", "PostgreSQL"
    ],
    "Languages": [
      "Python", "JAVA", "C", "C++", "JavaScript", "TypeScript", "Go"
    ],
    "Tools & Others": [
      "Git", "GitHub Actions", "VS Code", "Linux Bash Scripting","Canva","Lighroom","Adobe illustrator"
    ]
  },
  social: {
    github: "https://github.com/lellisrhacker",
    linkedin: "https://www.linkedin.com/in/vedant-soni-209337327/",
    email: "vedantsoni819@gmail.com",
    twitter: "https://x.com/VeDanT1109?t=-CPb_vfQ_8coSWqrb6OaDg&s=09",
  },
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    _id: "work-1",
    company: "SuperNovaIND",
    title: "Senior Software Developer",
    location: "Remote",
    startDate: "2024",
    endDate: "Present",
    description: [
      { _type: "block", children: [{ _type: "span", text: "Building TTS models, Handling API segment & LLM Modelling and Training." }] },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    _id: "edu-1",
    school: "Samrat Ashok Technological Institute, Vidisha (M.P.)",
    degree: "Bachelor in Technology in Computer Science and Engineering",
    startDate: "2023",
    endDate: "2027",
    url: "#",
  },
];

// --- ADD YOUR DATA HERE ---

export const CERTIFICATIONS: Certification[] = [
  {
    _id: "cert-1",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    url: "YOUR_DRIVE_LINK_HERE",
  },
  {
    _id: "cert-2",
    title: "Certificate Name",
    issuer: "Issuer Name",
    date: "2023",
    url: "YOUR_DRIVE_LINK_HERE",
  },
];

export const HACKATHONS: Hackathon[] = [
  {
    _id: "hack-1",
    title: "Smart India Hackathon",
    dates: "September 2025",
    location: "College Level",
    description: "Built a scalable system for disaster management using cloud-native tools.",
    role: "DevOps Lead",
    links: [
      { title: "Certificate", url: "YOUR_DRIVE_LINK" },
      { title: "Github", url: "https://github.com/lellisrhacker" }
    ],
  },
  {
    _id: "hack-1",
    title: "Hackathon",
    dates: "july 2025",
    location: "Online",
    description: "Certificate of Excellence for securing 124th rank in DSA MasterMind – CodeClash, showcasing strong problem-solving and coding skills.",
    role: "Participants",
    links: [
      { title: "Certificate", url: "https://drive.google.com/file/d/1mZCNC_0EBFhjC93p71g12G1Apb4DsQDC/view?usp=drive_link" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    _id: "project-1",
    title: "Blockchain Auction Platform",
    description: [{ _type: "block", children: [{ _type: "span", text: "A fair, transparent, blockchain-based auction platform." }] }],
    technologies: ["Blockchain", "Solidity", "Ganache", "TypeScript"],
    image: { asset: { url: "/projects/project-1.webp" } },
    links: [{ title: "Github", url: "https://github.com/lellisrhacker/fair-auction-platform", type: "code" }],
  },
  {
    _id: "project-2",
    title: "Certifychain",
    description: [{ _type: "block", children: [{ _type: "span", text: "Blockchain-based certification verification system." }] }],
    technologies: ["Blockchain", "Solidity", "Ganache", "TypeScript", "Next.js"],
    image: { asset: { url: "/projects/project-2.webp" } },
    links: [
      { title: "Github", url: "https://github.com/lellisrhacker/certifychain", type: "code" },
      { title: "Website", url: "https://certifychain-vedant4648-2320s-projects.vercel.app", type: "website" }
    ],
  },
];