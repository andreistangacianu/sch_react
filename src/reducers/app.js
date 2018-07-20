import {
  CREATE_SESSION,
  UPDATE_DRAFT_SURVEY_STATE
} from "../actions/actionTypes";
import { combineReducers } from "redux";

const defaultState = {
  authToken: localStorage.getItem("accessToken")
};

const defaultSurveyState = {};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_SESSION:
      return {
        ...state,
        ...action.token
      };
    default:
      return state;
  }
};

const survey = (state = defaultSurveyState, action) => {
  switch (action.type) {
    case UPDATE_DRAFT_SURVEY_STATE: {
      return {
        ...state,
        ...action.survey
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app,
  survey
});

export default rootReducer;
