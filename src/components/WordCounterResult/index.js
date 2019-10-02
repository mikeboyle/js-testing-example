import React from "react";
import styles from "./WordCounterResult.module.scss";

const WordCounterResult = ({ count }) => {
  const wordOrWords = count === 1 ? "word" : "words";

  return (
    <>
      Total length: <span className={styles.count}>{count}</span> {wordOrWords}
    </>
  );
};

export default WordCounterResult;
