import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apresentacao from "./Pages/Apresentacao";
import Capacitismo from "./Pages/Capacitismo";
import Autismo from "./Pages/Autismo";
import Tdah from "./Pages/TDAH";
import DefVisual from "./Pages/Deficiencia-Visual";
import DefAuditiva from "./Pages/Deficiencia-Auditiva";
import DefIntectual from "./Pages/Deficiencia-Intelectual";
import DefFisica from "./Pages/Deficiencia-Fisica";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Apresentacao />} />
        <Route path="/Capacitismo" element={<Capacitismo />} />
        <Route path="/Autismo" element={<Autismo />} />
        <Route path="/Tdah" element={<Tdah />} />
        <Route path="/Deficiencia-Auditiva" element={<DefAuditiva />} />
        <Route path="/Deficiencia-Fisica" element={<DefFisica />} />
        <Route path="/Deficiencia-Intelectual" element={<DefIntectual />} />
        <Route path="/Deficiencia-Visual" element={<DefVisual />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
