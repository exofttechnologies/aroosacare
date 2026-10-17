import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles, Tag, Check } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  packSize: string;
  priceFormatted: string;
  priceNumeric: number;
  image: string;
  quantity: number;
  variantStyle?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onCheckout: () => void;
}

const FREE_SHIPPING_THRESHOLD = 25.0;

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckout,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discountPercent: number } | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);

  if (!isOpen) return null;

  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.priceNumeric * item.quantity, 0);

  const discountAmount = appliedPromo ? (subtotal * appliedPromo.discountPercent) / 100 : 0;
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = subtotal === 0 || isFreeShipping ? 0 : 3.99;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError(null);
    const cleaned = promoCode.trim().toUpperCase();
    if (!cleaned) return;

    if (cleaned === 'AROOSA15' || cleaned === 'PURECARE') {
      setAppliedPromo({ code: cleaned, discountPercent: 15 });
      setPromoCode('');
    } else if (cleaned === 'AROOSA10' || cleaned === 'BABY10') {
      setAppliedPromo({ code: cleaned, discountPercent: 10 });
      setPromoCode('');
    } else {
      setPromoError('Invalid coupon code. Try "AROOSA15"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn select-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out border-l border-slate-200">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-md">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 leading-tight">Your Cart</h2>
                <p className="text-xs text-slate-500">
                  {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'} in your bag
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-6 py-3.5 bg-teal-50/70 border-b border-teal-100/60">
            <div className="flex items-center justify-between text-xs font-medium text-teal-950 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                {isFreeShipping ? (
                  <strong className="text-teal-900 font-bold">🎉 You've unlocked FREE Shipping!</strong>
                ) : (
                  <span>
                    Add <strong className="font-bold text-teal-900">${amountNeededForFreeShipping.toFixed(2)}</strong> more for FREE Shipping
                  </span>
                )}
              </span>
              <span className="text-[11px] font-bold text-teal-800">
                {Math.round(freeShippingProgress)}%
              </span>
            </div>
            <div className="w-full h-2 bg-teal-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3.5 divide-y divide-slate-100">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
                <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4 shadow-inner">
                  <ShoppingBag className="w-9 h-9" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Your cart is empty</h3>
                <p className="text-xs text-slate-500 max-w-xs leading-relaxed mb-6">
                  Explore our pure cotton, dermatologist-tested baby wipes designs and add them to your cart.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-teal-800 hover:bg-teal-900 text-white font-medium text-xs shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Browse Card Designs
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="pt-3.5 first:pt-0 flex items-center gap-3.5 group">
                  {/* Thumbnail */}
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-slate-100 p-1.5 flex items-center justify-center border border-slate-200/70 shrink-0 overflow-hidden shadow-xs">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <div>
                        {item.variantStyle && (
                          <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full mb-1 border border-teal-100">
                            {item.variantStyle}
                          </span>
                        )}
                        <h4 className="text-sm font-bold text-slate-900 truncate leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-500">{item.packSize}</p>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-slate-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quantity controls & Price */}
                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center space-x-1.5 bg-slate-100 rounded-full px-2 py-1 border border-slate-200/70">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          aria-label="Decrease quantity"
                          className="w-5 h-5 rounded-full bg-white text-slate-700 hover:bg-slate-200 flex items-center justify-center text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          aria-label="Increase quantity"
                          className="w-5 h-5 rounded-full bg-white text-slate-700 hover:bg-slate-200 flex items-center justify-center text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          ${(item.priceNumeric * item.quantity).toFixed(2)}
                        </span>
                        {item.quantity > 1 && (
                          <span className="block text-[10px] text-slate-400">
                            ${item.priceNumeric.toFixed(2)} each
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-[#FAF8F5] space-y-4">
              
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="space-y-1.5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo code (e.g. AROOSA15)"
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-700 uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {appliedPromo && (
                  <p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                    <Check className="w-3 h-3" /> Coupon "{appliedPromo.code}" applied (-{appliedPromo.discountPercent}%)
                  </p>
                )}
                {promoError && (
                  <p className="text-[11px] text-rose-600 font-medium">
                    {promoError}
                  </p>
                )}
              </form>

              {/* Price Calculations */}
              <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-200/70 pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount ({appliedPromo.discountPercent}%)</span>
                    <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-slate-900">
                    {shippingFee === 0 ? <span className="text-teal-700 font-bold">FREE</span> : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-bold text-slate-950 border-t border-slate-200 pt-2">
                  <span>Total</span>
                  <span className="text-teal-900">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={onCheckout}
                  className="w-full py-3.5 rounded-full bg-teal-800 hover:bg-teal-900 text-white font-semibold text-sm shadow-lg shadow-teal-900/20 transition-all flex items-center justify-center gap-2 group active:scale-95 cursor-pointer"
                >
                  <span>Proceed to Checkout (${finalTotal.toFixed(2)})</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="text-[11px] text-slate-400 hover:text-slate-600 font-medium cursor-pointer"
                  >
                    Clear Cart
                  </button>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                    Secure Checkout
                  </span>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
