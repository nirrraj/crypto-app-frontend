import React from "react";
import { render } from "@testing-library/react";
import Wallets from "./WalletList";

it("renders without crashing", function() {
  render(<Wallets />);
});

it("matches snapshot with no wallets", function() {
  const { asFragment } = render(<Wallets />);
  expect(asFragment()).toMatchSnapshot();
});