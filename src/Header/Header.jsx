import { Component } from "react";
import { Container } from "../components/Container/ContainerStyled";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { Button, Head } from "./HeaderStyled";

export class Header extends Component {
  render() {
    return (
      <Head $isDark={this.props.isDark}>
        <Container>
          <Button onClick={this.props.onChange} type="button">
            {this.props.isDark ? (
              <IoMdMoon size="24px" fill="#e1e7e8ff" />
            ) : (
              <IoMdSunny size="24px" fill="#f3e33bff" />
            )}
          </Button>
        </Container>
      </Head>
    );
  }
}
