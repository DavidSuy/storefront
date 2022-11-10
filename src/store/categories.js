import axios from 'axios';

const initialState = {
  activeCategory: '',
  listCategories: [],
};

// action
export const changeActiveCategory = (payload) => {
  return {
    type: 'CHANGE_ACTIVE_CATEGORY',
    payload: payload,
  };
};

export const getCategoriesApi = () => async (dispatch) => {
  let res = await axios.get(
    'https://api-js401.herokuapp.com/api/v1/categories'
  );
  dispatch(getInitialCategories(res.data.results));
};

export const getInitialCategories = (payload) => {
  return {
    type: 'GET_INITIAL_CATEGORIES',
    payload,
  };
};

//reducer
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_CATEGORY':
      state.activeCategory = action.payload;
      return {
        ...state,
      };
    case 'GET_INITIAL_CATEGORIES':
      return {
        ...state,
        listCategories: [...action.payload],
      };
    default:
      return { ...state };
  }
};

export default categoryReducer;
