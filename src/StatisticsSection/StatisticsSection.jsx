import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "../components/Section/Section";
import { Notification } from "../components/Notification/Notification";

export class StatisticsSection extends Component {
  render() {
    return (
      <>
        <Section isDark={this.props.isDark} title={"Please, leave feedback 📑"}>
          <FeedbackOptions
            isDark={this.props.isDark}
            onIncrease={this.props.onIncrease}
          />
        </Section>
        <Section isDark={this.props.isDark} title={"Statistics"}>
          {this.props.stats.good +
          this.props.stats.neutral +
          this.props.stats.bad ? (
            <Statistics
              isDark={this.props.isDark}
              good={this.props.stats.good}
              neutral={this.props.stats.neutral}
              bad={this.props.stats.bad}
              total={
                this.props.stats.good +
                this.props.stats.neutral +
                this.props.stats.bad
              }
              positivePercentage={
                this.props.stats.good +
                this.props.stats.neutral +
                this.props.stats.bad
                  ? Math.round(
                      (this.props.stats.good /
                        (this.props.stats.good +
                          this.props.stats.neutral +
                          this.props.stats.bad)) *
                        100
                    )
                  : 0
              }
            />
          ) : (
            <Notification
              isDark={this.props.isDark}
              text={"There aren't any feedbacks"}
            />
          )}
        </Section>
      </>
    );
  }
}
