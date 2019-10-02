import React from "react";
import countWords from "../../utils/countWords";
import WordCounterError from "../WordCounterError";
import WordCounterResult from "../WordCounterResult";
import WordCounterForm from "../WordCounterForm";
import styles from "./WordCounter.module.scss";

export default class WordCounter extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.defaultErrorMsg =
      "Something went wrong. Please refresh and try again.";

    this.state = {
      text: "",
      count: 0,
      error: ""
    };
  }

  handleChange(text) {
    // Reset the count if the user deletes all of the text in the form.
    const count = text ? this.state.count : 0;

    // Reset the blank-text error if the user has started typing something.
    const error = text ? "" : this.state.error;

    this.setState({ text, count, error });
  }

  handleSubmit() {
    try {
      const text = this.state.text;
      const count = countWords(text);
      this.setState({ count });
    } catch (error) {
      this.setState({ error: error.message || this.defaultErrorMsg });
    }
  }

  renderError() {
    if (this.state.error) {
      return <WordCounterError error={this.state.error} />;
    }
  }

  render() {
    return (
      <div className={styles.wordCounter}>
        <div className={styles.title}>🌟 Magic Word Counter 🌟</div>
        <div className={styles.subhead}>
          Type some words and I'll count them for you!
        </div>
        {this.renderError()}
        <WordCounterResult count={this.state.count} />
        <WordCounterForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
