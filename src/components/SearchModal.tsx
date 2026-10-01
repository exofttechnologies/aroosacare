import React, { useState } from 'react';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuickView: (product: any) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onQuickView }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const mockProducts = [
    {
      id: 'aroosa-wet-wipes-72',
      name: 'Aroosa Wet Wipes (72 Wipes)',
      description: '99.99% pure water & organic cotton wipes for delicate baby skin',
      price: '$4.99',
      image: '/images/wipespack.jpg',
      category: 'Wipes',
    },
    {
      id: 'coming-sensitive',
      name: 'Sensitive Care Wipes (Coming Soon)',
      description: 'Extra-delicate formula for newborn skin',
      price: 'Coming Soon',
      image: '/images/coming_soon_sensitive.jpg',
      category: 'Upcoming',
    },
    {
      id: 'coming-water',
      name: 'Pure Water Wipes (Coming Soon)',
      description: '99% pure water wipes',
      price: 'Coming Soon',
      image: '/images/coming_soon_water.jpg',
      category: 'Upcoming',
    },
  ];

  const filteredProducts = mockProducts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-brand-dark/40 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-soft-lg border border-sky-100 p-6 space-y-4 relative">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sky-100 pb-4">
          <div className="flex items-center space-x-3 w-full">
            <Search className="w-5 h-5 text-sky-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for wipes, soft care, sensitive formula..."
              className="w-full text-base font-medium text-brand-dark focus:outline-none placeholder-slate-400"
              autoFocus
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  onQuickView(prod);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-sky-50 cursor-pointer transition-colors border border-transparent hover:border-sky-200"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-12 h-12 rounded-xl object-cover border border-sky-100"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">{prod.name}</h4>
                    <p className="text-xs text-brand-muted">{prod.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-sky-600">{prod.price}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xs text-brand-muted py-6 text-center">
              No products found matching "{query}"
            </p>
          )}
        </div>

      </div>
    </div>
  );
};
