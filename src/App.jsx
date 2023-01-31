import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
