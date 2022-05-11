import httpClient from 'httpClient';

class TopicService {
  getTopics() {
    // FYI: 'data:null' is to avoid header error in GET request
    return httpClient.get('/topics', { data: null });
  }
}

export default new TopicService();
