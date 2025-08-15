import { Component } from "react";
import { Item, List, Span, Text } from "./StatisticsStyled";

export class Statistics extends Component {
  makesLayout = () => {
    return (
      <List $isDark={this.props.isDark}>
        <Item>
          <Text>
            Good: <Span>{this.props.good}</Span>
          </Text>
        </Item>
        <Item>
          <Text>
            Neutral: <Span>{this.props.neutral}</Span>
          </Text>
        </Item>
        <Item>
          <Text>
            Bad: <Span>{this.props.bad}</Span>
          </Text>
        </Item>
        <Item>
          <Text>
            Total: <Span>{this.props.total}</Span>
          </Text>
        </Item>
        <Item>
          <Text>
            Positive feedback: <Span>{this.props.positivePercentage}%</Span>
          </Text>
        </Item>
      </List>
    );
  };

  render() {
    return <>{this.makesLayout()}</>;
  }
}
