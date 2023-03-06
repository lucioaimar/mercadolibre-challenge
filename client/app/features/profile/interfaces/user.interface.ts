export interface User {
  id_usuario: number;
  nombre:     string;
  apellido:   string;
  nivel:      string;
  imagen:     string;
}

export interface UserRestriction {
  tipo: 'warning' | 'error';
  mensaje: string;
}

export interface Level {
  id_nivel: string;
  descripcion:   string;
}
