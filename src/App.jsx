import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./pages/Homepage";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Certifications from "./pages/Certifications";
import Project from "./pages/Project";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:projectID" element={<Project />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
