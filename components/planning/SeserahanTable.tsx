import { useState } from "react";
import { SeserahanItem } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Trash2, CheckCircle, RotateCcw, Plus, Check, X, Link as LinkIcon } from "lucide-react";
import Modal from "@/components/ui/Modal";

interface TableProps {
  items: SeserahanItem[];
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
  onEditRequest: (item: SeserahanItem) => void;
}

export default function SeserahanTable({ items, onDelete, onToggleStatus, onEditRequest }: TableProps) {
  const [deleteId, setDeleteId] = useState<string | null>(null);

  return (
    <div className="space-y-4 mb-20">
      {/* MOBILE VIEW: Full Detail Card List */}
      <div className="grid grid-cols-1 gap-5 md:hidden">
        {items.map((item) => (
          <div 
            key={item.id} 
            onClick={() => onEditRequest(item)}
            className="bg-white p-6 rounded-[32px] border border-taupe-100 shadow-sm relative overflow-hidden transition-all active:scale-[0.98] cursor-pointer"
          >
            {/* Header: Category & Delete */}
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg">
                {item.category}
              </span>
              <button 
                onClick={(e) => { e.stopPropagation(); setDeleteId(item.id); }} 
                className="text-taupe-300 p-1"
              >
                <Trash2 size={16} />
              </button>
            </div>
            
            {/* Title & Brand */}
            <h4 className={`text-xl font-display leading-tight ${item.status === 'done' ? 'line-through text-taupe-400' : 'text-taupe-800'}`}>
              {item.detail}
            </h4>
            {item.brand && (
              <p className="text-xs font-bold text-taupe-500 mt-1 uppercase tracking-wider">{item.brand}</p>
            )}

            {/* Notes Section */}
            {item.notes && (
              <p className="mt-3 text-sm text-taupe-400 italic leading-relaxed border-l-2 border-taupe-50 pl-3">
                "{item.notes}"
              </p>
            )}

            {/* Link Button (Primary Action on Mobile) */}
            {item.link && (
              <a 
                href={item.link} 
                target="_blank" 
                onClick={(e) => e.stopPropagation()}
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-white border-2 border-purple-100 text-purple-600 rounded-2xl text-xs font-bold mb-4 active:bg-purple-50 transition-colors"
              >
                <LinkIcon size={14} /> Lihat Produk Online
              </a>
            )}

            <div className="mt-4 pt-4 border-t border-taupe-50 flex justify-between items-end">
              <div className="space-y-1">
                <div className="flex flex-col">
                  <span className="text-[10px] text-taupe-400 font-bold uppercase">Budget</span>
                  <span className="text-sm text-taupe-600 font-body">{formatCurrency(item.budget)}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-purple-400 font-bold uppercase">Paid</span>
                  <span className="text-base text-purple-700 font-bold font-body">{formatCurrency(item.realization)}</span>
                </div>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); onToggleStatus(item.id); }}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all shadow-sm ${
                  item.status === 'done' ? 'bg-green-500 text-white' : 'bg-purple-100 text-purple-700'
                }`}
              >
                {item.status === 'done' ? <Check size={16} /> : null}
                {item.status === 'done' ? 'Selesai' : 'Update'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP VIEW: Spreadsheet Style (Clickable Rows) */}
      <div className="hidden md:block bg-white rounded-[32px] border border-taupe-100 shadow-sm overflow-x-auto overflow-y-hidden mb-12">
        <table className="w-full text-left order-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-taupe-50/50 border-b border-taupe-100">
              <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-taupe-400">Category</th>
              <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-taupe-400">Detail</th>
              <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-taupe-400">Brand</th>
              <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-taupe-400 text-right">Budget</th>
              <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-taupe-400 text-right">Realisasi</th>
              <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-taupe-400">Notes</th>
              <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-taupe-400 text-center">Status</th>
              <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-taupe-400 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-taupe-50">
            {items.map((item) => (
              <tr 
                key={item.id} 
                onClick={() => onEditRequest(item)}
                className="group hover:bg-taupe-50/40 transition-colors cursor-pointer"
              >
                <td className="px-6 py-4">
                  <span className="text-[10px] px-2 py-1 bg-taupe-100 text-taupe-600 rounded-md font-bold uppercase">{item.category}</span>
                </td>
                <td className="px-6 py-4">
                  <div className={`font-medium ${item.status === 'done' ? 'line-through text-taupe-400' : 'text-taupe-800'}`}>
                    {item.detail}
                  </div>
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      onClick={(e) => e.stopPropagation()}
                      className="text-[10px] text-purple-600 block hover:underline"
                    >
                      Link Produk →
                    </a>
                  )}
                </td>
                <td className="px-6 py-4 text-xs text-taupe-500">{item.brand || '-'}</td>
                <td className="px-6 py-4 text-right font-body text-taupe-600 text-sm">{formatCurrency(item.budget)}</td>
                <td className="px-6 py-4 text-right font-body text-taupe-800 font-bold text-sm">{formatCurrency(item.realization)}</td>
                <td className="px-6 py-4 text-xs text-taupe-400 italic max-w-[150px] truncate">{item.notes || '-'}</td>
                <td className="px-6 py-4 text-center">
                  <button 
                    onClick={(e) => { e.stopPropagation(); onToggleStatus(item.id); }} 
                    className="inline-block transition-all active:scale-75"
                  >
                    {item.status === 'done' ? (
                      <CheckCircle className="text-green-500" size={20} />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-purple-200 hover:border-purple-600 transition-colors" />
                    )}
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setDeleteId(item.id); }} 
                    className="p-2 text-taupe-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal 
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => {
          if (deleteId) onDelete(deleteId);
          setDeleteId(null);
        }}
        title="Konfirmasi Hapus"
        message="Item ini akan dihapus permanen. Tindakan ini tidak dapat dibatalkan."
      />
    </div>
  );
}
