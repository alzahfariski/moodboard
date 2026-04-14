"use client";

import { useState } from "react";
import { Category } from "@/types";
import { Plus, Trash2, Edit3, Check, X } from "lucide-react";

interface Props {
  categories: Category[];
  onAdd: (name: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, name: string) => void;
}

export default function CategoryManager({ categories, onAdd, onDelete, onUpdate }: Props) {
  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  const handleAdd = () => {
    if (newName.trim()) {
      onAdd(newName.trim());
      setNewName("");
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-[32px] border border-taupe-100 shadow-sm">
      <h3 className="font-display text-xl text-taupe-800 mb-6">Kelola Kategori</h3>
      
      <div className="space-y-3 mb-6">
        {categories.map((cat) => (
          <div key={cat.id} className="flex items-center justify-between p-3 bg-taupe-50 rounded-2xl group">
            {editingId === cat.id ? (
              <div className="flex-1 flex gap-2">
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="flex-1 bg-white px-3 py-1 rounded-lg text-sm border border-purple-200 outline-none"
                />
                <button onClick={() => { onUpdate(cat.id, editValue); setEditingId(null); }} className="p-2 bg-purple-600 text-white rounded-lg"><Check size={14}/></button>
                <button onClick={() => setEditingId(null)} className="p-2 bg-taupe-200 text-taupe-600 rounded-lg"><X size={14}/></button>
              </div>
            ) : (
              <>
                <span className="text-sm font-medium text-taupe-700">{cat.name}</span>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => { setEditingId(cat.id); setEditValue(cat.name); }} className="p-2 text-taupe-400 hover:text-purple-600"><Edit3 size={14}/></button>
                  <button onClick={() => onDelete(cat.id)} className="p-2 text-taupe-400 hover:text-red-500"><Trash2 size={14}/></button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Kategori baru..."
          className="flex-1 bg-taupe-50 px-4 py-3 rounded-xl text-sm outline-none border border-taupe-50 focus:border-purple-200"
        />
        <button
          onClick={handleAdd}
          className="p-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
}
