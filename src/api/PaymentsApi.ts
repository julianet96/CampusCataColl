import { api } from 'src/boot/axios';

export interface CreatePaymentIntentPayload {
  amount: number;
  currency?: string;
  description?: string;
}

export interface PaymentIntentResponse {
  clientSecret: string;
}

export class PaymentsApi {
  static serviceUrl = '/payments';

  static async createPaymentIntent(
    payload: CreatePaymentIntentPayload,
  ): Promise<PaymentIntentResponse> {
    const response = await api.post(`${this.serviceUrl}/payment-intent`, payload);
    return response.data?.data;
  }
}

