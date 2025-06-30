import { Timestamp } from "firebase/firestore";

export async function generateFakeInterviews() {
  const interviews = [
    {
      created_at: Timestamp.fromDate(new Date("2023-10-01T10:00:00Z")),
      company: "Apple",
      job_description: `
        We are looking for a passionate and motivated Full-Stack Engineer Intern / Co-op to join our development team. You’ll be working on real-world projects using Spring Boot (Java) on the backend and React.js on the frontend. This is a great opportunity to gain hands-on experience building scalable web applications in a collaborative environment. Requirements:
        Currently enrolled in a Computer Science, Software Engineering, or related program
        Solid understanding of Java and JavaScript/TypeScript
        Familiarity with HTML, CSS, REST APIs, and version control (Git)
        Experience with databases (e.g., MySQL, PostgreSQL)
        Familiarity with Docker, CI/CD tools, or cloud platforms (e.g., AWS)
        Unit testing with JUnit or React Testing Library
      `,

      job_title: "Fullstack Engineer Intern",
      questions: [
        "What is your experience with Springboot?",
        "What is the event loop in JavaScript?",
      ],
    },
    {
      created_at: Timestamp.now(),
      company: "Google",
      job_description: `
        We are seeking a Frontend Engineer Intern to join our team. 
        You will be responsible for implementing user interfaces and ensuring a seamless user experience. 
        You will work closely with designers and backend developers to create responsive and interactive web applications. Requirements:
        Currently enrolled in a Computer Science or related program
        Proficiency in HTML, CSS, and JavaScript + Typescript
        Experience with React.js, Next.js, Angular 
        Familiarity with responsive design principles
        Understand of Web sockets and RESTful APIs
        `,
      job_title: "Frontend Engineer Intern",
      questions: [
        "How would you optimize a React application for performance?",
        "Can you explain the concept of virtual DOM in React?",
        "What are hooks and can you give me some examples of some commonly used hooks?",
      ],
    },
    {
      created_at: Timestamp.now(),
      company: "Microsoft",
      job_description: `
          We are seeking a Software Engineer Intern to join our engineering team. You will work on developing and maintaining our software applications, collaborating with senior engineers to learn best practices and improve your coding skills. Requirements:
          Currently enrolled in a Computer Science or related program
          Proficiency in at least one programming language (Java, Python, C++, etc.)
          Familiarity with software development methodologies (Agile, Scrum)
          Basic understanding of databases and SQL
          Excellent problem-solving skills and attention to detail
      `,
      job_title: "Software Engineer Intern",
      questions: [
        "Why would you choose a RDBMS over a NoSQL database?",
        "How would you prevent the need of needing to requery for information that is rarely updated?",
      ],
    },
  ];

  return interviews;
}
