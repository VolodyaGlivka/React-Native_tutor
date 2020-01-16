import { ServicesConfig } from './config';

export class DataService {
  static authToken = null;

  static prepareOptions(method, body) {
    let requestOptions = {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${DataService.authToken}`
      },
      // body: JSON.stringify(body)
    };
    return requestOptions;
  }

  static async sendRequest(action, method, body, noReturn) {
    let data = null;
    let error = null;
    try {
      const requestOptions = DataService.prepareOptions(method, body);
      const response = await fetch(`${ServicesConfig.baseURL}${action}`, requestOptions);
      if (noReturn) {
        if (!response.ok) {
          error = response.statusText;
        }
      } else {
        const json = await response.json();
        data = json === null ? [] : json;
      }
    } catch (err) {
      error = err;
    }

    return { data, error };
  }
}
