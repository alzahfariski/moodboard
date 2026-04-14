"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Save, Link as LinkIcon, Tag, Package, CreditCard, ShoppingBag, FileText } from "lucide-react";
import { SeserahanItem, Category } from "@/types";
import { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: Partial<SeserahanItem>) => void;
  categories: Category[];
  initialData?: SeserahanItem | null;
}

export default function MasterItemModal({ isOpen, onClose, onSave, categories, initialData }: ModalProps) {
  const [formData, setFormData] = useState<Partial<SeserahanItem>>({});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        category: categories[0]?.name || "Lainnya",
        status: "pending",
        budget: 0,
        realization: 0,
      });
    }
  }, [initialData, categories, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-taupe-900/60 backdrop-blur-md z-[110]" />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white md:rounded-[40px] rounded-t-[40px] shadow-2xl z-[111] max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            <div className="p-6 md:p-8 border-b border-taupe-50 flex justify-between items-center sticky top-0 bg-white z-10">
              <div>
                <h3 className="font-display text-2xl text-taupe-800">{initialData ? "Ubah Item" : "Tambah Item Baru"}</h3>
                <p className="text-xs text-taupe-400 font-bold uppercase tracking-widest mt-1">Seserahan Master Form</p>
              </div>
              <button onClick={onClose} className="p-2 bg-taupe-50 text-taupe-400 rounded-full hover:bg-taupe-100 transition-colors">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 flex-1 overflow-y-auto space-y-8 pb-32 md:pb-8">
              {/* Category & Detail */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-taupe-400 uppercase tracking-wider ml-1">
                    <Tag size={12} /> Kategori
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-taupe-50 border-0 rounded-2xl p-4 text-taupe-800 font-medium focus:ring-2 focus:ring-purple-200 outline-none"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-taupe-400 uppercase tracking-wider ml-1">
                    <Package size={12} /> Nama Item
                  </label>
                  <input
                    required
                    value={formData.detail || ""}
                    onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
                    placeholder="Contoh: Sepatu Pesta"
                    className="w-full bg-taupe-50 border-0 rounded-2xl p-4 text-taupe-800 font-medium focus:ring-2 focus:ring-purple-200 outline-none"
                  />
                </div>
              </div>

              {/* Brand & Price */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-taupe-400 uppercase tracking-wider ml-1">
                    <ShoppingBag size={12} /> Brand (Opsional)
                  </label>
                  <input
                    value={formData.brand || ""}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    placeholder="Merek"
                    className="w-full bg-taupe-50 border-0 rounded-2xl p-4 text-taupe-800 font-medium outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-taupe-400 uppercase tracking-wider ml-1">
                    <CreditCard size={12} /> Budget (Rp)
                  </label>
                  <input
                    type="number"
                    value={formData.budget || ""}
                    onChange={(e) => setFormData({ ...formData, budget: Number(e.target.value) })}
                    placeholder="0"
                    className="w-full bg-taupe-50 border-0 rounded-2xl p-4 text-taupe-800 font-medium outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-taupe-400 uppercase tracking-wider ml-1">
                    <Save size={12} /> Realisasi (Rp)
                  </label>
                  <input
                    type="number"
                    value={formData.realization || ""}
                    onChange={(e) => setFormData({ ...formData, realization: Number(e.target.value) })}
                    className="w-full bg-taupe-50 border-0 rounded-2xl p-4 text-purple-700 font-bold outline-none"
                  />
                </div>
              </div>

              {/* Notes & Link */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-taupe-400 uppercase tracking-wider ml-1">
                  <FileText size={12} /> Keterangan Tambahan
                </label>
                <textarea
                  value={formData.notes || ""}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tambahkan detail ukuran, warna, atau lainnya..."
                  rows={3}
                  className="w-full bg-taupe-50 border-0 rounded-2xl p-4 text-taupe-800 font-medium outline-none resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-taupe-400 uppercase tracking-wider ml-1">
                  <LinkIcon size={12} /> Link Pembelian
                </label>
                <input
                  value={formData.link || ""}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  placeholder="https://..."
                  className="w-full bg-taupe-50 border-0 rounded-2xl p-4 text-purple-600 font-medium outline-none"
                />
              </div>

              <div className="pt-6 border-t border-taupe-50">
                <button type="submit" className="w-full py-5 bg-purple-600 text-white rounded-[24px] font-bold shadow-xl shadow-purple-100 hover:bg-purple-700 transition-all flex items-center justify-center gap-2">
                  <Save size={20} /> {initialData ? "Simpan Perubahan" : "Simpan Item Baru"}
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
