export const TipoUsuario = {
    CLIENTE: 'CLIENTE',
    EMPLEADO: 'EMPLEADO',
    ADMIN: 'ADMIN'
  } as const;
  
  export type TipoUsuario = typeof TipoUsuario[keyof typeof TipoUsuario];
  
