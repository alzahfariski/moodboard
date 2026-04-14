import { moodboardData } from "@/lib/data";
import { logout } from "@/lib/actions/auth";
import PlanningContainer from "@/components/planning/PlanningContainer";

export default function PlanningPage() {
  return (
    <main className="min-h-screen bg-taupe-50 pb-20">
      {/* Header */}
      <nav className="bg-white border-b border-taupe-100 py-4 px-8 flex justify-between items-center mb-8 sticky top-0 z-10">
        <div>
          <h1 className="font-display text-2xl text-taupe-800">Wedding Planner</h1>
          <p className="font-body text-xs text-taupe-500 uppercase tracking-widest leading-none mt-1">
            {moodboardData.couple.name1} & {moodboardData.couple.name2}
          </p>
        </div>
        <form action={logout}>
          <button className="text-sm font-medium text-taupe-600 hover:text-purple-600 transition-colors">
            Logout
          </button>
        </form>
      </nav>

      {/* Dynamic Content Handler */}
      <PlanningContainer />
    </main>
  );
}
