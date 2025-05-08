export const RolEmpleado = {
    ADMINISTRADOR: "ADMINISTRADOR",
    COCINERO: "COCINERO",
    MESERO: "MESERO",
    REPARTIDOR: "REPARTIDOR"
  } as const;
  
  export type RolEmpleado = typeof RolEmpleado[keyof typeof RolEmpleado];
  
  
