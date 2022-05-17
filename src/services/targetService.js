import httpClient from 'httpClient';

class TargetService {
  createTarget(target) {
    return httpClient.post('/targets', { target });
  }

  deleteTarget(id) {
    return httpClient.delete(`/targets/${id}/`);
  }
}

export default new TargetService();
