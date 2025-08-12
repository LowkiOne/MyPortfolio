import { useState } from "react";
import type { Skill } from "../utilitis/interfaces";
import { SKILLS_ARRAY } from "../data/skillsData";
import "../styles/skillPage.css";

function SkillPage() {
  const [ascending, setAscending] = useState(true);

  const toggleOrder = () => setAscending((prev) => !prev);

  const sortedSkills = [...SKILLS_ARRAY].sort((a, b) =>
    ascending ? a.level - b.level : b.level - a.level
  );
  return (
    <>
      <button onClick={toggleOrder}>
        Sort {ascending ? "Descending" : "Ascending"}
      </button>
      <ul id="skill-page">
        {sortedSkills.map((skill: Skill, index: number) => (
          <li key={index}>
            <span>{skill.title}</span> <span>Level: {skill.level}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SkillPage;
