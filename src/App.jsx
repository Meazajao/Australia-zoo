import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout/PageLayout";
import Home from "./pages/Home/Home";
import Mammals from "./pages/Animals/Mammals";
import Birds from "./pages/Animals/Birds";
import Reptiles from "./pages/Animals/Reptiles";

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mammals" element={<Mammals />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/reptiles" element={<Reptiles />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
