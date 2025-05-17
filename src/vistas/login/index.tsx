import { useState } from "react";
import styles from "./login.module.css";
import { BotonComponente } from "../../componentes/ui/boton";
import { iniciarSesion } from "../../servicios/login";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import Swal from "sweetalert2";

const IniciarSesion = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [cargando, setCargando] = useState(false);
  const [verContrasena, setVerContrasena] = useState(false);

  const loginPeticion = async () => {
    setCargando(true);
    try {
      const informacionDelUsuarioLogueado = await iniciarSesion(
        correo,
        contrasena
      );

      localStorage.setItem(
        "usuario",
        JSON.stringify(informacionDelUsuarioLogueado)
      );

      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        showConfirmButton: false,
        timer: 1500,
      });

      const { tipo, rol } = informacionDelUsuarioLogueado;

      if (tipo === "CLIENTE") {
        navigate("/cliente/restaurantes");
      }

      if (tipo === "ADMIN") {
        navigate("/admin/restaurantes");
      }

      if (tipo === "EMPLEADO") {
        if (rol === "COCINERO") navigate("/cocinero/pedidos-pendientes");
        if (rol === "MESERO") navigate("/mesero/mesas");
        if (rol === "REPARTIDOR") navigate("/repartidor/entregas-pendientes");
      }
    } catch (error: unknown) {
      const mensajeError = "Algo salió mal, por favor intente nuevamente.";
      Swal.fire({
        icon: "error",
        title: "Error",
        showConfirmButton: true,
        text: mensajeError,
      });
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className={styles.contenedor_iniciar_sesion}>
      <div className={styles.contenedor_formulario}>
        <div className={styles.header}>
          <h1>Iniciar sesión</h1>
        </div>

        <input
          type="email"
          placeholder="Ingresa tu correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <div className={styles.input_contraseña}>
          <input
            type={verContrasena ? "text" : "password"}
            placeholder="Ingresa tu contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            className={styles.input_password}
          />
        </div>

        <BotonComponente
          label={cargando ? "Cargando..." : "Inicia sesión"}
          onClick={loginPeticion}
        />

        <div className={styles.container_texto_footer}>
          <p>
            ¿No tienes cuenta? <a href="/registrarse">Regístrate</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
