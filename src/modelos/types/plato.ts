export interface Plato {
    id: number;                      // ID del plato
    nombre: string;                  // Nombre del plato
    descripcion: string;             // Descripción del plato
    precio: string;                  // Precio del plato (tipo string para manejar decimales)
    categoria?: string;              // Categoría del plato (opcional)
    disponible: boolean;             // Disponibilidad del plato
    restaurante: number;             // ID del restaurante al que pertenece
}

// Tipo para crear un nuevo Plato, omitiendo el campo 'id'
export type crearPlatoDto = Omit<Plato, "id">;

// Tipo para actualizar un Plato, permitiendo que cualquier campo sea opcional
export type actualizarPlatoDto = Partial<Plato>;
