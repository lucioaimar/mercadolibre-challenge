export interface Purchase {
  id_compra: number;
  titulo: string;
  precio: Price;
  cantidad: number;
  fecha: Date;
  imagen: string;
  vendedor: Seller;
  id_transaccion: number;
  id_envio: number;
}

export interface Price {
  total: number;
  moneda: string;
}

export interface Seller {
  id: number;
  nickname: string;
}

export interface Payment {
  id_transaccion: number;
  estado: PaymentState;
}

export interface Shipment {
  id_envio: number;
  estado: ShipmentState;
}

//I use these types because I find it better than to use typescript enums
export type PaymentState = 'realizada' | 'rechazada' | 'cancelada';

export type ShipmentState = 'entregado' | 'cancelado';
