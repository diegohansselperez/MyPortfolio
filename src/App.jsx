import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { AboutMe } from "./pages/aboutMe";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;