export const WHATSAPP_NUMBER = '918714514447';

export const openWhatsAppOrder = (productName?: string) => {
  const item = productName || 'Aroosa Baby Wipes (72 Pcs Pack)';
  const message = `Hello Aroosa Care, I would like to order ${item}. Please provide pricing and delivery details.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};
