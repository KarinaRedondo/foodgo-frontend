import type { TipoUsuario } from "../enumeraciones/TipoUsuario";

// Representa la interfaz base para un Usuario
export interface Usuario {
    id: number,
    nombre: string;                // Nombre del usuario
    apellido: string;              // Apellido del usuario
    correo: string;
    contrasena:string;                // Correo electrónico del usuario
    telefono: string;              // Teléfono del usuario
    direccionCalle: string;        // Calle de la dirección del usuario
    direccionNumero: string;       // Número de la dirección del usuario
    direccionBarrio: string;       // Barrio de la dirección del usuario
    tipoUsuario: TipoUsuario;      // Rol o tipo de usuario (Administrador, Cliente, etc.)
}

// Tipo para crear un nuevo Usuario, omitiendo el campo 'id' (presumiblemente generado por el sistema)
export type crearUsuarioDto = Omit<Usuario, "id">;

// Tipo para actualizar un Usuario, permitiendo que cualquier campo sea opcional
export type actualizarUsuarioDto = Partial<Usuario>;
