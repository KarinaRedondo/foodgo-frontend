import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import type { TipoUsuario } from "../../modelos/enumeraciones/tipoUsuario";

// Definir el tipo de usuario según la interfaz
export interface Usuario {
  id: number;
  nombre: string;  // Nombre del usuario
  apellido: string;  // Apellido del usuario
  correo: string;
  contraseña: string;  // Contraseña del usuario
  telefono: string;  // Teléfono del usuario
  direccionCalle: string;  // Calle de la dirección del usuario
  direccionNumero: string;  // Número de la dirección
  direccionBarrio: string;  // Barrio de la dirección
  tipoUsuario: TipoUsuario;  // Rol o tipo de usuario (Administrador, Cliente, etc.)
}

const Header = () => {
  // Estado inicial del usuario según la nueva interfaz
  const [usuario, setUsuario] = useState<Usuario>({
    id: 1,
    nombre: "Karina",
    apellido: "Redondo",
    correo: "",
    contraseña: "",
    telefono: "",
    direccionCalle: "",
    direccionNumero: "",
    direccionBarrio: "",
    tipoUsuario: "CLIENTE", 
  });

  useEffect(() => {
    // Recuperar el usuario almacenado en localStorage
    const storedUsuario = localStorage.getItem("usuario");
    if (storedUsuario) {
      setUsuario(JSON.parse(storedUsuario));  // Parsear los datos del usuario almacenados
    }
  }, []);

  return (
    <div className={styles.cn_header}>
      <div className={styles.logo}>
        {usuario && (
          <div className={styles.avatar}>
            {usuario.nombre.charAt(0).toUpperCase()} {/* Mostrar la inicial del nombre */}
          </div>
        )}
      </div>
      <div className={styles.info_User}>
        <span>
          {usuario ? `Bienvenido, ${usuario.nombre}` : "Usuario no disponible"}
        </span>
      </div>
    </div>
  );
};

export default Header;
