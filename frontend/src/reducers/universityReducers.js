import {
  UNIVERSITY_LIST_REQUEST,
  UNIVERSITY_LIST_SUCCESS,
  UNIVERSITY_LIST_FAIL,
  UNIVERSITY_DETAILS_REQUEST,
  UNIVERSITY_DETAILS_SUCCESS,
  UNIVERSITY_DETAILS_FAIL,
} from '../constants/universityConstants';

export const universityListReducer = (state = { universities: [] }, action) => {
  switch (action.type) {
    case UNIVERSITY_LIST_REQUEST:
      return { loading: true, universities: [] };
    case UNIVERSITY_LIST_SUCCESS:
      return { loading: false, universities: action.payload };
    case UNIVERSITY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const universityDetailsReducer = (
  state = { university: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case UNIVERSITY_DETAILS_REQUEST:
      return { loading: true, ...state };
    case UNIVERSITY_DETAILS_SUCCESS:
      return { loading: false, university: action.payload };
    case UNIVERSITY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
