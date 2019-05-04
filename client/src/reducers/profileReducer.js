import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  // UPDATE_PROFILE,
  GET_PROFILES,
  APPROVE_PROFILE
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  // case UPDATE_PROFILE:
  //   return {
  //     ...state,
  //     profile: payload,
  //     loading: false
  //   };
  switch (type) {
    case GET_PROFILE:
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      };
    case APPROVE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(profile => profile._id !== payload),
        loading: false
      };
    default:
      return state;
  }
}
