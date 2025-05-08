import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './vistas/login';
import Restaurantes from './vistas/cliente/restaurantes';
import Registro from './vistas/registro';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/restaurantes" element={<Restaurantes />} />
        <Route path="/registrarse" element={<Registro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
