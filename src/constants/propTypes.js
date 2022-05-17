import { shape, number, string } from 'prop-types';

const AVATAR = shape({
  originalUrl: string,
  normalUrl: string,
  smallThumb_url: string,
});

const USER = shape({
  id: number.isRequired,
  fullNname: string,
  avatar: AVATAR.isRequired,
});

export const MATCH = shape({
  matchId: number.isRequired,
  topicIcon: string.isRequired,
  lastMessage: string,
  unreadMessages: number,
  user: USER.isRequired,
});
