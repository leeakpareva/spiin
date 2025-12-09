"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type CartItem = {
  id: string;
  title: string;
  artist: string;
  price: number;
  quantity: number;
  imageUrl: string;
  type: "song" | "album" | "event";
};

export type PaymentMethod = {
  id: string;
  type: "card" | "paypal" | "crypto";
  last4?: string;
  brand?: string;
  email?: string;
  wallet?: string;
};

type PaymentContextType = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  paymentMethods: PaymentMethod[];
  addPaymentMethod: (method: PaymentMethod) => void;
  removePaymentMethod: (id: string) => void;
  selectedPaymentMethod: PaymentMethod | null;
  setSelectedPaymentMethod: (method: PaymentMethod | null) => void;
  processingPayment: boolean;
  setProcessingPayment: (processing: boolean) => void;
  purchaseHistory: CartItem[];
  addToPurchaseHistory: (items: CartItem[]) => void;
};

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "demo-card",
      type: "card",
      last4: "4242",
      brand: "Visa"
    }
  ]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [purchaseHistory, setPurchaseHistory] = useState<CartItem[]>([]);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const getCartCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const addPaymentMethod = useCallback((method: PaymentMethod) => {
    setPaymentMethods((prev) => [...prev, method]);
  }, []);

  const removePaymentMethod = useCallback((id: string) => {
    setPaymentMethods((prev) => prev.filter((method) => method.id !== id));
    if (selectedPaymentMethod?.id === id) {
      setSelectedPaymentMethod(null);
    }
  }, [selectedPaymentMethod]);

  const addToPurchaseHistory = useCallback((items: CartItem[]) => {
    setPurchaseHistory((prev) => [...prev, ...items]);
  }, []);

  const value: PaymentContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    paymentMethods,
    addPaymentMethod,
    removePaymentMethod,
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    processingPayment,
    setProcessingPayment,
    purchaseHistory,
    addToPurchaseHistory
  };

  return <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>;
}

export function usePayment() {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
}