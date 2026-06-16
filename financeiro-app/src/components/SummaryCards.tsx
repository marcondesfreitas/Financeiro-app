type Props = {
  income: number;
  expense: number;
  balance: number;
};

export function SummaryCards({
  income,
  expense,
  balance,
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-slate-800 p-4 rounded-xl shadow-lg">
        <h3 className="text-slate-300">Saldo</h3>
        <p className="text-2xl font-bold">
          R$ {balance.toFixed(2)}
        </p>
      </div>

      <div className="bg-green-800 p-4 rounded-xl shadow-lg">
        <h3>Receitas</h3>
        <p className="text-2xl font-bold">
          R$ {income.toFixed(2)}
        </p>
      </div>

      <div className="bg-red-800 p-4 rounded-xl shadow-lg">
        <h3>Despesas</h3>
        <p className="text-2xl font-bold">
          R$ {expense.toFixed(2)}
        </p>
      </div>
    </div>
  );
}