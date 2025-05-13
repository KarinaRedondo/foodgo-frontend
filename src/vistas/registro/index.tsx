import styles from "./registro.module.css";
import { useState } from "react";
import { TipoUsuario } from "../../modelos/enumeraciones/TipoUsuario";
import { crearCliente } from "../../servicios/cliente"; 
import Swal from "sweetalert2";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccionCalle, setDireccionCalle] = useState("");
  const [direccionNumero, setDireccionNumero] = useState("");
  const [direccionBarrio, setDireccionBarrio] = useState("");
  const [verContraseña, setVerContraseña] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const crearClientePeticion = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await crearCliente({
        nombre,
        apellido,
        correo,
        contrasena: contraseña,
        telefono,
        fechaNacimiento,
        tipoUsuario: TipoUsuario.CLIENTE,
        direccionCalle,
        direccionNumero,
        direccionBarrio, 
      });

      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Tu cuenta ha sido creada correctamente.",
      });
    } catch (err: unknown) {
      let errorMsg = "Error desconocido";

      if (err instanceof Error) {
        errorMsg = err.message;
      }

      setError(errorMsg);

      Swal.fire({
        icon: "error",
        title: "Error al registrar",
        text: errorMsg,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <div className={styles.contenedor}>
      <div className={styles.seccion_formulario}>
        <h2>Registro de Cliente</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input
          type="date"
          placeholder="Fecha de nacimiento"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
        />
        <input
          type="text"
          placeholder="Calle"
          value={direccionCalle}
          onChange={(e) => setDireccionCalle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Número de dirección"
          value={direccionNumero}
          onChange={(e) => setDireccionNumero(e.target.value)}
        />
        <input
          type="text"
          placeholder="Barrio"
          value={direccionBarrio}
          onChange={(e) => setDireccionBarrio(e.target.value)}
        />
        <div className={styles.input_contraseña}>
          <input
            type={verContraseña ? "text" : "password"}
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <button type="button" onClick={() => setVerContraseña(!verContraseña)}>
            {verContraseña ? "Ocultar" : "Ver"}
          </button>
        </div>
        <button onClick={crearClientePeticion} disabled={isLoading}>
          {isLoading ? "Registrando..." : "Crear Cuenta"}
        </button>
        <p>
          ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
};

export default Registro;

