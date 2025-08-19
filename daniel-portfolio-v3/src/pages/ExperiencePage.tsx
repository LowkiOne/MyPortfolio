import TruncatedText from "../components/TruncatedText";
import "../styles/experiencePage.css";
import { useState } from "react";

import { EXPERIENCE_ARRAY } from "../data/experienceData";

function ExperiencePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? EXPERIENCE_ARRAY.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === EXPERIENCE_ARRAY.length - 1 ? 0 : prev + 1
    );
  };

  const exp = EXPERIENCE_ARRAY[currentIndex];
  return (
    <>
      <ul id="experience">
        <li>
          <div>
            <h3>{exp.title}</h3>
            <TruncatedText text={exp.description} limit={300} />
          </div>
          <div>
            <p>
              {exp.employer}, {exp.city}
            </p>
          </div>
        </li>
      </ul>
      <div className="experience-navigation">
        <button onClick={goPrev}>&lt;</button>
        <button onClick={goNext}>&gt;</button>
      </div>
    </>
  );
}

export default ExperiencePage;
