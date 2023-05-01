import React from "react";
import { render } from "@testing-library/react";
import WalletCard from "./WalletCard";
import { UserProvider } from "../testUtils";


it("matches snapshot", function () {
  let item = { userId: 1, currencyName: "BTC", currencyAmount: 10, currencyType: "crypto" };
  const { asFragment } = render(
      <UserProvider>
        <WalletCard item={item} />
      </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});