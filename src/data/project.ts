import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "LibreReads",
    description:
      "A comprehensive electronic library management system built with the MERN stack and Tailwind CSS. Features include secure user authentication, advanced search filters, real-time book availability tracking for over 100,000 books, personalized user and admin dashboards, and optimized MongoDB queries for enhanced performance.",
    image: "https://res.cloudinary.com/dn6bopeje/image/upload/v1742075471/elib_ggaqnv.png", // Updated path
    tags: ["MERN", "TailwindCSS", "MongoDB", "Express.js", "React", "Node.js"],
    demoUrl: "",
    githubUrl: "https://github.com/Manya7547/LibreReads_elibrary",
    featured: true,
  },
  {
    id: 2,
    title: "InsightPDF",
    description:
      "An AI-driven PDF interaction platform enabling secure PDF uploads, Stripe subscriptions, and real-time document queries via Retrieval Augmented Generation (RAG). Integrated with LangChain, OpenAI API, and Pinecone DB for vector embeddings, with optimized query performance using Drizzle ORM on Neon DB, and deployed on Vercel's edge runtime with a responsive UI built using shadcn/Tailwind CSS.",
    image:
      "https://res.cloudinary.com/dn6bopeje/image/upload/v1742075654/insightpdf_r5opna.png",
    tags: [
      "AI",
      "OpenAI",
      "LangChain",
      "Stripe",
      "Drizzle ORM",
      "Neon DB",
      "Vercel",
      "TailwindCSS",
    ],
    demoUrl: "https://insightpdf.example.com",
    githubUrl: "https://github.com/Manya7547/InsightPDF",
    featured: true,
  },
  {
    id: 3,
    title: "RailExpress",
    description:
      "A full-stack train booking system web application built with Java Spring Boot and ReactJS. Features include Google OAuth integration for secure login, efficient SQL data management, an intuitive interface for booking, seat selection, payment processing, and administrative controls.",
    image:
      "https://raw.githubusercontent.com/Manya7547/RailExpressCOEN275/refs/heads/main/Seat%20Selection.png",
    tags: ["Java", "Spring Boot", "ReactJS", "Google OAuth", "SQL", "Node.js"],
    demoUrl: "https://docs.google.com/presentation/d/1oipeFmeDlX88Pjk353cVo3y33eeBY2sn/edit?usp=sharing&ouid=113259279939264857361&rtpof=true&sd=true",
    githubUrl: "https://github.com/Manya7547/RailExpressCOEN275",
    featured: false,
  },
  {
    id: 4,
    title: "VocalizeIt -Text To Speech Conversion",
    description:
      "Developed a text-to-speech conversion system using AWS Lambda, Amazon Polly, and CloudWatch. Configured S3 for text and audio storage, implemented a Python Lambda function for TTS conversion, and integrated event notifications and IAM roles for secure, automated speech synthesis.",
    image:
      "https://raw.githubusercontent.com/Manya7547/VocalizeIt/refs/heads/main/assets/TextToSpeechAWS.png",
    tags: ["AWS Lambda", "Amazon Polly", "CloudWatch", "S3", "Python"],
    githubUrl: "https://github.com/Manya7547/VocalizeIt",
    featured: false,
  },
  {
    id: 5,
    title: "Facial Recognition",
    description:
      "A facial recognition system using photos of students in the CS240 (ML) course as dataset.",
    image:
      "https://res.cloudinary.com/dn6bopeje/image/upload/v1742075558/FacialRecognition_iriapd.png",
    tags: ["Python", "Scikit-Learn", "NumPy", "SVG"],
    demoUrl: "https://docs.google.com/presentation/d/1oA6zTaBD4yUMGggDHmUvD0x2IFAsSQqA/edit?usp=sharing&ouid=113259279939264857361&rtpof=true&sd=true",
    githubUrl: "https://github.com/Manya7547/ML-Project_Facial_Recognition",
    featured: false,
  },
];
