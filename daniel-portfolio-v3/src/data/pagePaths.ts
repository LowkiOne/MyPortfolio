import {
    BiHomeAlt,
    BiChevronsDown,
    BiSolidLayer,
    BiBriefcase,
    BiLogoCodepen,
    BiSpreadsheet,
    BiUserCircle,
  } from "react-icons/bi";
  import { RiContactsBook2Line } from "react-icons/ri";
  import { GoProject } from "react-icons/go";
  
  import HomePage from "../pages/HomePage";
  import SkillPage from "../pages/SkillPage";
  import CertificatePage from "../pages/CertificatePage";
  import ExperiencePage from "../pages/ExperiencePage";
  import CodePage from "../pages/CodePage";
  import DocumentationPage from "../pages/DocumentationPage";
  import AboutMePage from "../pages/AboutMePage";
  import ContactPage from "../pages/ContactPage";
  import ProjectPage from "../pages/ProjectPage";
  
  import type { NavItem } from "../utilitis/interfaces";
  
  export const navItems: NavItem[] = [
    { path: "/", label: "Home", icon: BiHomeAlt, element: HomePage },
    { path: "/skills", label: "Skills", icon: BiChevronsDown, element: SkillPage },
    { path: "/certificate", label: "Certificate", icon: BiSolidLayer, element: CertificatePage },
    { path: "/experience", label: "Experience", icon: BiBriefcase, element: ExperiencePage },
    { path: "/codes", label: "Codes", icon: BiLogoCodepen, element: CodePage },
    { path: "/docs", label: "Documentation", icon: BiSpreadsheet, element: DocumentationPage },
    { path: "/about-me", label: "About Me", icon: BiUserCircle, element: AboutMePage },
    { path: "/contact", label: "Contact", icon: RiContactsBook2Line, element: ContactPage },
    { path: "/projects", label: "Project", icon: GoProject, element: ProjectPage },
  ];