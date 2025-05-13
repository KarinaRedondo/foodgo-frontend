export const ESTADOS_PEDIDO = {
    PENDIENTE: "PENDIENTE",
    EN_PREPARACION: "EN_PREPARACION",
    LISTO: "LISTO",
    EN_REPARTO: "EN_REPARTO",
    ENTREGADO: "ENTREGADO",
    CANCELADO: "CANCELADO",
  } as const;
  
  export type EstadoPedido = typeof ESTADOS_PEDIDO[keyof typeof ESTADOS_PEDIDO];
  