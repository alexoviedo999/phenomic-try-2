//ducks file
import {strings} from '../metadata'

const SET_LANGUAGE = 'SET_LANGUAGE';

// Reducer
export default function reducer(state = "", action = {}) {
  switch (action.type) {
    // do reducer stuff
    case SET_LANGUAGE:
      return action.lan

    default: return state;
  }
}

// Action Creators
export function setLanguage(lan) {
  strings.setLanguage(lan);
  return {
    type: SET_LANGUAGE,
    lan
  };
}
