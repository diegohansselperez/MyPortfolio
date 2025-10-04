import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Not_Fount from './components/Not_Fount';
import PdfViewerComponent from './hooks/PdfViewerComponent';

export function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Not_Fount />} />
        <Route path="/professional_pdf" element={<PdfViewerComponent />} />
      </Routes>
    </>
  );
}

export default App;
