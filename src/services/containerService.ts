import { Container } from 'typedi';
import { AuthApi } from 'src/api/AuthApi';



export const getAuthApi = () => {
  return Container.get<AuthApi>(AuthApi)
}
