import { api } from 'src/boot/axios';
import { auth, authResponse } from 'src/entity/user';

import { Service } from 'typedi';

export interface TokenRequest {
  token: string;
}


export class AuthApi {
  static serviceUrl = '/auth';

  static authenticate(auth:auth): Promise<string> {
    console.log(auth)
    return new Promise<string>((resolve, reject) => {
      api
        .post(`${this.serviceUrl}/login`, auth)
        .then((response) => {
          if (response.data) {
            resolve(response.data.token);
          } else {
            reject();
          }
        })
        .catch((error) => {
          if (error.response?.status === 307) {
            reject({ error: '', token: error.response.data.id_token });
          } else {
            reject({ error: error.message, token: null });
          }
        });
    });
  }
}