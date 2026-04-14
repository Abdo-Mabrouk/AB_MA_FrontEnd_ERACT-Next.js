import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}
