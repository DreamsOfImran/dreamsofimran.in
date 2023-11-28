import { gaincredit, tcs, franciumtech, nd } from "../assets/images";
import {
  css,
  github,
  html,
  javascript,
  linkedin,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  //
  aws,
  circleci,
  datadog,
  docker,
  grafana,
  helm,
  jenkins,
  kubernetes,
  python,
  //
  bashabot,
  feedbakpro,
  objectdetector,
  radio,
  codeeditor,
  superstatz,
  //
  twitter,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: aws,
    name: "AWS",
    type: "DevOps",
  },
  {
    imageUrl: circleci,
    name: "CircleCI",
    type: "DevOps",
  },
  {
    imageUrl: datadog,
    name: "Datadog",
    type: "DevOps",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps",
  },
  {
    imageUrl: grafana,
    name: "Grafana",
    type: "DevOps",
  },
  {
    imageUrl: helm,
    name: "Helm",
    type: "DevOps",
  },
  {
    imageUrl: jenkins,
    name: "Jenkins",
    type: "DevOps",
  },
  {
    imageUrl: kubernetes,
    name: "Kubernetes",
    type: "DevOps",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "DevOps Engineer",
    company_name: "Gain Credit",
    icon: gaincredit,
    iconBg: "#383E56",
    date: "June 2017 - August 2018",
    points: [
      "Developed various automation and deployment utilities using MySQL and Python.",
      "Trained three new developers for a new project and we finished it in a month, which was three times faster than the planned time.",
      "Worked with multiple IT teams to capture requirements & assisted in finding solutions.",
    ],
  },
  {
    title: "Developer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "September 2018 - March 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FullStack Developer",
    company_name: "Francium Tech",
    icon: franciumtech,
    iconBg: "#383E56",
    date: "March 2019 - April 2021",
    points: [
      "Developed ZenReminder Application and built APIs to serve for mobile & web application. This reminds the user about the event in various ways of email, Telegram and push notifications.",
      "Worked as a part of Front-end and backend development team with MoneySmart SG in various of projects related to Travel Insurance, Personal Loan and Health Insurance.",
      "Also built a Form Builder application, using that anyone can create a fully functioning application within hours. And its already hosting more than 5 applications for MoneySmart SG.",
    ],
  },
  {
    title: "Senior DevOps Engineer",
    company_name: "nDimensional",
    icon: nd,
    iconBg: "#E6DEDD",
    date: "April 2021 - Present",
    points: [
      "Played a key role in orchestrating the migration of nD's platform from EC2 infrastructure to Kubernetes.",
      "Drove the migration of nD's platform from monolith to microservices, optimizing agility and scalability for enhanced development and deployment efficiency.",
      "Maintained nD's infrastructure with Terraform, ensuring scalable and consistent deployment through efficient Infrastructure as Code practices.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/DreamsOfImran",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/imranbasha",
  },
  {
    name: "X (Twitter)",
    iconUrl: twitter,
    link: "https://x.com/DreamsOfImran",
  },
];

export const projects = [
  {
    iconUrl: bashabot,
    theme: "btn-back-blue",
    name: "BashaBot",
    description:
      "Elevate creativity and efficiency with AI-powered solutions for chatbot, code, image, video, and music generation. Unleash your imagination today!",
    link: "https://bashabot.com",
  },
  {
    iconUrl: feedbakpro,
    theme: "btn-back-red",
    name: "Feedbak.Pro",
    description:
      "Feedbak.Pro helps businesses build online credibility and collect actionable customer feedback.",
    link: "https://feedbak-pro.vercel.app",
  },
  {
    iconUrl: objectdetector,
    theme: "btn-back-green",
    name: "Object Detector AI",
    description:
      "Object Detector AI is a computer vision technology designed to identify and locate objects within videos.",
    link: "https://github.com/DreamsOfImran/object-detector",
  },
  {
    iconUrl: radio,
    theme: "btn-back-black",
    name: "Super-Duper Radio",
    description:
      "Developed a web application for radio to fill the gap on mobile, providing convenient access where an official app was unavailable.",
    link: "https://radio.dreamsofimran.in",
  },
  {
    iconUrl: codeeditor,
    theme: "btn-back-pink",
    name: "Code Editor",
    description:
      "Developed a web application for a versatile code editor, tailored for HTML, CSS, and JavaScript, streamlining coding tasks in a user-friendly environment.",
    link: "https://github.com/DreamsOfImran/code-edit",
  },
  {
    iconUrl: superstatz,
    theme: "btn-back-yellow",
    name: "Superstatz",
    description:
      "Superstatz enables users to showcase their statistics dynamically in video or gif format, adding a visually engaging dimension to data presentation.",
    link: "https://superstatz.co",
  },
];
