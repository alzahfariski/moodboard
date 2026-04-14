import { PlanningData } from "@/types";
import { formatCurrency } from "@/lib/utils";

export default function SeserahanStats({ data }: { data: PlanningData }) {
  const totalBudget = data.seserahan.reduce((acc, item) => acc + item.budget, 0);
  const totalRealization = data.seserahan.reduce((acc, item) => acc + item.realization, 0);
  const remainingBudget = totalBudget - totalRealization;
  const progress = (totalRealization / totalBudget) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-3xl border border-taupe-100 shadow-sm">
        <p className="text-taupe-600 text-sm mb-1 font-body">Total Budget</p>
        <h3 className="text-3xl font-display text-taupe-800">{formatCurrency(totalBudget)}</h3>
      </div>
      
      <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100 shadow-sm">
        <p className="text-purple-600 text-sm mb-1 font-body">Total Realization</p>
        <h3 className="text-3xl font-display text-purple-800">{formatCurrency(totalRealization)}</h3>
        <div className="mt-4 w-full bg-purple-200 h-1.5 rounded-full overflow-hidden">
          <div 
            className="bg-purple-600 h-full transition-all duration-1000" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-taupe-100 shadow-sm">
        <p className="text-taupe-600 text-sm mb-1 font-body">Remaining</p>
        <h3 className="text-3xl font-display text-taupe-800">{formatCurrency(remainingBudget)}</h3>
      </div>
    </div>
  );
}
