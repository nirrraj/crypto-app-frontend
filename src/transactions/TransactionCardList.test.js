import React from "react";
import { render } from "@testing-library/react";
import TransactionCardList from "./TransactionCardList";
import { UserProvider } from "../testUtils";

it("matches snapshot", function () {
    let transactions = [{ userId: 1, transactionType: "sell", startCurrencyName: "BTC", startCurrencyAmount: 10, startCurrencyType: "crypto",
    endCurrencyName: "USD", endCurrencyAmount: 300000, endCurrencyType: "fiat", timestampUtc: "2023-04-30 11:00:00.000000" }];
    
    const { asFragment } = render(
        <UserProvider>
          <TransactionCardList transactions={transactions} />
        </UserProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });