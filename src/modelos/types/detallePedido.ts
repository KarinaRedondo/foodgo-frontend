// Representación de un detalle de pedido
export interface DetallePedido {
  id: number;               // ID del detalle
  pedido: number;           // ID del pedido al que pertenece
  plato: number;            // ID del plato solicitado
  cantidad: number;         // Cantidad del plato
  precioUnitario: number;   // Precio unitario al momento de ordenar
}

// DTO para crear un nuevo detalle (sin el campo 'id')
export type CrearDetallePedidoDto = Omit<DetallePedido, 'id'>;

// DTO para actualizar un detalle (todos los campos opcionales)
export type ActualizarDetallePedidoDto = Partial<DetallePedido>;
