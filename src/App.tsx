import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import Home from "./pages/Home";
import Sustainability from "./pages/Sustainability";
import Mission from "./pages/Mission";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import { ScrollToTop } from "./components/common/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="mission" element={<Mission />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
