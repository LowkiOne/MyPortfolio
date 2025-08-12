import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { navItems } from "./data/pagePaths";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {navItems.map(({ path, element: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
