import httpClient from 'httpClient';

class TopicService {
  getTopics() {
    return httpClient.get('/topics');
  }
}

export default new TopicService();
