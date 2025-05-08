import type { EstadoReserva } from "../enumeraciones/EstadoReserva";

export interface Reserva {
    id: number;                       // ID de la reserva
    cliente: number;                  // ID del cliente que realiza la reserva
    restaurante: number;              // ID del restaurante en el que se realiza la reserva
    mesa?: number;                    // ID de la mesa asignada (opcional)
    fechaHora: string;                // Fecha y hora de la reserva (formato ISO 'YYYY-MM-DDTHH:mm:ss')
    numPersonas: number;              // Número de personas para la reserva
    estadoReserva: EstadoReserva;     // Estado de la reserva (PENDIENTE, CONFIRMADA, CANCELADA)
    creadoEn: string;                 // Timestamp de creación de la reserva (formato ISO)
}

// Tipo para crear una nueva reserva, omitiendo el campo 'id'
export type crearReservaDto = Omit<Reserva, "id">;

// Tipo para actualizar una reserva, permitiendo que cualquier campo sea opcional
export type actualizarReservaDto = Partial<Reserva>;
