import { Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import VitrineRestaurantes from "./paginas/VitrineRestaurantes";
import AdiministracaoRestaurantes from "./paginas/Administrador/AdiministracaoRestaurantes";
import Cadastro from "./paginas/Cadastro Restaurantes";
import NotFound from "./paginas/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route
        path="/admin/restaurantes"
        element={<AdiministracaoRestaurantes />}
      />
      <Route path="/admin/cadastro/restaurantes/:id" element={<Cadastro />} />
      <Route path="/admin/cadastro/restaurantes" element={<Cadastro />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
