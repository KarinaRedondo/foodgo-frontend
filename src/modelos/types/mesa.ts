export interface Mesa {
    id: number;                      // ID de la mesa
    numero: string;                  // Número de la mesa
    capacidad: number;               // Capacidad de la mesa
    restaurante: number;             // ID del restaurante al que pertenece la mesa
}

// Tipo para crear una nueva Mesa, omitiendo el campo 'id'
export type crearMesaDto = Omit<Mesa, "id">;

// Tipo para actualizar una Mesa, permitiendo que cualquier campo sea opcional
export type actualizarMesaDto = Partial<Mesa>;
