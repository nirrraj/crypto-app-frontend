import React, { useState, useEffect } from "react";
import Search from "../common/SearchForm";
import CryptoApi from "../api/api";
import TransactionCardList from "./TransactionCardList";
import LoadingSpinner from "../common/LoadingSpinner";

/** Show page with list of transactions (individual buys, sales, deposits, withdrawals)
 *
 * On mount, loads transactions from API.
 *
 * TransactionList -> TransactionCardList -> TransactionCard
 *
 * This is routed to at /transactions
 */

function TransactionList() {
  console.debug("TransactionList");

  const [transactions, setTransactions] = useState(null);

  useEffect(function getAllTransactionsOnMount() {
    console.debug("TransactionList useEffect getAllTransactionsOnMount");
    search();
  }, []);

  if (!tranactions) return <LoadingSpinner />;

  return (
      <div className="TransactionList col-md-8 offset-md-2">
        <Search searchFor={search} />
        {transactions.length
            ? <TransactionCardList transactions={transactions} />
            : <p className="lead">You do not have any transactions!</p>
        }
      </div>
  );
}

export default TransactionList;