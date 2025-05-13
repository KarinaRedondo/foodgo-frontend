import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./vistas/registro";
import IniciarSesion from "./vistas/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registrarse" element={<Registro />} />
          <Route path="/login" element={<IniciarSesion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
