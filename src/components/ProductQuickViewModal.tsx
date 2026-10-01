import React from 'react';
import { X, Star, CheckCircle2, ShieldCheck, ArrowRight, Package } from 'lucide-react';

interface ProductQuickViewModalProps {
  product: any;
  onClose: () => void;
  onOrderNow: (product: any) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onOrderNow,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Product Image */}
          <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 p-2 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-xl shadow-xs"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4 text-left">
            <span className="text-[10px] font-bold text-[#006059] uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              OFFICIAL AROOSA PRODUCT
            </span>
            
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              {product.name}
            </h3>

            <div className="flex items-center gap-2 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900">4.9</span>
              <span className="text-slate-400">(348 verified reviews)</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {product.description}
            </p>

            <div className="border-t border-b border-slate-150 py-3 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>99.99% Pure Water + Organic Cotton</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Moisture-lock flip lid seal</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Zero alcohol, parabens, or harsh fragrances</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-2xl font-bold font-display text-slate-900">
                {product.price}
              </span>
              
              <button
                onClick={() => {
                  onClose();
                  onOrderNow(product);
                }}
                className="px-6 py-3 rounded-full bg-[#006059] hover:bg-[#004e48] text-white font-semibold text-xs shadow-sm hover:shadow-md transition-all flex items-center gap-2 group"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
