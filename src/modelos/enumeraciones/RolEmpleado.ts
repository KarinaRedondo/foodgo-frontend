export const RolEmpleado = {
    COCINERO: "COCINERO",
    MESERO: "MESERO",
    REPARTIDOR: "REPARTIDOR"
  } as const;
  
  export type RolEmpleado = typeof RolEmpleado[keyof typeof RolEmpleado];
  
  
