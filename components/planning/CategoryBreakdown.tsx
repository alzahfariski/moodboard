import { SeserahanItem } from "@/types";
import { formatCurrency } from "@/lib/utils";

export default function CategoryBreakdown({ items }: { items: SeserahanItem[] }) {
  const categories = Array.from(new Set(items.map(i => i.category)));
  
  const stats = categories.map(cat => {
    const catItems = items.filter(i => i.category === cat);
    const budget = catItems.reduce((acc, i) => acc + (i.budget || 0), 0);
    
    // Hanya hitung realisasi untuk item yang sudah 'done'
    const doneItems = catItems.filter(i => i.status === 'done');
    const spent = doneItems.reduce((acc, i) => acc + (i.realization || 0), 0);
    
    // Hemat = total budget item yang sudah dibeli - total realisasinya
    const savings = doneItems.reduce((acc, i) => acc + ((i.budget || 0) - (i.realization || 0)), 0);
    
    const progress = budget > 0 ? (spent / budget) * 100 : 0;
    
    return { name: cat, budget, spent, savings, progress, count: catItems.length, doneCount: doneItems.length };
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-taupe-50/50 p-6 rounded-[28px] border border-taupe-100 flex flex-col justify-between hover:border-purple-200 transition-colors">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-sm font-bold text-taupe-800 uppercase tracking-tight">{stat.name}</h4>
              <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                {stat.doneCount}/{stat.count}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-[10px] text-taupe-400 font-bold uppercase">Terbayar</span>
                <span className="text-sm font-bold text-purple-700">{formatCurrency(stat.spent)}</span>
              </div>
              
              <div className="flex justify-between items-end">
                <span className="text-[10px] text-taupe-400 font-bold uppercase">Hemat</span>
                <span className="text-sm font-bold text-green-600">+{formatCurrency(stat.savings)}</span>
              </div>

              <div className="pt-2">
                <div className="flex justify-between text-[10px] mb-1 font-bold text-taupe-400">
                  <span>Progress Belanja</span>
                  <span>{Math.round(stat.progress)}%</span>
                </div>
                <div className="w-full bg-taupe-100 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-purple-600 h-full transition-all duration-500" 
                    style={{ width: `${stat.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
