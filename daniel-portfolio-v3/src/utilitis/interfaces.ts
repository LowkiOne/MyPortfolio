import type { IconType } from "react-icons";

export interface User {
    title: string;
    firstName: string;
    lastName: string;
    workTitle: string;
    city: string;
    age: number;
}

export interface Contact {
    email: string;
    phoneNumber: string;
    github: string;
    linkedin: string;
}

export interface SkillCategory {
    title: string;
}

export interface Skill {
    title: string;
    level: number;
    category: SkillCategory;
    // certificates: Certificate[];
    // experiences: Experience[];
}

export interface Certificate {
    title: string;
    skills?: Skill[];
    description: string;
    complete: Date;
    done: boolean;
    certificatePdf?: string;
    certificateLink?: string;
}

export interface Experience {
    title: string;
    skills?: Skill[];
    description: string;
    city: string;
    onGoing: boolean;
}

export interface NavItem {
    path: string;
    label: string;
    icon: IconType;
    element: React.ComponentType;
  }