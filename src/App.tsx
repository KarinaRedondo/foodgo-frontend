import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./vistas/registro";
import IniciarSesion from "./vistas/login";
import AdminRestaurantes from "./vistas/administrador/restaurantes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registrarse" element={<Registro />} />
          <Route path="/login" element={<IniciarSesion />} />
          <Route path="/admin/restaurantes" element={<AdminRestaurantes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
