import { useSelector } from 'react-redux';

const useTargets = () =>
  useSelector(({ targets }) => ({
    targets: targets?.targets ?? [],
  }));

export default useTargets;
