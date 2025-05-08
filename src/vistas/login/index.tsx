import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import { TipoUsuario } from '../../modelos/enumeraciones/TipoUsuario'; 

interface LoginFormData {
  correo: string;
  contraseña: string;
  tipoUsuario: TipoUsuario;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    correo: '',
    contraseña: '',
    tipoUsuario: TipoUsuario.CLIENTE
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleUserTypeChange = (tipo: TipoUsuario) => {
    setFormData({
      ...formData,
      tipoUsuario: tipo
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'El correo electrónico es inválido';
    }

    if (!formData.contraseña) {
      newErrors.contraseña = 'La contraseña es requerida';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        // Aquí va la llamada a la API
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        // Comprobamos si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error('Error al iniciar sesión. Intenta de nuevo.');
        }

        // Si la respuesta es exitosa, procesamos los datos de la respuesta
        const data = await response.json();
        // Aquí puedes manejar lo que hace el servidor (por ejemplo, almacenar un token)
        console.log('Inicio de sesión exitoso', data);

        // Redirigir al usuario después de un inicio de sesión exitoso
        navigate('/restaurantes');
      } catch (error: any) {
        // Si hay algún error (red, API, etc.)
        console.error('Error al iniciar sesión:', error);
        setErrors({ general: error.message });
      }
    } else {
      // Si hay errores en el formulario, los mostramos
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Iniciar Sesión</h2>
        <p className={styles.subtitle}>Accede a tu cuenta para continuar</p>
      </div>
      
      <div className={styles.userTypeSelector}>
        <button
          type="button"
          className={`${styles.userTypeButton} ${formData.tipoUsuario === TipoUsuario.CLIENTE ? styles.active : ''}`}
          onClick={() => handleUserTypeChange(TipoUsuario.CLIENTE)}
        >
          Cliente
        </button>
        <button
          type="button"
          className={`${styles.userTypeButton} ${formData.tipoUsuario === TipoUsuario.ADMIN ? styles.active : ''}`}
          onClick={() => handleUserTypeChange(TipoUsuario.ADMIN)}
        >
          Admin
        </button>
        <button
          type="button"
          className={`${styles.userTypeButton} ${formData.tipoUsuario === TipoUsuario.EMPLEADO ? styles.active : ''}`}
          onClick={() => handleUserTypeChange(TipoUsuario.EMPLEADO)}
        >
          Empleado
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="correo" className={styles.label}>Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            className={styles.input}
          />
          {errors.correo && <p className={styles.errorText}>{errors.correo}</p>}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="contraseña" className={styles.label}>Contraseña</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.contraseña && <p className={styles.errorText}>{errors.contraseña}</p>}
        </div>

        {errors.general && <p className={styles.errorText}>{errors.general}</p>}

        <button type="submit" className={styles.loginButton}>
          Iniciar Sesión
        </button>
        
        <div className={styles.registerLink}>
          ¿No tienes una cuenta? <Link to="/registrarse" className={styles.link}>Regístrate</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
