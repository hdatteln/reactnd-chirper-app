import { SET_AUTHED_USER } from '../actions/authedUsers';

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return  {
        ...state,
        ...action.id
      };
    default:
      return state;

  }
}