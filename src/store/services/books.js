import { ServicesConfig } from './config';
import { DataService } from './dataService';

export default class booksService {
  static async getBooksValue() {
    const result = await DataService.sendRequest(`${ServicesConfig.booksEndpoint}`, 'GET');
    return result;
  }

  static async getBooksData() {
    const result = await booksService.getBooksValue();
    if (result.error) throw new Error(result.error);
    return result.error ? result.error : result.data;
  }

  static async getSingleBookValue(bookId) {
    const result = await DataService.sendRequest(`${ServicesConfig.booksEndpoint}/${bookId}`, 'GET');
    return result;
  }

  static async getSingleBookData(bookId) {
    const result = await booksService.getSingleBookValue(bookId);
    if (result.error) throw new Error(result.error);
    return result.error ? result.error : result.data;
  }
}
