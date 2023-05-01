import React from "react";
import TransactionCard from "./TransactionCard";

/** Show list of transaction cards.
 *
 * Used by TransactionList to list holdings
 *
 * TransactionList -> TransactionCardList -> TransactionCard 
 * 
 */

function TransactionCardList({ transactions }) {
  console.debug("TransactionCardList", "transactions=", transactions);

  return (
      <div className="TransactionCardList">
        {transactions.map(transaction => (
            <TransactionCard
                key={transaction.id}
                id={transaction.id}
                userId={transaction.userId}
                transactionType={transaction.transactionType}
                startCurrencyName={transaction.currencyName}
                startCurrencyAmount={transaction.currencyAmount}
                startCurrencyType={transaction.currencyType}
                endCurrencyName={transaction.currencyName}
                endCurrencyAmount={transaction.currencyAmount}
                endCurrencyType={transaction.currencyType}
                timestampUtc={transaction.timestampUtc}
            />
        ))}
      </div>
  );
}

export default TransactionCardList;