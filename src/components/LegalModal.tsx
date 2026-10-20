import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Truck } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | 'shipping';

interface LegalModalProps {
  type: LegalDocType | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [type, onClose]);

  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      icon: ShieldCheck,
      updated: 'October 20, 2026',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            At <strong>Aroosa Care</strong> (accessible from{' '}
            <a href="https://thearoosa.com/" className="text-teal-700 underline">
              https://thearoosa.com/
            </a>
            ), the privacy of our visitors and customers is of utmost importance. This Privacy Policy outlines the types of information we collect and how we use it.
          </p>
          <h4 className="text-sm font-bold text-slate-900 pt-2">1. Information We Collect</h4>
          <p>
            When you contact us or place an order via WhatsApp or phone, you may provide your name, shipping address, phone number, and order preferences. We only collect details essential to delivering your Aroosa baby wipes orders.
          </p>
          <h4 className="text-sm font-bold text-slate-900 pt-2">2. How We Use Your Information</h4>
          <p>
            We use the collected information solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Process and dispatch your Aroosa wipes orders.</li>
            <li>Provide customer support and shipment tracking updates.</li>
            <li>Answer inquiries regarding our baby care products.</li>
          </ul>
          <h4 className="text-sm font-bold text-slate-900 pt-2">3. Data Security &amp; Sharing</h4>
          <p>
            We never sell, rent, or trade your personal information to third parties. Information is shared only with verified delivery and courier partners to fulfill delivery.
          </p>
          <h4 className="text-sm font-bold text-slate-900 pt-2">4. Contact Us</h4>
          <p>
            If you have questions about this policy, contact us at <strong>info.thearoosa@gmail.com</strong> or call <strong>+91 8714514447</strong>.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms of Service',
      icon: FileText,
      updated: 'October 20, 2026',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            Welcome to <strong>Aroosa Care</strong>. By accessing our website or purchasing our Aroosa baby wipes products, you agree to be bound by the following terms and conditions.
          </p>
          <h4 className="text-sm font-bold text-slate-900 pt-2">1. Product Information &amp; Claims</h4>
          <p>
            Aroosa Care strives to ensure all descriptions, water purity percentages (99.9%), pack sizes (72 wipes), and botanical ingredients are accurate. Our wipes are dermatologically tested for newborn and infant use.
          </p>
          <h4 className="text-sm font-bold text-slate-900 pt-2">2. Orders &amp; Pricing</h4>
          <p>
            Orders placed via WhatsApp or phone are subject to stock availability and address confirmation. Prices are displayed in USD/INR and include applicable taxes unless stated otherwise.
          </p>
          <h4 className="text-sm font-bold text-slate-900 pt-2">3. Intellectual Property</h4>
          <p>
            All brand trademarks, packaging graphics, product photography, and text content belong to Aroosa Care. Reproduction without written consent is prohibited.
          </p>
        </div>
      ),
    },
    shipping: {
      title: 'Shipping & Returns Policy',
      icon: Truck,
      updated: 'October 20, 2026',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            We take pride in delivering fresh, sealed Aroosa baby wipes safely to your doorstep.
          </p>
          <h4 className="text-sm font-bold text-slate-900 pt-2">1. Dispatch &amp; Delivery Timelines</h4>
          <p>
            Orders are processed and dispatched within 24 to 48 business hours. Typical delivery takes 2 to 5 business days depending on your location.
          </p>
          <h4 className="text-sm font-bold text-slate-900 pt-2">2. Freshness &amp; Moisture Guarantee</h4>
          <p>
            Every pack of Aroosa wipes is delivered with an airtight snap lid and safety seal to ensure optimal moisture. If a package arrives damaged or defective, please contact our support team within 48 hours for an immediate replacement.
          </p>
          <h4 className="text-sm font-bold text-slate-900 pt-2">3. Support Contact</h4>
          <p>
            For delivery status or order assistance, WhatsApp or call us directly at <strong>8714514447</strong>.
          </p>
        </div>
      ),
    },
  };

  const current = contentMap[type];
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                {current.title}
              </h3>
              <p className="text-[11px] text-slate-500">
                Last updated: {current.updated} · Aroosa Care
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {current.body}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
