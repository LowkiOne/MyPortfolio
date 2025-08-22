import { IoLogoGithub } from "react-icons/io";
import { BsKanban } from "react-icons/bs";
function HomePage() {
  return (
    <div>
      <h3>Welcome to my Portfolio</h3>
      <a
        href="https://github.com/users/LowkiOne/projects/12/views/1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub /> Github <BsKanban /> Kanban - My Portfolio
      </a>
    </div>
  );
}

export default HomePage;
