import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { TipoUsuario } from '../../modelos/enumeraciones/TipoUsuario';

interface HeaderProps {
  titulo: string;
  tipoUsuario?: typeof TipoUsuario[keyof typeof TipoUsuario];
  showBackButton?: boolean;
  nombreUsuario?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  titulo, 
  tipoUsuario, 
  showBackButton = false,
  nombreUsuario
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleNavigateToHome = () => {
    switch (tipoUsuario) {
      case TipoUsuario.ADMIN:
        navigate('/admin/restaurantes');
        break;
      case TipoUsuario.CLIENTE:
        navigate('/cliente/restaurantes');
        break;
      case TipoUsuario.EMPLEADO:
        // Aquí deberíamos tener una lógica adicional para los diferentes tipos de empleados
        navigate('/empleado/dashboard');
        break;
      default:
        navigate('/');
        break;
    }
  };

  const handleLogout = () => {
    // Eliminar datos de sesión
    localStorage.removeItem('usuario');
    // Redirigir al login
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        {showBackButton && (
          <button className={styles.backButton} onClick={handleBack}>
            ← Volver
          </button>
        )}
        <h1 className={styles.logo} onClick={handleNavigateToHome}>RestauranteApp</h1>
      </div>
      <div className={styles.headerCenter}>
        <h2 className={styles.pageTitle}>{titulo}</h2>
      </div>
      <div className={styles.headerRight}>
        {nombreUsuario && (
          <div className={styles.avatar}>
            {nombreUsuario.charAt(0).toUpperCase()}
          </div>
        )}
        {tipoUsuario && (
          <button className={styles.logoutButton} onClick={handleLogout}>
            Cerrar sesión
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;