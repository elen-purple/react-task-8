import { Component } from "react";
import { Text } from "./NotificationStyled";
export class Notification extends Component {
  render() {
    return <Text $isDark={this.props.isDark}>{this.props.text}</Text>;
  }
}
