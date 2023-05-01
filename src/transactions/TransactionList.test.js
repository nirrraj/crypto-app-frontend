import React from "react";
import { render } from "@testing-library/react";
import Transactions from "./TransactionList";

it("renders without crashing", function() {
  render(<Transactions />);
});

it("matches snapshot with no transactions", function() {
  const { asFragment } = render(<Transactions />);
  expect(asFragment()).toMatchSnapshot();
});