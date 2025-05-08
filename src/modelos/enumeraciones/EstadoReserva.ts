export const ESTADOS_RESERVA = {
    PENDIENTE: 'PENDIENTE',
    CONFIRMADA: 'CONFIRMADA',
    CANCELADA: 'CANCELADA'
  } as const;
  
  export type EstadoReserva = typeof ESTADOS_RESERVA[keyof typeof ESTADOS_RESERVA];
  
