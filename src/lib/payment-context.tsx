"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type CartItem = {
  id: string;
  title: string;
  artist: string;
  price: number;
  quantity: number;
  imageUrl: string;
  type: "song" | "album" | "event" | "tip" | "gift" | "subscription";
  artistId?: string;
  description?: string;
};

export type PaymentMethod = {
  id: string;
  type: "card" | "paypal" | "crypto";
  last4?: string;
  brand?: string;
  email?: string;
  wallet?: string;
};

export type Subscription = {
  id: string;
  name: string;
  price: number;
  period: "monthly" | "yearly";
  features: string[];
  isActive: boolean;
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

  // Subscription management
  currentSubscription: Subscription;
  availableSubscriptions: Subscription[];
  upgradeSubscription: (subscriptionId: string) => Promise<boolean>;
  cancelSubscription: () => Promise<boolean>;
  isPaidUser: boolean;
  hasAccess: (feature: string) => boolean;

  // Artist payments
  tipArtist: (artistId: string, amount: number, message?: string) => void;
  buyAlbum: (albumId: string, artistId: string, price: number) => void;
  giftToArtist: (artistId: string, amount: number, message?: string) => void;
  processDirectPayment: (artistId: string, amount: number, type: 'tip' | 'gift' | 'album') => Promise<boolean>;
};

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

// Mock subscription plans
const SUBSCRIPTION_PLANS: Subscription[] = [
  {
    id: "free",
    name: "SPIIN Free",
    price: 0,
    period: "monthly",
    features: [
      "Basic music streaming",
      "Limited skips (5 per hour)",
      "Standard audio quality",
      "Ads between tracks",
      "Basic artist profiles"
    ],
    isActive: true
  },
  {
    id: "premium",
    name: "SPIIN Premium",
    price: 10,
    period: "monthly",
    features: [
      "Unlimited music streaming",
      "Unlimited skips",
      "High quality audio (320kbps)",
      "No ads",
      "Exclusive artist content",
      "Early access to new releases",
      "Direct artist messaging",
      "Download for offline listening",
      "Custom playlists unlimited",
      "Artist meet & greet opportunities",
      "Support artists directly with tips",
      "Access to premium albums",
      "Exclusive live sessions",
      "VIP access to SPIIN Events",
      "Priority customer support",
      "Exclusive merchandise discounts"
    ],
    isActive: false
  }
];

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
  const [currentSubscription, setCurrentSubscription] = useState<Subscription>(SUBSCRIPTION_PLANS[0]);
  const [availableSubscriptions] = useState<Subscription[]>(SUBSCRIPTION_PLANS);

  const isPaidUser = currentSubscription.id === 'premium';

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

  // Subscription management
  const upgradeSubscription = useCallback(async (subscriptionId: string): Promise<boolean> => {
    const subscription = availableSubscriptions.find(sub => sub.id === subscriptionId);
    if (subscription) {
      setCurrentSubscription(subscription);
      // Successfully upgraded subscription
      return true;
    }
    return false;
  }, [availableSubscriptions]);

  const cancelSubscription = useCallback(async (): Promise<boolean> => {
    setCurrentSubscription(SUBSCRIPTION_PLANS[0]); // Back to free
    // Successfully cancelled subscription
    return true;
  }, []);

  const hasAccess = useCallback((feature: string): boolean => {
    const premiumFeatures = [
      'unlimited_skips',
      'high_quality_audio',
      'no_ads',
      'exclusive_content',
      'early_access',
      'direct_messaging',
      'offline_download',
      'unlimited_playlists',
      'meet_greet',
      'tip_artists',
      'premium_albums',
      'live_sessions'
    ];

    if (premiumFeatures.includes(feature)) {
      return isPaidUser;
    }
    return true; // Free features
  }, [isPaidUser]);

  // Artist payment functions
  const tipArtist = useCallback((artistId: string, amount: number, message?: string) => {
    const tipItem: Omit<CartItem, "quantity"> = {
      id: `tip-${artistId}-${Date.now()}`,
      title: `Tip ${message ? `"${message}"` : ''}`,
      artist: artistId,
      price: amount,
      imageUrl: '/placeholder-tip.jpg',
      type: 'tip',
      artistId,
      description: message || 'Show appreciation to the artist'
    };
    addToCart(tipItem);
  }, [addToCart]);

  const giftToArtist = useCallback((artistId: string, amount: number, message?: string) => {
    const giftItem: Omit<CartItem, "quantity"> = {
      id: `gift-${artistId}-${Date.now()}`,
      title: `Gift ${message ? `"${message}"` : ''}`,
      artist: artistId,
      price: amount,
      imageUrl: '/placeholder-gift.jpg',
      type: 'gift',
      artistId,
      description: message || 'Send a gift to the artist'
    };
    addToCart(giftItem);
  }, [addToCart]);

  const buyAlbum = useCallback((albumId: string, artistId: string, price: number) => {
    const albumItem: Omit<CartItem, "quantity"> = {
      id: albumId,
      title: 'Album Purchase',
      artist: artistId,
      price: price,
      imageUrl: '/placeholder-album.jpg',
      type: 'album',
      artistId,
      description: 'Full album access'
    };
    addToCart(albumItem);
  }, [addToCart]);

  const processDirectPayment = useCallback(async (artistId: string, amount: number, type: 'tip' | 'gift' | 'album'): Promise<boolean> => {
    // Mock payment processing
    return new Promise((resolve) => {
      setTimeout(() => {
        // Successfully processed payment
        resolve(true);
      }, 2000);
    });
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
    addToPurchaseHistory,
    currentSubscription,
    availableSubscriptions,
    upgradeSubscription,
    cancelSubscription,
    isPaidUser,
    hasAccess,
    tipArtist,
    buyAlbum,
    giftToArtist,
    processDirectPayment
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