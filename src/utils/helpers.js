import queryString from 'query-string';

export const applyQueryParams = (url, params) => {
  const queryParams = queryString.stringify(params);
  return `${url}?${queryParams}`;
};

export const findTopicById = (topicId, topics) => {
  if (!topicId || !Array.isArray(topics)) return {};

  const { topic } = topics?.find(({ topic: { id } }) => id === topicId) || {};
  return topic;
};
