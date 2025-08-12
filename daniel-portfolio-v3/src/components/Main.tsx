import { Outlet, useLocation } from "react-router-dom";

import Aside from "./Aside";
import Section from "./Section";

const routeTitleMap: Record<string, string> = {
  "/": "Home",
  "/skills": "Skills",
  "/certificate": "Certificates",
  "/experience": "Experience",
  "/codes": "Codes",
  "/docs": "Documentation",
  "/about-me": "About Me",
  "/contact": "Contact",
  "/projects": "Projects",
};

function Main() {
  const location = useLocation();
  const title = routeTitleMap[location.pathname] || "Page";
  return (
    <main>
      <Aside />
      <Section title={title}>
        <Outlet />
      </Section>
    </main>
  );
}

export default Main;
