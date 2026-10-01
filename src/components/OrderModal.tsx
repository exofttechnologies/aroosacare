import React, { useState } from 'react';
import { X, CheckCircle, Package, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
  onShowToast: (msg: string) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  product,
  onShowToast,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      onShowToast('Please fill in your name and email');
      return;
    }
    setSubmitted(true);
    onShowToast(`Order request submitted for ${quantity}x ${product.name}!`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-5 relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 text-[#006059] flex items-center justify-center">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#006059] uppercase tracking-wider bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                  DIRECT ORDER & INQUIRY
                </span>
                <h3 className="text-xl font-bold font-display text-slate-900 mt-1">
                  Order {product.name}
                </h3>
              </div>
            </div>

            {/* Selected Product Summary Card */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
              <img
                src={product.image}
                alt={product.name}
                className="w-14 h-14 rounded-xl object-contain bg-white p-1 border border-slate-150"
              />
              <div className="flex-1">
                <h4 className="text-xs font-bold text-slate-900">{product.name}</h4>
                <p className="text-[11px] text-slate-500">{product.packSize || '72 Wipes Soft & Thick'}</p>
                <span className="text-xs font-bold text-[#006059]">{product.price}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">
                  Your Full Name:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#006059]"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">
                  Email Address:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#006059]"
                  required
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-semibold text-slate-600">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-full border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-100 font-bold"
                  >
                    -
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-slate-900">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#006059] hover:bg-[#004e48] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Submit Order Request</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>Zero obligation • Our team will confirm delivery details</span>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-display text-slate-900">Thank you for your order!</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
              We've received your request for <strong>{quantity}x {product.name}</strong>. A confirmation email has been sent to <strong>{email}</strong>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-7 py-2.5 rounded-full bg-slate-900 text-white font-medium text-xs hover:bg-slate-800 transition-colors"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
