import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { AboutMe } from "./components/Aboutme";
export function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
