import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Usuario } from '../../../modelos/types/usuario';
import type { Cliente } from '../../../modelos/types/cliente';
import type { Empleado } from '../../../modelos/types/empleado';
import { TipoUsuario } from '../../../modelos/enumeraciones/TipoUsuario';
import { RolEmpleado } from '../../../modelos/enumeraciones/RolEmpleado';


interface AuthContextType {
  usuario: Usuario | Cliente | Empleado | null;
  loading: boolean;
  login: (usuario: Usuario | Cliente | Empleado) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
  isAdmin: () => boolean;
  isCliente: () => boolean;
  isEmpleado: () => boolean;
  isCocinero: () => boolean;
  isMesero: () => boolean;
  isRepartidor: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario | Cliente | Empleado | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = () => {
      try {
        const savedUser = localStorage.getItem('usuario');
        if (savedUser) {
          setUsuario(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Error cargando usuario:', error);
        localStorage.removeItem('usuario');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = (user: Usuario | Cliente | Empleado) => {
    setUsuario(user);
    localStorage.setItem('usuario', JSON.stringify(user));
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('usuario');
  };

  const isAuthenticated = () => {
    return !!usuario;
  };

  const isAdmin = () => {
    return usuario?.tipoUsuario === TipoUsuario.ADMIN;
  };

  const isCliente = () => {
    return usuario?.tipoUsuario === TipoUsuario.CLIENTE;
  };

  const isEmpleado = () => {
    return usuario?.tipoUsuario === TipoUsuario.EMPLEADO;
  };

  const isCocinero = () => {
    if (!isEmpleado()) return false;
    return (usuario as Empleado).rolEmpleado === RolEmpleado.COCINERO;
  };

  const isMesero = () => {
    if (!isEmpleado()) return false;
    return (usuario as Empleado).rolEmpleado === RolEmpleado.MESERO;
  };

  const isRepartidor = () => {
    if (!isEmpleado()) return false;
    return (usuario as Empleado).rolEmpleado === RolEmpleado.REPARTIDOR;
  };

  const value = {
    usuario,
    loading,
    login,
    logout,
    isAuthenticated,
    isAdmin,
    isCliente,
    isEmpleado,
    isCocinero,
    isMesero,
    isRepartidor,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;