import React from "react";
import { render, fireEvent } from "@testing-library/react";
import WordCounterForm from "../index";

describe("<WordCounterForm />", () => {
  it("renders a form with a text field and submit button", () => {
    const { getByText, getByTestId } = render(<WordCounterForm />);
    /* Why does getByText fail?
     * Hint: https://testing-library.com/docs/dom-testing-library/api-queries
     */
    getByText("write something cool");
    getByTestId("wordCounterSubmit");
  });

  it("handles form submissons", () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<WordCounterForm onSubmit={mockOnSubmit} />);

    const submitButton = getByTestId("wordCounterSubmit");
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it("handles user input typed into the form", () => {
    /* Write your test here
     * Hint: https://testing-library.com/docs/dom-testing-library/api-events#fireevent-eventname
     */
  });
});
