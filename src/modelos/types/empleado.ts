import type { RolEmpleado } from "../enumeraciones/RolEmpleado";
import type { Usuario } from "./usuario";


// Representa la interfaz para un Empleado, que extiende de Usuario
export interface Empleado extends Usuario {
    cedula: number;                // Cédula del empleado (única)
    salario: string;               // Salario del empleado (como cadena en formato decimal)
    tieneLicencia: boolean;        // Indica si el empleado tiene licencia
    rolEmpleado: RolEmpleado;      // Rol del empleado (enum que define los roles)
}

// Tipo para crear un nuevo Empleado, omitiendo el campo 'id_usuario' que se maneja automáticamente
export type crearEmpleadoDto = Omit<Empleado, "id_usuario">;

// Tipo para actualizar un Empleado, permitiendo que cualquier campo sea opcional
export type actualizarEmpleadoDto = Partial<Empleado>;
