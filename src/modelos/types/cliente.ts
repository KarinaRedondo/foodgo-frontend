 import type { Usuario } from "./usuario";

// Representa el tipo Cliente, extendido de Usuario, con fechaNacimiento como string (ISO)
export interface Cliente extends Usuario {
    fechaNacimiento: String; // Se mantiene en formato ISO 'YYYY-MM-DD'
}

// Tipo para crear un nuevo cliente, omitiendo el campo id_usuario
export type crearClienteDto = Omit<Cliente, "id">;

// Tipo para actualizar un cliente, permitiendo que los campos sean opcionales
export type actualizarClienteDto = Partial<Cliente>;
