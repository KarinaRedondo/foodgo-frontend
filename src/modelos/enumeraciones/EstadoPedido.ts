export const ESTADOS_PEDIDO = {
    PENDIENTE: "PENDIENTE",
    EN_PREPARACION: "EN_PREPARACION",
    LISTO: "LISTO",
    ENVIADO: "ENVIADO",
    CANCELADO: "CANCELADO",
  } as const;
  
  export type EstadoPedido = typeof ESTADOS_PEDIDO[keyof typeof ESTADOS_PEDIDO];
  