import axios from 'axios';
import {
  UNIVERSITY_LIST_REQUEST,
  UNIVERSITY_LIST_SUCCESS,
  UNIVERSITY_LIST_FAIL,
  UNIVERSITY_DETAILS_REQUEST,
  UNIVERSITY_DETAILS_SUCCESS,
  UNIVERSITY_DETAILS_FAIL,
} from '../constants/universityConstants';

export const listUniversity = () => async (dispatch) => {
  try {
    dispatch({ type: UNIVERSITY_LIST_REQUEST });

    const { data } = await axios.get('/api/university');

    dispatch({
      type: UNIVERSITY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UNIVERSITY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listUniversityDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: UNIVERSITY_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/university/${id}`);

    dispatch({
      type: UNIVERSITY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UNIVERSITY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
