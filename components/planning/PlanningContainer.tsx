"use client";

import { useState, useEffect } from "react";
import { SeserahanItem, Category, PlanningData } from "@/types";
import { moodboardData } from "@/lib/data";
import SeserahanStats from "./SeserahanStats";
import SeserahanTable from "./SeserahanTable";
import CategoryBreakdown from "./CategoryBreakdown";
import MasterItemModal from "./MasterItemModal";
import CategoryManager from "./CategoryManager";
import { Plus } from "lucide-react";

export default function PlanningContainer() {
  const [items, setItems] = useState<SeserahanItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<SeserahanItem | null>(null);

  // Initialization
  useEffect(() => {
    const savedItems = localStorage.getItem("seserahan_items");
    const savedCats = localStorage.getItem("seserahan_cats");
    
    if (savedItems) setItems(JSON.parse(savedItems));
    else setItems(moodboardData.planning?.seserahan || []);

    if (savedCats) setCategories(JSON.parse(savedCats));
    else setCategories([
      { id: '1', name: 'Pakaian' },
      { id: '2', name: 'Kosmetik' },
      { id: '3', name: 'Perhiasan' },
      { id: '4', name: 'Perlengkapan' }
    ]);
  }, []);

  // Sync
  useEffect(() => {
    localStorage.setItem("seserahan_items", JSON.stringify(items));
    localStorage.setItem("seserahan_cats", JSON.stringify(categories));
  }, [items, categories]);

  const handleSaveItem = (data: Partial<SeserahanItem>) => {
    if (activeItem) {
      // Edit
      setItems(items.map(i => i.id === activeItem.id ? { ...i, ...data } as SeserahanItem : i));
    } else {
      // New
      const newItem: SeserahanItem = {
        id: crypto.randomUUID(),
        category: data.category || "Lainnya",
        detail: data.detail || "",
        brand: data.brand || "",
        status: "pending",
        budget: data.budget || 0,
        realization: data.realization || 0,
        notes: data.notes || "",
        link: data.link || "",
      };
      setItems([...items, newItem]);
    }
    setActiveItem(null);
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleStatus = (id: string) => {
    setItems(items.map((i) => i.id === id ? { ...i, status: i.status === "done" ? "pending" : "done" } : i));
  };

  const openAddModal = () => {
    setActiveItem(null);
    setIsModalOpen(true);
  };

  const openEditModal = (item: SeserahanItem) => {
    setActiveItem(item);
    setIsModalOpen(true);
  };

  // Category Logic
  const addCategory = (name: string) => {
    setCategories([...categories, { id: crypto.randomUUID(), name }]);
  };
  const deleteCategory = (id: string) => {
    setCategories(categories.filter(c => c.id !== id));
  };
  const updateCategory = (id: string, name: string) => {
    setCategories(categories.map(c => c.id === id ? { ...c, name } : c));
  };

  const planningData: PlanningData = { seserahan: items, categories };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
      <header className="mb-10 pt-4 flex justify-between items-end">
        <div>
          <h2 className="font-display text-4xl md:text-5xl text-taupe-800 mb-2">Power Planner</h2>
          <p className="text-taupe-500 font-body text-sm md:text-base">Dashboard manajemen seserahan cerdas dan dinamis.</p>
        </div>
        <button onClick={openAddModal} className="hidden md:flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-2xl shadow-xl hover:bg-purple-700 transition-all font-bold">
          <Plus size={20} /> Tambah Item
        </button>
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
