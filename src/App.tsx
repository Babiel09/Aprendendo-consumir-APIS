import { Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import VitrineRestaurantes from "./paginas/VitrineRestaurantes";
import AdiministracaoRestaurantes from "./paginas/Administrador/AdiministracaoRestaurantes";
import Cadastro from "./paginas/Cadastro Restaurantes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route
        path="/admin/restaurantes"
        element={<AdiministracaoRestaurantes />}
      />
      <Route path="/cadastro/restaurantes" element={<Cadastro />} />
    </Routes>
  );
}

export default App;
