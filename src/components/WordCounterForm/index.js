import React from "react";
import styles from "./WordCounterForm.module.scss";

export default class WordCounterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const text = e.target.value;
    this.props.onChange(text);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <div className={styles.wordCounterForm}>
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.handleChange}
            placeholder={"write something cool"}
          />
          <button value="submit">Submit</button>
        </form>
      </div>
    );
  }
}
