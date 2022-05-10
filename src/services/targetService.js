import httpClient from 'httpClient';

class TargetService {
  createTarget(target) {
    return httpClient.post('/targets', { target });
  }
}

export default new TargetService();
