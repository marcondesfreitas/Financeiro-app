import { useState } from "react";
import type { Transaction } from "../types/transaction";

type Props = {
  transactions: Transaction[];
};

export function TransactionList({
  transactions,
}: Props) {
  const [filter, setFilter] = useState<
    "all" | "income" | "expense"
  >("all");

  const filteredTransactions = transactions.filter(
    (transaction) => {
      if (filter === "all") return true;
      return transaction.type === filter;
    }
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            filter === "all"
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          Todas
        </button>

        <button
          onClick={() => setFilter("income")}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            filter === "income"
              ? "bg-green-600"
              : "bg-slate-700"
          }`}
        >
          Receitas
        </button>

        <button
          onClick={() => setFilter("expense")}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            filter === "expense"
              ? "bg-red-600"
              : "bg-slate-700"
          }`}
        >
          Despesas
        </button>
      </div>

      {filteredTransactions.map((transaction) => (
        <div
          key={transaction.id}
          className="
            bg-slate-800
            p-4
            rounded-xl
            transition-all
            duration-300
            hover:bg-slate-700
          "
        >
          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <h3 className="font-semibold">
              {transaction.description}
            </h3>

            <span
              className={
                transaction.type === "income"
                  ? "text-green-500 font-bold"
                  : "text-red-500 font-bold"
              }
            >
              R$ {transaction.amount.toFixed(2)}
            </span>
          </div>

          <p className="text-slate-300">
            {transaction.category}
          </p>

          <p className="text-slate-400 text-sm">
            {transaction.date}
          </p>
        </div>
      ))}
    </div>
  );
}