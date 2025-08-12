import React, { useState } from "react";

interface TruncatedTextProps {
  text: string;
  limit: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded((prev) => !prev);
  };

  const displayText = isExpanded
    ? text
    : text.slice(0, limit) + (text.length > limit ? "..." : "");

  return (
    <>
      <p>{displayText}</p>
      {text.length > limit && (
        <button onClick={toggleText}>
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </>
  );
};

export default TruncatedText;
