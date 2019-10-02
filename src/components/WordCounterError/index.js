import React from "react";
import styles from "./WordCounterError.module.scss";

const WordCounterError = ({ error }) => (
  <div className={styles.wordCounterError}>{error}</div>
);

export default WordCounterError;
