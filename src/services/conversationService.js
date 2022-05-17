import httpClient from 'httpClient';

class ConversationService {
  getConversations() {
    return httpClient.get('/match_conversations');
  }
}

export default new ConversationService();
