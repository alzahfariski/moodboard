import { PlanningData } from "@/types";
import { formatCurrency } from "@/lib/utils";

export default function SeserahanStats({ data }: { data: PlanningData }) {
  const { seserahan } = data;
  
  // LOGIKA:
  // 1. Total Alokasi = Semua budget yang direncanakan
  const totalBudget = seserahan.reduce((acc, item) => acc + (item.budget || 0), 0);
  
  // 2. Total Terbayar = Realisasi hanya untuk item yang 'done' (sudah dibeli)
  const doneItems = seserahan.filter(i => i.status === 'done');
  const totalSpent = doneItems.reduce((acc, item) => acc + (item.realization || 0), 0);
  
  // 3. Total Hemat = (Budget - Realisasi) khusus item yang 'done'
  const totalSavings = doneItems.reduce((acc, item) => {
    const saving = (item.budget || 0) - (item.realization || 0);
    return acc + (saving > 0 ? saving : 0);
  }, 0);

  // 4. Sisa Budget Pending = Budget untuk item yang belum dibeli (status pending)
  const pendingItems = seserahan.filter(i => i.status === 'pending');
  const remainingBudget = pendingItems.reduce((acc, item) => acc + (item.budget || 0), 0);

  const stats = [
    { label: "Total Alokasi", value: totalBudget, color: "text-taupe-800", sub: `${seserahan.length} Items` },
    { label: "Total Terbayar", value: totalSpent, color: "text-purple-600", sub: `Sudah beli ${doneItems.length}` },
    { label: "Total Hemat", value: totalSavings, color: "text-green-600", sub: "Selisih Budget" },
    { label: "Sisa Budget", value: remainingBudget, color: "text-taupe-400", sub: `${pendingItems.length} Pending` },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-5 rounded-[24px] border border-taupe-100 shadow-sm flex flex-col justify-between">
          <p className="text-[10px] uppercase font-bold tracking-widest text-taupe-400 mb-3">{stat.label}</p>
          <div>
            <h4 className={`text-lg md:text-xl font-body font-bold ${stat.color}`}>{formatCurrency(stat.value)}</h4>
            <p className="text-[10px] text-taupe-400 mt-1 font-medium italic">{stat.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
