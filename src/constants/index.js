import { FaGithub, FaLinkedin, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaShieldAlt, FaNetworkWired, FaCode } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiDjango, SiDocker, SiGit, SiGithub, SiHtml5, SiTailwindcss, SiPython, SiLinux } from 'react-icons/si';
import { MdSecurity, MdApi } from 'react-icons/md';
import { RiOpenaiFill } from 'react-icons/ri';

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = [
  { name: "github", Icon: FaGithub, link: "https://github.com/yourusername" },
  { name: "linkedin", Icon: FaLinkedin, link: "https://linkedin.com/in/animaw-yitayal" },
  { name: "twitter", Icon: FaTwitter, link: "https://twitter.com/yourusername" },
];

export const contactMethods = [
  { name: "email", Icon: FaEnvelope, text: "animaw.yitayal@example.com", href: "mailto:animaw.yitayal@example.com" },
  { name: "linkedin", Icon: FaLinkedin, text: "linkedin.com/in/animaw-yitayal", href: "https://linkedin.com/in/animaw-yitayal" },
  { name: "phone", Icon: FaPhone, text: "+251 [Your Phone]", href: "tel:+251XXXXXXXXX" },
];

export const skills = [
  // Cybersecurity Skills
  { name: 'SIEM Tools', Icon: FaShieldAlt },
  { name: 'Threat Detection', Icon: MdSecurity },
  { name: 'Incident Response', Icon: FaShieldAlt },
  { name: 'Network Security', Icon: FaNetworkWired },
  { name: 'Firewalls', Icon: SiNodedotjs },
  { name: 'IDS/IPS', Icon: FaNetworkWired },
  { name: 'Linux', Icon: SiLinux },

  // Programming & Development
  { name: 'Python', Icon: SiPython },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'React', Icon: SiReact },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Django', Icon: SiDjango },

  // DevOps & Tools
  { name: 'AWS', Icon: SiLinux },
  { name: 'Docker', Icon: SiDocker },
  { name: 'Git', Icon: SiGit },
  { name: 'GitHub', Icon: SiGithub },

  // Frontend & AI Tools
  { name: 'HTML', Icon: SiHtml5 },
  { name: 'TailwindCSS', Icon: SiTailwindcss },
  { name: 'REST API', Icon: MdApi },
  { name: 'Copilot', Icon: RiOpenaiFill },
  { name: 'Cursor AI', Icon: RiOpenaiFill },
];

export const projects = [
  {
    id: 1,
    name: 'SIEM Implementation',
    description: 'Led the implementation of a Security Information and Event Management system at Wegagen Bank to enhance threat detection capabilities.',
    tags: ['SIEM', 'Threat Detection', 'Log Analysis'],
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 2,
    name: 'Incident Response Automation',
    description: 'Developed automation scripts to streamline incident response procedures, reducing response time by 40%.',
    tags: ['Python', 'Automation', 'Incident Response'],
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
  },
  
  {
    id: 3,
    name: 'Maternal Health Information System',
    description: 'A web-based platform designed to provide essential health information and resources for expecting and new mothers. Features include appointment scheduling, health tracking, and educational resources.',
    tags: ['HTML', 'Node.js', 'Bootstrap', 'JavaScript'],
    imageUrl: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
},
{
    id: 4,
    name: 'Medi-Connect',
    description: 'A healthcare application that connects patients with doctors for virtual consultations. Includes real-time chat, appointment booking, and medical record management for seamless healthcare access.',
    tags: ['ReactJS', 'Firebase', 'TailwindCSS'],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
}
];