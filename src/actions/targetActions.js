import { createThunk } from '@rootstrap/redux-tools';
import targetService from 'services/targetService';
import parseError from 'utils/parseError';

export const createTarget = createThunk('CREATE_TARGET', async target => {
  try {
    const { targetTitle, latitude, longitude, areaLenght, topic } = target;

    const { data } = await targetService.createTarget({
      title: targetTitle,
      lat: latitude,
      lng: longitude,
      radius: Number(areaLenght),
      topic_id: topic.id,
    });

    return data;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const { success: createTargetSuccess } = createTarget;