import { api } from 'src/boot/axios';

export interface CampusType {
  _id?: string;
  name: string;
  price: number;
  startDate: string;
  endDate: string;
  active: boolean;
}

export class CampusTypeApi {
  static serviceUrl = '/campus-types';

  static async list(): Promise<CampusType[]> {
    const response = await api.get(this.serviceUrl);
    return response.data?.data ?? [];
  }

  static async get(id: string): Promise<CampusType> {
    const response = await api.get(`${this.serviceUrl}/${id}`);
    return response.data?.data;
  }

  static async create(payload: Omit<CampusType, '_id'>): Promise<CampusType> {
    const response = await api.post(this.serviceUrl, payload);
    return response.data?.data;
  }

  static async update(id: string, payload: Omit<CampusType, '_id'>): Promise<CampusType> {
    const response = await api.put(`${this.serviceUrl}/${id}`, payload);
    return response.data?.data;
  }

  static async remove(id: string): Promise<void> {
    await api.delete(`${this.serviceUrl}/${id}`);
  }
}

