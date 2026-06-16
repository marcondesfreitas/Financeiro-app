import { useState } from "react";

type Props = {
  onAdd: (transaction: any) => void;
};

export function TransactionForm({ onAdd }: Props) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAdd({
      id: crypto.randomUUID(),
      description,
      amount: Number(amount),
      category,
      date,
      type,
    });

    setDescription("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-slate-800
        p-4
        rounded-xl
        space-y-3
        w-full
        shadow-lg
      "
    >
      <input
        placeholder="Descrição"
        className="w-full p-3 rounded bg-slate-700 text-white"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Valor"
        className="w-full p-3 rounded bg-slate-700 text-white"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        placeholder="Categoria"
        className="w-full p-3 rounded bg-slate-700 text-white"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="date"
        className="w-full p-3 rounded bg-slate-700 text-white"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        className="w-full p-3 rounded bg-slate-700 text-white"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Receita</option>
        <option value="expense">Despesa</option>
      </select>

      <button
        className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          transition-all
          duration-300
          p-3
          rounded
          font-semibold
        "
      >
        Adicionar
      </button>
    </form>
  );
}