import { Component } from "react";
import { Button, Item, List } from "./FeedbackOptionsStyled";

export class FeedbackOptions extends Component {
  render() {
    return (
      <List $isDark={this.props.isDark} onClick={this.props.onIncrease}>
        <Item>
          <Button id="good">Good</Button>
        </Item>
        <Item>
          <Button id="neutral">Neutral</Button>
        </Item>
        <Item>
          <Button id="bad">Bad</Button>
        </Item>
      </List>
    );
  }
}
