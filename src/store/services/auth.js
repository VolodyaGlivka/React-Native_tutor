import { ServicesConfig } from './config';
import { DataService } from './dataService';

export default class AuthService {
  static async loginUser(authData) {
    try {
      const userData = {
        login: authData.login,
        password: authData.password
      };
      const result = await DataService.sendRequest(ServicesConfig.authEndpoint, 'POST', userData);
      return result.error ? result.error : result.data;
    } catch (err) {
      return err;
    }
  }
}
