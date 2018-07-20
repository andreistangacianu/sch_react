import React from "react";
import "./Landing.css";
import Button from "../../components/Button/Button";
import Paper from "material-ui/Paper";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const style = {
  height: 200,
  width: 200,
  margin: 20,
  textAlign: "center",
  display: "inline-block"
};

const Landing = props => (
  <div className="landing__main_container">
    <div className="landing__main_section">
      <div class="landing_row">
        <h1 class="landing__main_header">
          Some very important text and also longer there should be a better way!
        </h1>
      </div>
      <div class="landing_row">
        <div class="landing_row_content_med">
          Some less important text, but still important.
        </div>
      </div>
      <div class="landing_row action_buttons">
        <Button primary={true} size="x_large">
          See Plans and Pricing
        </Button>
        <Button secondary={true} size="x_large">
          Try for Free
        </Button>
      </div>
      <div class="landing_row landing_cards">
        <Card>
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="images/jsa-128.jpg"
          />
          <CardMedia
            overlay={
              <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
            }
          >
            <img src="images/nature-600-337.jpg" alt="" />
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
            pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque
            lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
        <Card>
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="images/jsa-128.jpg"
          />
          <CardMedia
            overlay={
              <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
            }
          >
            <img src="images/nature-600-337.jpg" alt="" />
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
            pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque
            lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
      </div>
      <div class="landing_uses">
        <Paper style={style} zDepth={3} rounded={false} />
        <Paper style={style} zDepth={3} rounded={false} />
        <Paper style={style} zDepth={3} rounded={false} />
        <Paper style={style} zDepth={3} rounded={false} />
        <Paper style={style} zDepth={3} rounded={false} />
      </div>
    </div>
  </div>
);
export default Landing;
