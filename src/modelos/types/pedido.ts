import type { EstadoPedido } from "../enumeraciones/EstadoPedido";
import type { DetallePedido } from "./detallePedido";


export interface Pedido {
    id: number;                        // ID del pedido
    cliente: number;                   // ID del cliente que hace el pedido
    restaurante: number;               // ID del restaurante
    mesero?: number;                   // ID del mesero (opcional)
    cocinero?: number;                 // ID del cocinero (opcional)
    repartidor?: number;               // ID del repartidor (opcional)
    montoTotal: number;                // Monto total del pedido
    costoEnvio: number;                // Costo del envío
    estadoPedido: EstadoPedido;        // Estado del pedido (PENDIENTE, EN_PREPARACION, etc.)
    horaCreacion: string;              // Fecha y hora de creación del pedido
    detalles: DetallePedido[];         // Detalles del pedido (platos y cantidades)
}

// Tipo para crear un nuevo pedido, omitiendo el campo 'id'
export type crearPedidoDto = Omit<Pedido, 'id'>;

// Tipo para actualizar un pedido, permitiendo que cualquier campo sea opcional
export type actualizarPedidoDto = Partial<Pedido>;
