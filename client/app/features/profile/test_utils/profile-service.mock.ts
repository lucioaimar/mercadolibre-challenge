import { PaginatedResponse } from 'client/app/shared/interfaces/pagination.interface';
import { of } from 'rxjs';
import { Payment, Purchase, Shipment } from '../interfaces/purchase.interface';
import { Level, User, UserRestriction } from '../interfaces/user.interface';

export const profileServiceMock = {
  getUser: () => of(PROFILE_MOCK),
  getLevel: () => of(LEVEL_MOCK),
  getUserRestrictions: () => of(USER_RESTRICTIONS_MOCK),
  getUserPurchases: () => of(PURCHASES_MOCK),
  getShipment: () => of(SHIPMENT_MOCK),
  getPayment: () => of(PAYMENT_MOCK),
  getPurchase: () => of(PURCHASE_MOCK),
};

export const PROFILE_MOCK: User = {
  id_usuario: 1,
  nombre: 'Mercadolibre',
  apellido: 'User',
  nivel: 'ORO',
  imagen:
    'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadolibre/180x180.png',
};

export const LEVEL_MOCK: Level = {
  id_nivel: 'ORO',
  descripcion: 'Nivel Oro - Mercadopuntos',
};

export const USER_RESTRICTIONS_MOCK: UserRestriction[] = [
  {
    tipo: 'warning',
    mensaje: 'Tu cuenta no ha sido verificada aún. Revisa tu mail',
  },
];

export const PURCHASE_MOCK: Purchase = {
  id_compra: 300200,
  titulo: 'Celular LG K40',
  precio: {
    total: 105000,
    moneda: 'ARS',
  },
  cantidad: 3,
  fecha: new Date(),
  imagen:
    'https://http2.mlstatic.com/D_NQ_NP_969645-MLA46877067884_072021-V.webp',
  vendedor: {
    id: 4010,
    nickname: 'FAROCUDR19',
  },
  id_transaccion: 7010200,
  id_envio: 1000010200,
};

export const SHIPMENT_MOCK: Shipment = {
  id_envio: 1000010200,
  estado: 'entregado',
};

export const PAYMENT_MOCK: Payment = {
  id_transaccion: 7010200,
  estado: 'realizada',
};

export const PURCHASES_MOCK: PaginatedResponse<Purchase> = {
  total: 10,
  offset: 0,
  limit: 5,
  data: [
    {
      id_compra: 300200,
      titulo: 'Celular LG K40',
      precio: {
        total: 105000,
        moneda: 'ARS',
      },
      cantidad: 3,
      fecha: new Date(),
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_969645-MLA46877067884_072021-V.webp',
      vendedor: {
        id: 4010,
        nickname: 'FAROCUDR19',
      },
      id_transaccion: 7010200,
      id_envio: 1000010200,
    },
    {
      id_compra: 300199,
      titulo: 'Apple iPhone 13 Pro Max 2565gb-incluye Cargador -1 Año Gtia.',
      precio: {
        total: 629999.99,
        moneda: 'ARS',
      },
      cantidad: 1,
      fecha: new Date(),
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_753104-MLA47778455981_102021-V.webp',
      vendedor: {
        id: 4009,
        nickname: 'ELECTROMIAMI123',
      },
      id_transaccion: 7010199,
      id_envio: 1000010199,
    },
    {
      id_compra: 300198,
      titulo: 'Celular Xiaomi Mi A1 Rojo Dual Sim 64 Gb 4 Gb Ram + Liberado',
      precio: {
        total: 45998,
        moneda: 'ARS',
      },
      cantidad: 2,
      fecha: new Date(),
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_774489-MLA49425273867_032022-V.webp',
      vendedor: {
        id: 4008,
        nickname: 'ABC_MAC',
      },
      id_transaccion: 7010198,
      id_envio: 1000010198,
    },
    {
      id_compra: 300197,
      titulo: 'Samsung Galaxy J7 Prime 32gb Celular Refabricado Liberado',
      precio: {
        total: 69999.99,
        moneda: 'ARS',
      },
      cantidad: 1,
      fecha: new Date(),
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_972544-MLA44403030842_122020-V.webp',
      vendedor: {
        id: 4007,
        nickname: 'AIR-VISION',
      },
      id_transaccion: 7010197,
      id_envio: 1000010197,
    },
    {
      id_compra: 300196,
      titulo: 'Celular Samsung Galaxy J7 Pro 32gb 3gb Ram Refabricado Rosa',
      precio: {
        total: 34999.89,
        moneda: 'ARS',
      },
      cantidad: 1,
      fecha: new Date(),
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_976643-MLA49667022507_042022-V.webp',
      vendedor: {
        id: 4007,
        nickname: 'AIR-VISION',
      },
      id_transaccion: 7010196,
      id_envio: 1000010196,
    },
  ],
};
