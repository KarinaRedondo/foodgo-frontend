import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registro from './vistas/registro';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/registrarse" element={<Registro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
