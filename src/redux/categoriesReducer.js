//selectors
export const getCategoryTitle = (state, value) => {
  const category = state.categories.find((category) => category.value == value);
  return category.title;
};

// action creators
const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default categoriesReducer;
