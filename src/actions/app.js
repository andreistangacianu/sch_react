import { CREATE_SESSION, UPDATE_DRAFT_SURVEY_STATE } from "./actionTypes";

export const createSession = token => {
  // persist the token
  if (token) {
    localStorage.setItem("accessToken", token);
  }

  return {
    type: CREATE_SESSION,
    token
  };
};

export const updateDraftSurvey = survey => {
  return {
    type: UPDATE_DRAFT_SURVEY_STATE,
    survey
  };
};
