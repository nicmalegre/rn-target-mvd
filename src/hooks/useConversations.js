import { useSelector } from 'react-redux';

const useConversations = () =>
  useSelector(({ conversations }) => ({
    matches: conversations?.conversations?.matches ?? {},
  }));

export default useConversations;
