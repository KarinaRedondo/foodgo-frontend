import type { Mesa } from "./mesa";
import type { Pedido } from "./pedido";
import type { Plato } from "./plato";
import type { Reserva } from "./reserva";

// Representa la interfaz para un Restaurante
export interface Restaurante {
    id: number;                   // ID del restaurante
    nombre: string;               // Nombre del restaurante
    direccionCalle: string;       // Dirección de la calle
    direccionNumero: string;      // Número de la dirección
    direccionBarrio: string;      // Barrio de la dirección
    telefono: string;             // Teléfono del restaurante
    capacidadMaxima: number;      // Capacidad máxima de personas
    administrador: number;        // ID del administrador (empleado con rol ADMINISTRADOR)
    mesas: Mesa[];                // Listado de mesas
    reservas: Reserva[];          // Listado de reservas
    platos: Plato[];              // Listado de platos en el menú
    pedidos: Pedido[];            // Listado de pedidos realizados
}

// Tipo para crear un nuevo Restaurante, omitiendo el campo 'id'
export type crearRestauranteDto = Omit<Restaurante, "id">;

// Tipo para actualizar un Restaurante, permitiendo que cualquier campo sea opcional
export type actualizarRestauranteDto = Partial<Restaurante>;
