import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Not_Fount from './components/Not_Fount';

export function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Not_Fount />} />
      </Routes>
    </>
  );
}

export default App;
