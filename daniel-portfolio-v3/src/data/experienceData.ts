import type { Experience } from "../utilitis/interfaces";
import { SKILLS_ARRAY } from "./skillsData";

export const EXPERIENCE_ARRAY: Experience[] = [
    {
        title: "Work Title",
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
      city: "Gothenburg",
      onGoing: true,
    },
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
      city: "Gothenburg",
      onGoing: true,
    },
    // Add more experience here...
  ];