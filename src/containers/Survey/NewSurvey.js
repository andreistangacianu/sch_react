import React, { Component } from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ContentAdd from "material-ui/svg-icons/content/add";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import { updateDraftSurvey } from "../../actions/app";
import RestRequest from "../../utils/fetch";

const mapStateToProps = state => {
  return {
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
  questionRow: {
    flex: 1,
    paddingLeft: "20px"
  }
};

class NewSurveyContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: ["Salamy?"]
    };
  }

  render() {
    const { survey } = this.props;
    return (
      <div className="survey__form">
        <div className="survey__form_header">
          <div
            className="survey__form_row survey__form_name"
            style={style.headerContainer}
          >
            {/* <div className="survey__form_field_name">Name</div> */}
            <TextField
              hintText="Your Survey's name"
              floatingLabelText="Name"
              onChange={this.handleSurveyNameChange}
              value={survey.name}
            />
          </div>
          <div
            className="survey__form_row survey__form_instructions"
            style={style.headerContainer}
          >
            {/* <div className="survey__form_field_name">Instructions</div> */}
            <TextField
              hintText="MultiLine with rows: 2 and rowsMax: 4"
              multiLine={true}
              rows={2}
              rowsMax={4}
              // value={survey.instructions}
            />
          </div>
        </div>
        <div className="survey__form_row survey__questions">
          {/* <div className="survey__form_field_name">Questions</div> */}
          {this.renderQuestions()}
          <div
            className="survey__add_question"
            onClick={this.addQuestionToSurvey}
          >
            <FloatingActionButton mini={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
        </div>
        <div className="survey__form_row survey__form_notes">
          <div className="survey__form_field_notes">Notes</div>
          <TextField
            hintText="Notes (optional)"
            multiLine={true}
            rows={2}
            rowsMax={4}
          />
        </div>
        <div className="survey__form_row_actions">
          <FlatButton label="Cancel" onClick={this.handleCancel} />
          <FlatButton
            label="Save"
            onClick={this.handleSave}
            backgroundColor="#049fd9"
          />
        </div>
      </div>
    );
  }

  handleCancel = () => {
    const { onDraftSurveyUpdate } = this.props;
    onDraftSurveyUpdate({});
  };

  handleSave = () => {
    // // 2. Dispatch action to save the new Survey
    // RestRequest.post(
    //   "http://localhost:8080/api/v1/survey",
    //   {
    //     name: "newSurvey"
    //   },
    //   {
    //     "x-access-token": authToken
    //   },
    //   response => {
    //     if (response.success && response.message) {
    //       const survey = response.message;
    //       // Update the survey with the ID from the DB
    //       onDraftSurveyUpdate({
    //         id: survey.slug,
    //         status: "draft"
    //       });
    //     }
    //   },
    //   () => {}
    // );
    // 3. On save - delete the in progress survey
  };

  handleSurveyNameChange = event => {
    const { survey, onDraftSurveyUpdate } = this.props;

    // update the survey's name
    survey.name = event.target.value;
    onDraftSurveyUpdate(survey);
  };

  renderQuestions = () => {
    const { questions } = this.state;

    return questions.map(question => {
      if (question === "new-value") {
        return (
          <div className="survey__question">
            <TextField
              hintText="Please enter your question"
              style={style.questionRow}
            />
          </div>
        );
      }

      return (
        <div className="survey__question">
          <TextField defaultValue={question} style={style.questionRow} />
        </div>
      );
    });
  };

  addQuestionToSurvey = () => {
    const { questions } = this.state;
    console.log("adding");
    this.setState({
      questions: [...questions, "new-value"]
    });
  };
}

const NewSurvey = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewSurveyContainer)
);
export default NewSurvey;
