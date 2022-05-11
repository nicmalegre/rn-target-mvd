import httpClient from 'httpClient';

class TargetService {
  getTargets() {
    return httpClient.get('/targets');
  }

  createTarget(target) {
    return httpClient.post('/targets', { target });
  }
}

export default new TargetService();
