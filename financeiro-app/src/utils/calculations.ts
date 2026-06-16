import type { Transaction } from "../types/transaction";

export const calculateTotals = (
  transactions: Transaction[]
) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  return {
    income,
    expense,
    balance: income - expense,
  };
};