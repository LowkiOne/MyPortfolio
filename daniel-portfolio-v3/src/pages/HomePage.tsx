import { IoLogoGithub } from "react-icons/io";
import { BsKanban } from "react-icons/bs";
import "../styles/homePage.css";

function HomePage() {
  return (
    <div className="home">
      <div>
        <h2>Welcome to my Portfolio</h2>
        <p>
          My Portfolio is still under development and I work on it every day. I
          have planned all the frontend and backend, but adding more feauters as
          I develop.
        </p>
        <a
          href="https://github.com/users/LowkiOne/projects/12/views/1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub /> Github <BsKanban /> Kanban - My Portfolio
        </a>
      </div>
      <div>
        <h3>Plan</h3>
        <ol>
          <li>Create frontend website layout</li>
          <li>Create the frontend layout for all pages</li>
          <li>Create the frontend pages data</li>
          <li>Create backend API & database connection</li>
          <li>Consume the backend API for this react project</li>
          <li>Create the frontend Admin Page</li>
        </ol>
      </div>
    </div>
  );
}

export default HomePage;
