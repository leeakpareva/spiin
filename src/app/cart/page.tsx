"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePayment } from "@/lib/payment-context";
import PaymentModal from "@/components/payment/payment-modal";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    clearCart
  } = usePayment();

  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleCheckout = () => {
    if (cartItems.length === 1) {
      setSelectedItem(cartItems[0]);
      setShowCheckout(true);
    } else {
      // Handle multiple items checkout
      alert("Batch checkout coming soon! Please purchase items individually for now.");
    }
  };

  const total = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <div className="mx-auto h-24 w-24 rounded-full bg-brand-800/50 flex items-center justify-center">
            <svg className="h-12 w-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold">Your cart is empty</h2>
          <p className="text-sm text-white/60">Discover amazing music and support artists directly</p>
          <Link
            href="/explore"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-accent to-emerald-500 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-brand-accent/25 hover:shadow-xl transition-all"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Your Cart</h1>
            <p className="text-sm text-white/60">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-brand-800/30 p-4 hover:bg-brand-800/50 transition-colors"
                >
                  <div className="h-20 w-20 rounded-xl bg-brand-700 overflow-hidden flex-shrink-0">
                    {item.imageUrl && (
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    )}
                  </div>

                  <div className="flex-1">
                    <Link 
                      href={`/${item.type}/${item.id}`}
                      className="font-semibold hover:text-brand-accent transition-colors"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm text-white/60">{item.artist}</p>
                    
                    <div className="mt-2 flex items-center gap-4">
                      <span className="text-lg font-bold text-brand-accent">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      {item.quantity > 1 && (
                        <span className="text-xs text-white/50">
                          ${item.price.toFixed(2)} each
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-full p-2 text-white/40 hover:bg-white/10 hover:text-white/60 transition-all"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    {item.type === "event" && item.quantity > 1 && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="rounded bg-white/10 p-1 hover:bg-white/20 transition-colors"
                        >
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="rounded bg-white/10 p-1 hover:bg-white/20 transition-colors"
                        >
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="text-xs text-white/50 hover:text-white/70 transition-colors"
              >
                Clear cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-white/10 bg-brand-800/50 p-6 space-y-4">
                <h2 className="text-lg font-semibold">Order Summary</h2>
                
                <div className="space-y-2 py-4 border-t border-b border-white/10">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-white/60">
                        {item.title} {item.quantity > 1 && `x${item.quantity}`}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-2xl font-bold text-brand-accent">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full rounded-full bg-gradient-to-r from-brand-accent to-emerald-500 py-3 text-sm font-semibold text-black shadow-lg shadow-brand-accent/25 hover:shadow-xl transition-all hover:scale-105"
                  >
                    Proceed to Checkout
                  </button>
                  
                  <Link
                    href="/explore"
                    className="block w-full rounded-full border border-white/20 py-3 text-center text-sm font-semibold hover:bg-white/10 transition-all"
                  >
                    Continue Shopping
                  </Link>
                </div>

                <div className="text-center space-y-1">
                  <p className="text-xs text-white/50">
                    🔒 Secure checkout
                  </p>
                  <p className="text-xs text-white/50">
                    100% of payments go directly to artists
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCheckout && selectedItem && (
        <PaymentModal
          item={selectedItem}
          onClose={() => {
            setShowCheckout(false);
            setSelectedItem(null);
            removeFromCart(selectedItem.id);
          }}
        />
      )}
    </>
  );
}