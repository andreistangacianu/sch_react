import React, { Component } from "react";
import { connect } from "react-redux";
import { createSession } from "../../actions/app";
import Link from "../../components/Link/Link";
import List from "../../components/List/List";
import ListItem from "../../components/ListItem/ListItem";
import ListSubHeader from "../../components/ListSubHeader/ListSubHeader";
import "./Dashboard.css";

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};

class DashboardContainer extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard__container">
        <div className="results_container">
          <div className="results__latest__container_left">
            <List>
              <ListSubHeader>Latest results</ListSubHeader>
              <ListItem rightItem={<a href="testaroo">view result</a>}>
                testerino did something
              </ListItem>
              <ListItem rightItem={<a href="testaroo">view result</a>}>
                testerino did something
              </ListItem>
              <ListItem rightItem={<a href="testaroo">view result</a>}>
                testerino did something
              </ListItem>
            </List>
          </div>
          <div className="results__latest__container_right">
            <List>
              <ListSubHeader>Latest results</ListSubHeader>
              <ListItem rightItem={<a href="testaroo">view result</a>}>
                testerino did something
              </ListItem>
              <ListItem rightItem={<a href="testaroo">view result</a>}>
                testerino did something
              </ListItem>
              <ListItem rightItem={<a href="testaroo">view result</a>}>
                testerino did something
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    );
  }
  handleChange = () => {};
}

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(
  DashboardContainer
);
export default Dashboard;
