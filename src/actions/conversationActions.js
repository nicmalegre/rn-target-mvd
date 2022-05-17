import { createThunk } from '@rootstrap/redux-tools';
import conversationService from 'services/conversationService';
import parseError from 'utils/parseError';

export const getConversations = createThunk('GET_CONVERSATIONS', async () => {
  try {
    const { data: matches } = await conversationService.getConversations();

    return matches;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const { success: getConversationsSuccess } = getConversations;
