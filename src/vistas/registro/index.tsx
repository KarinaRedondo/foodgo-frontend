import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './registro.module.css';
import { TipoUsuario } from '../../modelos/enumeraciones/TipoUsuario';
import { RolEmpleado } from '../../modelos/enumeraciones/RolEmpleado';
import type { crearUsuarioDto } from '../../modelos/types/usuario';
import type { crearEmpleadoDto } from '../../modelos/types/empleado';

const Registro: React.FC = () => {
  const [formData, setFormData] = useState<crearUsuarioDto & Partial<crearEmpleadoDto>>({
    nombre: '',
    apellido: '',
    correo: '',
    contraseña: '',
    telefono: '',
    direccionCalle: '',
    direccionNumero: '',
    direccionBarrio: '',
    tipoUsuario: TipoUsuario.CLIENTE,
    cedula: undefined,
    salario: '',
    tieneLicencia: false,
    rolEmpleado: RolEmpleado.MESERO
  });

  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleUserTypeChange = (tipo: TipoUsuario) => {
    setFormData({
      ...formData,
      tipoUsuario: tipo
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.apellido.trim()) newErrors.apellido = 'El apellido es requerido';

    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'El correo electrónico es inválido';
    }

    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es requerido';

    if (!formData.contraseña) {
      newErrors.contraseña = 'La contraseña es requerida';
    } else if (formData.contraseña.length < 6) {
      newErrors.contraseña = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (formData.contraseña !== confirmarContrasena) {
      newErrors.confirmarContrasena = 'Las contraseñas no coinciden';
    }

    if (formData.tipoUsuario === TipoUsuario.EMPLEADO) {
      if (!formData.cedula) newErrors.cedula = 'La cédula es requerida';
      if (!formData.salario) newErrors.salario = 'El salario es requerido';
    }

    return newErrors;
  };

  const registrarUsuario = async (data: typeof formData) => {
    // Simulación de una llamada a una API
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Usuario registrado en backend:', data);
        resolve(true);
      }, 1000);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setIsSubmitting(true);
        await registrarUsuario(formData);
        alert('Registro exitoso');
        // Aquí podrías redirigir con navigate("/login") si estás usando useNavigate
      } catch (error) {
        alert('Ocurrió un error al registrar el usuario');
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Crear Cuenta</h2>
        <p className={styles.subtitle}>Regístrate para comenzar a usar el sistema</p>
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
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="nombre" className={styles.label}>Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.nombre && <p className={styles.errorText}>{errors.nombre}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="apellido" className={styles.label}>Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.apellido && <p className={styles.errorText}>{errors.apellido}</p>}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="correo" className={styles.label}>Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.correo && <p className={styles.errorText}>{errors.correo}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="telefono" className={styles.label}>Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.telefono && <p className={styles.errorText}>{errors.telefono}</p>}
        </div>

        {formData.tipoUsuario === TipoUsuario.EMPLEADO && (
          <>
            <div className={styles.formGroup}>
              <label htmlFor="cedula" className={styles.label}>Cédula</label>
              <input
                type="number"
                id="cedula"
                name="cedula"
                value={formData.cedula || ''}
                onChange={handleChange}
                className={styles.input}
              />
              {errors.cedula && <p className={styles.errorText}>{errors.cedula}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="salario" className={styles.label}>Salario</label>
              <input
                type="text"
                id="salario"
                name="salario"
                value={formData.salario}
                onChange={handleChange}
                className={styles.input}
              />
              {errors.salario && <p className={styles.errorText}>{errors.salario}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="rolEmpleado" className={styles.label}>Rol de Empleado</label>
              <select
                id="rolEmpleado"
                name="rolEmpleado"
                value={formData.rolEmpleado}
                onChange={handleChange}
                className={styles.input}
              >
                <option value={RolEmpleado.MESERO}>Mesero</option>
                <option value={RolEmpleado.COCINERO}>Cocinero</option>
                <option value={RolEmpleado.REPARTIDOR}>Repartidor</option>
              </select>
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="tieneLicencia"
                name="tieneLicencia"
                checked={formData.tieneLicencia}
                onChange={handleChange}
                className={styles.checkbox}
              />
              <label htmlFor="tieneLicencia" className={styles.checkboxLabel}>
                Tiene licencia de conducir
              </label>
            </div>
          </>
        )}

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

        <div className={styles.formGroup}>
          <label htmlFor="confirmarContrasena" className={styles.label}>Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmarContrasena"
            name="confirmarContrasena"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            className={styles.input}
          />
          {errors.confirmarContrasena && <p className={styles.errorText}>{errors.confirmarContrasena}</p>}
        </div>

        <button type="submit" className={styles.registerButton} disabled={isSubmitting}>
          {isSubmitting ? 'Registrando...' : 'Registrarse'}
        </button>

        <div className={styles.loginLink}>
          ¿Ya tienes una cuenta? <Link to="/login" className={styles.link}>Inicia Sesión</Link>
        </div>
      </form>
    </div>
  );
};

export default Registro;

