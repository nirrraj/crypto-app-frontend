import React from "react";
import { render } from "@testing-library/react";
import WatchlistList from "./WatchlistList";

it("matches snapshot", function () {
  const { asFragment } = render(<WatchlistList />);
  expect(asFragment()).toMatchSnapshot();
});