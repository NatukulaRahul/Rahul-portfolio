import { span } from "framer-motion/client";
import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  internshala,
  greatcoder,
  devops,
  django,
  college,
  malware,
  aws,
  python
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "AWS Engineer", // Added AWS role
  //   icon: "/aws.png"
  // },
];


  
  const technologies = [
    {
      name:"Python",
      icon:python
    },
    
    {
      name:"Django",
      icon:django
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name:"Devops",
      icon: devops,
    },

    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
  
  {
    title: "Internship & Job Preparation Trainee",
    company_name: "Internshala",
    icon: internshala,  // Add the appropriate icon
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Dec 2022",
    points: [
      "Gained hands-on experience in Python, working on real-world assignments and projects.",
      "Achieved a 100% score in the final assessment and was recognized as a top performer.",
      "Completed a 4-week intensive training covering job preparation strategies and Python programming.",
      "Learned resume building, interview techniques, and job search strategies.",
    ],
  },
  {
    title: "Full-Stack Development Trainee",
    company_name: "Greatcoder Technologies",
    icon: greatcoder,  // Add the appropriate icon
    iconBg: "#E6DEDD",
    date: "4-Month Program",
    points: [
      "Completed an intensive 6-month coding program focused on full-stack development.",
      "Gained hands-on experience in JavaScript, React.js, Node.js, and Python.",
      "Built and deployed real-world projects, applying concepts in frontend and backend development.",
      "Developed a strong foundation in data structures, algorithms, and problem-solving techniques.",
      "Collaborated on coding challenges and participated in mock technical interviews.",
    ],
  },

  {
    title: "AWS & DevOps Trainee",
    company_name: "Greatcoder Technologies",
    icon: greatcoder,  // Add the appropriate icon
    iconBg: "#E6DEDD",
    date: "2-Month Program (AWS & DevOps)",
    points: [
      "Completed an intensive 2-month training program focused on AWS and DevOps.",
      "Gained hands-on experience with AWS services, including EC2, S3, Lambda, and CloudFormation.",
      "Worked on building and deploying infrastructure using AWS, Docker, and Jenkins.",
      "Developed expertise in CI/CD pipelines, automation, and cloud deployment on AWS.",
      "Implemented infrastructure-as-code and managed cloud environments with AWS services.",
      "Collaborated on DevOps-related projects and participated in mock technical interviews."
    ],
  }

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      "name": "Malware Detection Using Machine Learning",
      "description": "Built an ML-based system to detect malware by analyzing file characteristics and behavior, offering an alternative to signature-based methods.",
      "tags": [
        {
          "name": "python",
          "color": "amber-text-gradient"
        },
        {
          "name": "scikit-learn",
          "color": "blue-text-gradient"
        },
        {
          "name": "tensorflow",
          "color": "orange-text-gradient"
        },
        {
          "name": "pandas",
          "color": "green-text-gradient"
        },
        {
          "name": "numpy",
          "color": "purple-text-gradient"
        },
      ],
      image: malware,
      source_code_link: "https://github.com/",
    },
    {
      "name": "University Admission Predictor",
      "description": "Developed an ML model to recommend universities and predict admissions based on students’ academic profiles and scores and preferences.",
      "tags": [
        {
          "name": "python",
          "color": "yellow"
        },
        {
          "name": "machine-learning",
          "color": "green-text-gradient"
        },
        {
          "name": "scikit-learn",
          "color": "orange-text-gradient"
        },
        {
          "name": "data-analysis",
          "color": "purple-text-gradient"
        }
      ],
      image: college,
      source_code_link: "https://github.com/",
    },
  //   {
  //     name: "Trip Guide",
  //     description:
  //       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //     tags: [
  //       {
  //         name: "nextjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "supabase",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "css",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: tripguide,
  //     source_code_link: "https://github.com/",
  //   },
  ];
  
  export { services, technologies, experiences, testimonials, projects };