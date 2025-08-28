import type { Certificate } from "../utilitis/interfaces";
import { SKILLS_ARRAY } from "./skillsData";

export const CERTIFICATE_ARRAY: Certificate[] = [
    {
        title: "Agile Fundamentals",
        skills: SKILLS_ARRAY.filter(s => [
            "Agile", "Scrum", "Kanban", "Communication", "Collaboration"
        ].includes(s.title)),
      description: `I learned about the agile work method while studying and got
        interested in learning more about this work method when I found
        this certificate, due to it being a common method in many workplaces.
        I learned more about Kanban, Scrum, and how you can combine these
        if necessary. The two-week delivery approach seems to be the most
        efficient way to work for best quality. Good communication,
        planning, and flexibility are really important when working with
        this method.`,
      complete: new Date("2025-06-25"),
      done: true,
      certificatePdf: "/UdemyAgileFundamentals.pdf",
      certificateLink: "https://www.udemy.com/certificate/UC-a1273ba0-ac26-4b2a-aa96-b3ab0f668eec/"
    },
    {
        title: "React Development Bootcamp",
        skills: SKILLS_ARRAY.filter(s => [
            "Agile", "Scrum", "Kanban", "Communication", "Collaboration"
        ].includes(s.title)),
      description: `An in-depth course on modern React development, covering hooks,
        context API, TypeScript integration, and state management patterns.`,
      complete: new Date(),
      done: false,
      certificatePdf: "",
      certificateLink: ""
    },
    // Add more certificates here...
  ];