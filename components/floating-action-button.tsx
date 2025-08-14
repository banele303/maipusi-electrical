"use client";

import { useState } from "react";
import { Phone, Plus, X } from "lucide-react";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
);

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Toggle menu clicked, current state:', isOpen);
    setIsOpen(!isOpen);
  };

  const phoneNumber = "27798131590";
  const whatsappNumber = "27790959784"; // South African format for WhatsApp
  const whatsappMessage = "Hi! I'm interested in your services. Can you help me?";

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Buttons */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex flex-col gap-4 animate-in slide-in-from-bottom-2 duration-300">
          {/* WhatsApp Button */}
          <div className="flex items-center gap-4 group">
            <div className="bg-gradient-to-r from-gray-900 to-black text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              WhatsApp
            </div>
            <button
              onClick={handleWhatsApp}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative overflow-hidden"
              type="button"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <WhatsAppIcon className="h-8 w-8 text-white relative z-10" />
            </button>
          </div>

          {/* Call Button */}
          <div className="flex items-center gap-4 group">
            <div className="bg-gradient-to-r from-gray-900 to-black text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Call Now
            </div>
            <button
              onClick={handleCall}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative overflow-hidden"
              type="button"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <Phone className="h-7 w-7 text-white relative z-10" />
            </button>
          </div>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={toggleMenu}
        className={`w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer flex items-center justify-center relative overflow-hidden group ${
          isOpen 
            ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transform rotate-45' 
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
        }`}
        type="button"
      >
        {/* Ripple effect */}
        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-active:scale-100 transition-transform duration-200"></div>
        
        {isOpen ? (
          <X className="h-7 w-7 text-white relative z-10" />
        ) : (
          <Plus className="h-7 w-7 text-white relative z-10" />
        )}
      </button>

      {/* Enhanced Pulse Animation for Main Button */}
      {!isOpen && (
        <>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 animate-ping opacity-20 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse opacity-10 pointer-events-none"></div>
        </>
      )}
    </div>
  );
}
