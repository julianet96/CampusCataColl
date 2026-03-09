import { api } from 'src/boot/axios';
import type { inscriptionStape } from 'src/entity/inscriptions';

export interface CreateInscriptionPayload {
  steps: inscriptionStape[];
  campusTypeId: string;
  totalAmount: number;
  currency?: string;
  stripePaymentIntentId: string;
}

export interface Inscription {
  _id: string;
  steps: inscriptionStape[];
  campusType: string;
  totalAmount: number;
  currency: string;
  createdAt: string;
}

export class InscriptionApi {
  static serviceUrl = '/inscriptions';

  static async create(payload: CreateInscriptionPayload): Promise<Inscription> {
    const response = await api.post(this.serviceUrl, payload);
    return response.data?.data;
  }
}

