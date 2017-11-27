import { createSelector } from 'reselect';
import { get } from 'lodash';

const getAllCategories = (state) => {
  return get(state, 'data.', []);
};

export const getS3Data = createSelector(getAllCategories,
  (categories, loading) => {
    console.log(categories);
    return {

    }
  },
);
