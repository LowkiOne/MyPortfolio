import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { MdOutlineEmail, MdContentCopy } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

import { useState } from "react";

function Footer() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };
  return (
    <footer>
      <ul>
        <li onClick={() => handleCopy("danne.ernas@gmail.com")} title="Copy">
          <MdOutlineEmail />
          <span> danne.ernas@gmail.com</span>{" "}
          {copied === "danne.ernas@gmail.com" && <MdContentCopy />}
        </li>
        <li onClick={() => handleCopy("+46700369816")} title="Copy">
          <BsTelephone />
          <span> +46700369816</span>{" "}
          {copied === "+46700369816" && <MdContentCopy />}
        </li>
        <li>
          <a
            href="https://github.com/lowkione"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub /> Github
          </a>
        </li>
        <li>
          <a
            href="https://se.linkedin.com/in/daniel-ern%C3%A5s-325656213"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin /> Linkedin
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
