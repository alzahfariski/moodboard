"use client";

import { useState, useEffect, useCallback } from "react";
import { SeserahanItem, Category, PlanningData } from "@/types";
import { moodboardData } from "@/lib/data";
import SeserahanStats from "./SeserahanStats";
import SeserahanTable from "./SeserahanTable";
import CategoryBreakdown from "./CategoryBreakdown";
import MasterItemModal from "./MasterItemModal";
import CategoryManager from "./CategoryManager";
import { Plus, RefreshCcw } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function PlanningContainer() {
  const [items, setItems] = useState<SeserahanItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<SeserahanItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from Supabase
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Fetch Categories
      const { data: catData, error: catError } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (catError) throw catError;

      // Fetch Items
      const { data: itemData, error: itemError } = await supabase
        .from('seserahan')
        .select('*')
        .order('created_at', { ascending: true });

      if (itemError) throw itemError;

      // Update state with DB data or fallback to local data if DB is empty
      if (catData && catData.length > 0) {
        setCategories(catData);
      } else {
        setCategories(moodboardData.planning?.categories || []);
      }

      if (itemData && itemData.length > 0) {
        setItems(itemData as SeserahanItem[]);
      } else {
        setItems(moodboardData.planning?.seserahan || []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Fallback to local data on error
      setItems(moodboardData.planning?.seserahan || []);
      setCategories(moodboardData.planning?.categories || []);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Sync / CRUD Operations
  const handleSaveItem = async (data: Partial<SeserahanItem>) => {
    try {
      if (activeItem) {
        // Edit in DB
        const { error } = await supabase
          .from('seserahan')
          .update(data)
          .eq('id', activeItem.id);

        if (error) throw error;
        setItems(items.map(i => i.id === activeItem.id ? { ...i, ...data } as SeserahanItem : i));
      } else {
        // New in DB
        const newItem = {
          category: data.category || "Lainnya",
          detail: data.detail || "",
          brand: data.brand || "",
          status: "pending",
          budget: data.budget || 0,
          realization: data.realization || 0,
          notes: data.notes || "",
          link: data.link || "",
        };

        const { data: inserted, error } = await supabase
          .from('seserahan')
          .insert([newItem])
          .select()
          .single();

        if (error) throw error;
        if (inserted) setItems([...items, inserted as SeserahanItem]);
      }
      setIsModalOpen(false);
      setActiveItem(null);
    } catch (error) {
      console.error("Error saving item:", error);
      alert("Gagal menyimpan data ke Supabase");
    }
  };

  const deleteItem = async (id: string) => {
    if (!confirm("Hapus item ini?")) return;
    try {
      const { error } = await supabase.from('seserahan').delete().eq('id', id);
      if (error) throw error;
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const toggleStatus = async (id: string) => {
    const item = items.find(i => i.id === id);
    if (!item) return;
    const newStatus = item.status === "done" ? "pending" : "done";

    try {
      const { error } = await supabase
        .from('seserahan')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;
      setItems(items.map((i) => i.id === id ? { ...i, status: newStatus } : i));
    } catch (error) {
      console.error("Error toggling status:", error);
    }
  };

  // Category Logic
  const addCategory = async (name: string) => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .insert([{ name }])
        .select()
        .single();

      if (error) throw error;
      if (data) setCategories([...categories, data]);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      const { error } = await supabase.from('categories').delete().eq('id', id);
      if (error) throw error;
      setCategories(categories.filter(c => c.id !== id));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const updateCategory = async (id: string, name: string) => {
    try {
      const { error } = await supabase
        .from('categories')
        .update({ name })
        .eq('id', id);

      if (error) throw error;
      setCategories(categories.map(c => c.id === id ? { ...c, name } : c));
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  const openAddModal = () => {
    setActiveItem(null);
    setIsModalOpen(true);
  };

  const openEditModal = (item: SeserahanItem) => {
    setActiveItem(item);
    setIsModalOpen(true);
  };

  const planningData: PlanningData = { seserahan: items, categories };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-taupe-400">
        <RefreshCcw className="animate-spin mb-4" size={32} />
        <p className="font-body">Memuat data dari cloud...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
      <header className="mb-10 pt-4 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-display text-4xl md:text-5xl text-taupe-800">Seserahan Planner</h2>

          </div>
          <p className="text-taupe-500 font-body text-sm md:text-base">Dashboard manajemen seserahan terpusat.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={fetchData} className="p-3 text-taupe-400 hover:text-purple-600 transition-colors">
            <RefreshCcw size={20} />
          </button>
          <button onClick={openAddModal} className="hidden md:flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-2xl shadow-xl hover:bg-purple-700 transition-all font-bold">
            <Plus size={20} /> Tambah Item
          </button>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <SeserahanStats data={planningData} />
          <div className="bg-white p-6 md:p-8 rounded-[32px] border border-taupe-100 shadow-sm">
            <h3 className="font-display text-xl text-taupe-800 mb-6">Analisis Kategori</h3>
            <CategoryBreakdown items={items} />
          </div>
        </div>
        <div>
          <CategoryManager
            categories={categories}
            onAdd={addCategory}
            onDelete={deleteCategory}
            onUpdate={updateCategory}
          />
        </div>
      </div>

      <div className="flex justify-between items-end mb-6 ml-1">
        <h3 className="text-xl font-display text-taupe-800">Daftar Seserahan</h3>
        <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">{items.length} Items</span>
      </div>

      <SeserahanTable
        items={items}
        onDelete={deleteItem}
        onToggleStatus={toggleStatus}
        onEditRequest={openEditModal}
      />

      {/* Mobile FAB */}
      <button
        onClick={openAddModal}
        className="md:hidden fixed bottom-6 right-6 w-16 h-16 bg-purple-600 text-white rounded-full shadow-2xl z-[100] flex items-center justify-center active:scale-95 transition-transform"
      >
        <Plus size={32} />
      </button>

      <MasterItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveItem}
        categories={categories}
        initialData={activeItem}
      />
    </div>
  );
}
