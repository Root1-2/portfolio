import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./pages/Homepage";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="App">
      {/* <NavigationBar /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
