import { Component } from "react";
import { Sect, Title } from "./SectionStyled";
import { Container } from "../Container/ContainerStyled";

export class Section extends Component {
  render() {
    return (
      <Sect $isDark={this.props.isDark}>
        <Container>
          <Title>{this.props.title}</Title>
          {this.props.children}
        </Container>
      </Sect>
    );
  }
}
