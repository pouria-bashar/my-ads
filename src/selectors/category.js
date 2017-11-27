import { createSelector } from 'reselect';
import { get } from 'lodash';

const getAllCategories = (state) => {
  return get(state, 'categories', []);
};

const getLoading = (state) => {
  return get(state, 'loading', false);
};

export const getCategories = createSelector([getAllCategories, getLoading],
  (categories, loading) => {
    const categoryOptions = categories.map(cat => ({ value: cat.id, label: cat.name }));
    return { categoryOptions, loading };
  },
);
