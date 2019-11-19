import * as constants from './actionType';
import { createContext } from 'react';

export const homeContext = createContext();

export const defaultState = {
  params: [],
  neuronsNode: {}
};

export default (defaultState, action) => {
  switch (action.type) {
    case constants.GET_PROPS_DATA:
      return Object.assign({}, defaultState, { params: action.data });
    case constants.RESET_HIDDEN_LAYERS:
      return Object.assign({}, defaultState, { params: action.data });
    case constants.RESET_NEURONS_NUM:
      return Object.assign({}, defaultState, { params: action.data });
    case constants.ADD_NEURONS_NODE:
      return Object.assign({}, defaultState, { neuronsNode: action.data });
    default:
      return defaultState;
  }
};
