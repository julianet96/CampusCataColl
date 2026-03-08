import { api } from 'src/boot/axios';
import { inscriptionData, inscriptionStape } from 'src/entity/inscriptions';

type FieldType = 'STRING' | 'NUMBER' | 'SELECT';

export interface RegistrationField extends inscriptionData {
  type: FieldType;
}

export interface RegistrationStep extends inscriptionStape {
  inscriptionData: RegistrationField[];
}

export interface InscriptionConfig {
  steps: RegistrationStep[];
  updatedAt?: string;
}

export class InscriptionConfigApi {
  static serviceUrl = '/inscription-config';

  /**
   * Obtiene la configuración actual (steps) desde el backend.
   * GET /api/inscription-config
   */
  static getConfig(): Promise<InscriptionConfig> {
    return new Promise<InscriptionConfig>((resolve, reject) => {
      api
        .get(this.serviceUrl)
        .then((response) => {
          const data = response.data?.data;
          if (data && Array.isArray(data.steps)) {
            resolve({
              steps: data.steps,
              updatedAt: data.updatedAt,
            });
          } else {
            // Si no hay documento aún, devolvemos estructura vacía
            resolve( {} as InscriptionConfig);
          }
        })
        .catch((error) => {
          reject({ error: error.message, data: null });
        });
    });
  }

  /**
   * Guarda la configuración sobrescribiendo la existente.
   * POST /api/inscription-config
   */
  static saveConfig(steps: RegistrationStep[]): Promise<InscriptionConfig> {
    return new Promise<InscriptionConfig>((resolve, reject) => {
      api
        .post(this.serviceUrl, { steps })
        .then((response) => {
          const data = response.data?.data;
          if (data && Array.isArray(data.steps)) {
            resolve({
              steps: data.steps,
              updatedAt: data.updatedAt,
            });
          } else {
            reject({ error: 'Respuesta inesperada del servidor', data: null });
          }
        })
        .catch((error) => {
          reject({ error: error.message, data: null });
        });
    });
  }
}