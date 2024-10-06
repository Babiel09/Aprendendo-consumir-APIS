import { Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import VitrineRestaurantes from "./paginas/VitrineRestaurantes";
import AdiministracaoRestaurantes from "./paginas/Administrador/AdiministracaoRestaurantes";
import Cadastro from "./paginas/Cadastro Restaurantes";
import NotFound from "./paginas/404";
import Login from "./paginas/Login";
import CadastroPratos from "./paginas/Cadastro-Prato";
import ADMPratos from "./paginas/Administrador/ADM-pratos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

//Rotas para os adms restaurantes
      <Route path="/admin" element={<AdiministracaoRestaurantes />}> //Essa parte é especial

      <Route path="cadastro/restaurantes/:id" element={<Cadastro />} />
      <Route path="cadastro/restaurantes" element={<Cadastro />} />


      </Route>
      //Fim das rotas para os adms restaurantes

      //Rota pra mehcer nos pratos:
      <Route path='/admin/pratos' element={<ADMPratos/>}>

      <Route path='cadastro/pratos' element={<CadastroPratos/>} />
      <Route path='cadastro/pratos:id' element={<CadastroPratos/>} />


      </Route>
      //Fim da rota para mecher nos pratos


      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
