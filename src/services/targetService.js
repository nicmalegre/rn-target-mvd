import httpClient from 'httpClient';

class TargetService {
  getTargets() {
    return httpClient.get('/targets');
  }

  createTarget(target) {
    return httpClient.post('/targets', { target });
  }

  deleteTarget(id) {
    return httpClient.delete(`/targets/${id}/`);
  }
}

export default new TargetService();
