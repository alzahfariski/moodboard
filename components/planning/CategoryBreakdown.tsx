import { SeserahanItem } from "@/types";
import { formatCurrency } from "@/lib/utils";

export default function CategoryBreakdown({ items }: { items: SeserahanItem[] }) {
  const categories = Array.from(new Set(items.map(i => i.category)));
  
  const stats = categories.map(cat => {
    const catItems = items.filter(i => i.category === cat);
    const budget = catItems.reduce((acc, i) => acc + i.budget, 0);
    const realization = catItems.reduce((acc, i) => acc + i.realization, 0);
    const progress = (realization / budget) * 100;
    
    return { name: cat, budget, realization, progress };
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white p-5 rounded-3xl border border-taupe-100 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-semibold text-taupe-800 mb-4">{stat.name}</h4>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-taupe-500">Realisasi</span>
              <span className="text-taupe-800 font-medium">{Math.round(stat.progress)}%</span>
            </div>
            <div className="w-full bg-taupe-50 h-1.5 rounded-full overflow-hidden mb-4">
              <div 
                className="bg-purple-400 h-full" 
                style={{ width: `${stat.progress}%` }}
              />
            </div>
          </div>
          <p className="text-sm font-display text-purple-800 font-semibold text-right">
            {formatCurrency(stat.realization)}
          </p>
        </div>
      ))}
    </div>
  );
}
