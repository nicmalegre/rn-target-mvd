import { useSelector } from 'react-redux';

const useTopics = () =>
  useSelector(({ topics }) => ({
    topics: topics?.topics ?? [],
  }));

export default useTopics;
