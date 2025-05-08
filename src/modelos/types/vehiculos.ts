export interface Vehiculo {
    id: number;                        // ID del vehículo
    placa: string;                     // Placa del vehículo
    marca?: string;                    // Marca del vehículo (opcional)
    modelo?: string;                   // Modelo del vehículo (opcional)
    tecnomecanica: boolean;            // Revisión técnica vigente (true o false)
    seguro: boolean;                   // Seguro vigente (true o false)
    repartidor: number;                // ID del repartidor asignado
}

// Tipo para crear un nuevo vehículo, omitiendo el campo 'id'
export type crearVehiculoDto = Omit<Vehiculo, "id">;

// Tipo para actualizar un vehículo, permitiendo que cualquier campo sea opcional
export type actualizarVehiculoDto = Partial<Vehiculo>;
