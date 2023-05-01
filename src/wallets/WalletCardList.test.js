import React from "react";
import { render } from "@testing-library/react";
import WalletCardList from "./WalletCardList";
import { UserProvider } from "../testUtils";

it("matches snapshot", function () {
    let wallets = [{ userId: 1, currencyName: "BTC", currencyAmount: 10, currencyType: "crypto" }];
    const { asFragment } = render(
        <UserProvider>
          <WalletCardList wallets={wallets} />
        </UserProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });