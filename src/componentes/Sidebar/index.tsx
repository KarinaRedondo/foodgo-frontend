import React from "react";
import type { Usuario } from "../../modelos/types/usuario";
import {
  Home,
  Utensils,
  ShoppingBag,
  Calendar,
  User,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  usuario?: Usuario;  // Usuario opcional, puede estar vacío
  estaAbierto: boolean; // Prop que controla si el sidebar está abierto o cerrado
  alternarBarraLateral: () => void; // Función para alternar el estado del sidebar
}

const obtenerIniciales = (nombre?: string): string => {
  if (!nombre) return "US";
  const palabras = nombre.trim().split(" ");
  if (palabras.length === 1) return palabras[0][0].toUpperCase();
  return (palabras[0][0] + palabras[1][0]).toUpperCase();
};

const Sidebar: React.FC<SidebarProps> = ({ usuario, estaAbierto, alternarBarraLateral }) => {
  const iniciales = usuario?.apellido || obtenerIniciales(usuario?.nombre);

  return (
    <div className={`${styles.sidebar} ${estaAbierto ? styles.abierto : styles.cerrado}`}>
      <div className={styles.userProfile}>
        <div className={styles.userAvatar}>{iniciales}</div>
        <div className={styles.userName}>
          {usuario?.tipoUsuario || "Cliente"}
          <p className={styles.userFullName}>
            {usuario?.nombre || "Usuario Invitado"}
          </p>
        </div>
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/" className={styles.navLink}>
              <Home size={20} />
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link to="/restaurantes" className={`${styles.navLink} ${styles.active}`}>
              <Utensils size={20} />
              <span>Restaurantes</span>
            </Link>
          </li>
          <li>
            <Link to="/mis-pedidos" className={styles.navLink}>
              <ShoppingBag size={20} />
              <span>Mis Pedidos</span>
            </Link>
          </li>
          <li>
            <Link to="/mis-reservas" className={styles.navLink}>
              <Calendar size={20} />
              <span>Mis Reservas</span>
            </Link>
          </li>
          <li>
            <Link to="/mi-perfil" className={styles.navLink}>
              <User size={20} />
              <span>Mi Perfil</span>
            </Link>
          </li>
        </ul>
      </nav>

      <button onClick={alternarBarraLateral} className={styles.logoutButton}>
        <LogOut size={18} />
        <span>Cerrar Sesión</span>
      </button>
    </div>
  );
};

export default Sidebar;


