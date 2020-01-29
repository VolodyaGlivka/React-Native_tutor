import { DataService } from '../store/services/dataService';

const setAuthToken = token => {
  if (token) {
    // Apply to every request
    DataService.authToken = token;
  } else {
    // Delete auth header
    DataService.authToken = null;
  }
};

export default setAuthToken;
