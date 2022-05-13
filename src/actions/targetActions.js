import { createThunk } from '@rootstrap/redux-tools';
import targetService from 'services/targetService';
import parseError from 'utils/parseError';

export const getTargets = createThunk('GET_TARGETS', async () => {
  try {
    const {
      data: { targets },
    } = await targetService.getTargets();

    return targets;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const createTarget = createThunk('CREATE_TARGET', async target => {
  try {
    const { targetTitle, latitude, longitude, areaLength, topic } = target;

    const { data } = await targetService.createTarget({
      title: targetTitle,
      lat: latitude,
      lng: longitude,
      radius: Number(areaLength),
      topic_id: topic.id,
    });

    return data;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const { success: getTargetsSuccess } = getTargets;
export const { success: createTargetSuccess } = createTarget;
