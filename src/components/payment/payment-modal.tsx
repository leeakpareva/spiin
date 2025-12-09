"use client";

import { useState } from "react";
import Image from "next/image";
import { usePayment } from "@/lib/payment-context";

type Props = {
  item: {
    id: string;
    title: string;
    artist: string;
    price: number;
    imageUrl: string;
    type: "song" | "album" | "event";
  };
  onClose: () => void;
};

export default function PaymentModal({ item, onClose }: Props) {
  const { 
    paymentMethods, 
    selectedPaymentMethod, 
    setSelectedPaymentMethod,
    processingPayment,
    setProcessingPayment,
    addToPurchaseHistory
  } = usePayment();

  const [paymentStep, setPaymentStep] = useState<"select" | "confirm" | "success">("select");
  const [newCardDetails, setNewCardDetails] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: ""
  });

  const handlePayment = async () => {
    setProcessingPayment(true);
    setPaymentStep("confirm");
    
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStep("success");
      addToPurchaseHistory([{
        ...item,
        quantity: 1
      }]);
      setProcessingPayment(false);
      
      // Close modal after success
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-brand-900 p-6 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-white/60 hover:bg-white/10 transition-colors"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {paymentStep === "select" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-2">Complete Purchase</h2>
              <p className="text-sm text-white/60">Pay {item.artist} directly</p>
            </div>

            {/* Item details */}
            <div className="flex gap-4 rounded-xl bg-brand-800/50 p-4">
              <div className="h-16 w-16 rounded-lg bg-brand-700 overflow-hidden">
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-white/60">{item.artist}</p>
                <p className="mt-1 text-lg font-bold text-brand-accent">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Payment methods */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Payment Method</h3>
              
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPaymentMethod(method)}
                  className={`w-full rounded-xl border p-4 text-left transition-all ${
                    selectedPaymentMethod?.id === method.id
                      ? "border-brand-accent bg-brand-accent/10"
                      : "border-white/10 bg-brand-800/30 hover:bg-brand-800/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {method.type === "card" && (
                        <div className="rounded bg-white/10 p-2">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                          </svg>
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium">
                          {method.brand} •••• {method.last4}
                        </p>
                        <p className="text-xs text-white/60">Card</p>
                      </div>
                    </div>
                    {selectedPaymentMethod?.id === method.id && (
                      <div className="h-5 w-5 rounded-full bg-brand-accent flex items-center justify-center">
                        <svg className="h-3 w-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </button>
              ))}

              {/* Add new card option */}
              <button
                className="w-full rounded-xl border border-dashed border-white/20 p-4 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded bg-white/10 p-2">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <p className="text-sm">Add New Payment Method</p>
                </div>
              </button>
            </div>

            {/* Purchase button */}
            <button
              onClick={handlePayment}
              disabled={!selectedPaymentMethod}
              className="w-full rounded-full bg-gradient-to-r from-brand-accent to-emerald-500 py-3 text-sm font-semibold text-black shadow-lg shadow-brand-accent/25 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Pay ${item.price.toFixed(2)}
            </button>

            <p className="text-center text-xs text-white/50">
              🔒 Secure payment · 100% goes to {item.artist}
            </p>
          </div>
        )}

        {paymentStep === "confirm" && (
          <div className="space-y-6 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-brand-accent/20 flex items-center justify-center animate-pulse">
              <svg className="h-8 w-8 text-brand-accent animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-2">Processing Payment</h2>
              <p className="text-sm text-white/60">
                Sending ${item.price.toFixed(2)} to {item.artist}
              </p>
            </div>
          </div>
        )}

        {paymentStep === "success" && (
          <div className="space-y-6 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-brand-accent flex items-center justify-center">
              <svg className="h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-2">Payment Successful!</h2>
              <p className="text-sm text-white/60">
                You now own "{item.title}"
              </p>
              <p className="mt-2 text-xs text-brand-accent">
                ${item.price.toFixed(2)} sent to {item.artist}
              </p>
            </div>

            <div className="rounded-xl bg-brand-800/50 p-4">
              <p className="text-xs text-white/60 mb-2">What's next?</p>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-brand-accent">✓</span>
                  <span>Download your purchase</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-brand-accent">✓</span>
                  <span>Access in your library</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-brand-accent">✓</span>
                  <span>Support sent to artist</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}