import ThemeChange from "./ThemeChange";

function Header() {
  return (
    <header>
      <h1>Portfolio</h1>
      <ul>
        <li>Daniel Ernås</li>
        <li>System Developer</li>
        <li>Gothenburg</li>
        <li>Age: 34</li>
      </ul>
      <ThemeChange />
    </header>
  );
}

export default Header;
