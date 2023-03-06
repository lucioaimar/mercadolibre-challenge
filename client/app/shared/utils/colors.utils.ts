import { BadgeColors } from '../components/badge/badge.component';
import { PaymentState, ShipmentState } from './../../features/profile/interfaces/purchase.interface';
export const PaymentColorMap: Map<PaymentState, BadgeColors> = new Map([
  ['realizada', 'green'],
  ['rechazada', 'red'],
  ['cancelada', 'yellow']
]);

export const ShipmentColorMap: Map<ShipmentState, BadgeColors> = new Map([
  ['entregado', 'green'],
  ['cancelado', 'red'],
]);
