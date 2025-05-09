 import type { Usuario } from "./usuario";

// Representa el tipo Cliente, extendido de Usuario, con fechaNacimiento como string (ISO)
export interface Cliente extends Usuario {
    fechaNacimiento: string; // Se mantiene en formato ISO 'YYYY-MM-DD'
}

// Tipo para crear un nuevo cliente, omitiendo el campo id_usuario
export type crearClienteDto = Omit<Cliente, "id_usuario">;

// Tipo para actualizar un cliente, permitiendo que los campos sean opcionales
export type actualizarClienteDto = Partial<Cliente>;
