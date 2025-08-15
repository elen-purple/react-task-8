import { StatisticsSection } from "./StatisticsSection/StatisticsSection";
import { Component } from "react";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
import { Header } from "./Header/Header";
import { Main } from "./AppStyled";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    isDark: false,
  };

  addPoint = (e) => {
    if (e.target.id === "good") {
      this.setState((prevStat) => {
        return { good: prevStat.good + 1 };
      });
    } else if (e.target.id === "neutral") {
      this.setState((prevStat) => {
        return { neutral: prevStat.neutral + 1 };
      });
    } else if (e.target.id === "bad") {
      this.setState((prevStat) => {
        return { bad: prevStat.bad + 1 };
      });
    }
  };

  changeTheme = () => {
    this.setState((prevStat) => {
      return { isDark: prevStat.isDark ? false : true };
    });
  };

  render() {
    return (
      <Main $isDark={this.state.isDark}>
        <GlobalStyles />
        <Header isDark={this.state.isDark} onChange={this.changeTheme} />
        <StatisticsSection
          isDark={this.state.isDark}
          stats={this.state}
          onIncrease={this.addPoint}
        />
      </Main>
    );
  }
}

export default App;
