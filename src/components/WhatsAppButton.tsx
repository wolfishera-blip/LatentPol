import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WHATSAPP_NUMBER = '919670617806';
const PRE_FILLED_MESSAGE = encodeURIComponent(
  'नमस्कार LATENTPOL, मैं आपकी services के बारे में जानकारी लेना चाहता/चाहती हूँ।'
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${PRE_FILLED_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="WhatsApp पर संपर्क करें"
    >
      <MessageCircle size={26} />
      <span className="whatsapp-fab__tooltip hindi-text">WhatsApp पर बात करें</span>
    </a>
  );
}
