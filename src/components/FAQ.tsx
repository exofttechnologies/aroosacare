import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'What makes Aroosa baby wipes safe and gentle for newborns?',
    answer:
      'Aroosa baby wipes are crafted with 99.9% pharmaceutical-grade pure water and ultra-soft cotton fibers. They are dermatologist-tested and formulated to protect your newborn’s delicate skin barrier without irritation during diaper changes, meal times, and everyday cleanups.',
  },
  {
    question: 'Do Aroosa wipes contain alcohol or parabens?',
    answer:
      'No. Aroosa wipes are 100% alcohol-free and free from parabens, harsh sulfates, and toxic additives. The formulation is strictly created to safeguard sensitive baby skin.',
  },
  {
    question: 'Are Aroosa baby wipes fragranced?',
    answer:
      'Yes, Aroosa baby wipes are lightly infused with a mild, pleasant fragrance specially tested for infant safety. It leaves a delicate, clean scent without overpowering sensitive little noses.',
  },
  {
    question: 'What skin-soothing botanicals are included in the formula?',
    answer:
      'Our signature baby care formula is enriched with cold-pressed aloe vera, natural almond essence, vitamin E, and chamomile extract to soothe redness and restore essential hydration.',
  },
  {
    question: 'How many wipes are in a pack, and how do they stay moist?',
    answer:
      'Each pack contains 72 thick, cross-woven wipes. The pack features an airtight snap-tight flip lid and moisture seal that preserves dampness from the very first wipe to the 72nd.',
  },
  {
    question: 'How do I place an order for Aroosa baby wipes?',
    answer:
      'You can easily place an order by clicking any "Order" button on the website. This directly connects you to our customer care team via WhatsApp (+91 8714514447), or you can email us at info.thearoosa@gmail.com.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Questions &amp; Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-[1.15]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-3.5">
            Everything you need to know about Aroosa baby wipes, ingredients, and everyday newborn care.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white border-teal-200 shadow-sm'
                    : 'bg-white/70 hover:bg-white border-slate-200/80 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-teal-50 text-teal-700 rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helpful Footer Note */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-teal-600" />
          <span>Have more questions? Contact our customer care anytime at <strong>8714514447</strong></span>
        </div>

      </div>
    </section>
  );
};
