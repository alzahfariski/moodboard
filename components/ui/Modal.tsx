"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

export default function Modal({ isOpen, onClose, onConfirm, title, message }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-taupe-800/40 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[101] pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-sm rounded-[32px] shadow-2xl overflow-hidden pointer-events-auto border border-taupe-100"
            >
              <div className="p-8 pb-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
                  <AlertTriangle size={32} />
                </div>
                <h3 className="font-display text-2xl text-taupe-800 mb-2">{title}</h3>
                <p className="text-taupe-500 font-body text-sm leading-relaxed">
                  {message}
                </p>
              </div>
              
              <div className="p-6 bg-taupe-50 flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-4 bg-white border border-taupe-200 text-taupe-600 rounded-2xl font-medium hover:bg-taupe-100 transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    onConfirm();
                    onClose();
                  }}
                  className="flex-1 py-4 bg-red-500 text-white rounded-2xl font-medium hover:bg-red-600 shadow-lg shadow-red-200 transition-colors"
                >
                  Hapus
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
