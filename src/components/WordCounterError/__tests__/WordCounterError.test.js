import React from "react";
import { render } from "@testing-library/react";
import WordCounterError from "../index";

describe("<WordCounterError />", () => {
  it("renders error text", () => {
    const errorMsg = "Oh noes! You wrote negative words!? How?!";
    const { getByText } = render(<WordCounterError error={errorMsg} />);
    getByText(errorMsg);
  });
});
