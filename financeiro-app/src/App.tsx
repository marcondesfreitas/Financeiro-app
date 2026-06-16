import { TransactionForm } from "./components/TransactionForm";
import { TransactionList } from "./components/TransactionList";
import { SummaryCards } from "./components/SummaryCards";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { calculateTotals } from "./utils/calculations";
import type { Transaction } from "./types/transaction";

function App() {
  const [transactions, setTransactions] =
    useLocalStorage<Transaction[]>(
      "transactions",
      []
    );

  const addTransaction = (
    transaction: Transaction
  ) => {
    setTransactions((prev) => [
      transaction,
      ...prev,
    ]);
  };

  const totals = calculateTotals(transactions);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">
          Controle Financeiro
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <SummaryCards
              income={totals.income}
              expense={totals.expense}
              balance={totals.balance}
            />
          </div>

          <div className="lg:col-span-2">
            <TransactionForm
              onAdd={addTransaction}
            />
          </div>
        </div>

        <TransactionList
          transactions={transactions}
        />
      </div>
    </div>
  );
}

export default App;