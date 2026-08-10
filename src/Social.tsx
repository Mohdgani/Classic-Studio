import React from "react";
import { MessageCircle, Instagram } from "lucide-react";

const SocialControls: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-md z-50 flex gap-4">
      {/* WhatsApp */}
      <a
        href="https://wa.me/918838912438?text=I'd%20like%20to%20inquire%20about%20your%20suit%20stitching%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-gold transition-colors"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-xs font-semibold">WhatsApp</span>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-gold transition-colors"
      >
        <Instagram className="h-5 w-5" />
        <span className="text-xs font-semibold">Instagram</span>
      </a>
    </div>
  );
};

export default SocialControls;
