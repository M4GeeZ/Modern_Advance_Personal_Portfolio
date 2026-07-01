import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiPostman,
  SiFigma,
  SiGit,
  SiGithub,
  SiLinux,
  SiVercel,
  SiRender,
  SiDocker,
} from "react-icons/si";

export const skillGroups = [
{
  title: "Frontend",
  items: [
    { icon: SiReact, name: "React.js" },
    { icon: SiJavascript, name: "JavaScript ES6+" },
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiCss, name: "CSS3" },
    { icon: SiTailwindcss, name: "Tailwind" },
    {
  name: "React Native",
  icon: SiReact,
},
  ],
},
{
  title: "Backend",
  items: [
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiExpress, name: "Express.js" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiPostman, name: "Postman" },
  ],
},
{
  title: "UI/UX Design",
  items: [
    { icon: SiFigma, name: "Figma" },
    { icon: SiFigma, name: "Wireframes" },
    { icon: SiFigma, name: "Prototypes" },
  ],
},
{
  title: "DevOps",
  items: [
    { icon: SiGit, name: "Git" },
    { icon: SiGithub, name: "GitHub" },
    { icon: SiLinux, name: "Linux" },
    { icon: SiVercel, name: "Vercel" },
    { icon: SiRender, name: "Render" },
    { icon: SiDocker, name: "Docker" },
  ],
},
];