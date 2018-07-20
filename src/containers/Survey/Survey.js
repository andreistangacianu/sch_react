import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Survey.css";
import NewSurvey from "./NewSurvey";
import { updateDraftSurvey } from "../../actions/app";

const mapStateToProps = state => {
  return {
    authToken: state.authToken,
    survey: state.survey
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDraftSurveyUpdate: survey => {
      dispatch(updateDraftSurvey(survey));
    }
  };
};

const style = {
  marginRight: 20,
  questionRow: {
    flex: 1,
    paddingLeft: "20px"
  }
};

class SurveyContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreating: false
    };
  }

  render() {
    const { survey } = this.props;

    return (
      <div>
        {/* SHOW A LIST OF ALL SURVEYS? MAybe */}
        {survey && Object.keys(survey).length ? (
          <NewSurvey />
        ) : (
          <div onClick={this.handleNewSurvey}> New Survey</div>
        )}
      </div>
    );
  }

  handleNewSurvey = () => {
    const { onDraftSurveyUpdate, authToken } = this.props;
    // 1. SAVE TO LOCAL STORAGE

    onDraftSurveyUpdate({
      id: "newSurvey",
      status: "unsaved_draft"
    });
  };
}

const Survey = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SurveyContainer)
);
export default Survey;
