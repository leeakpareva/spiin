"use client";

import React, { useState } from 'react';
import { usePayment } from '@/lib/payment-context';
import { useAuth } from '@/lib/auth-context';
import { Heart, Gift, ShoppingBag, Star, X, DollarSign } from 'lucide-react';
import { getArtistById } from '@/lib/artistData';

interface ArtistPaymentProps {
  artistId: string;
}

export default function ArtistPayment({ artistId }: ArtistPaymentProps) {
  const { tipArtist, giftToArtist, buyAlbum, hasAccess, isPaidUser } = usePayment();
  const { user } = useAuth();
  const [activeModal, setActiveModal] = useState<'tip' | 'gift' | 'album' | null>(null);
  const [amount, setAmount] = useState(5);
  const [customAmount, setCustomAmount] = useState('');
  const [message, setMessage] = useState('');

  const artist = getArtistById(artistId);
  if (!artist) return null;

  const handleTip = () => {
    const tipAmount = customAmount ? parseFloat(customAmount) : amount;
    if (tipAmount > 0) {
      tipArtist(artistId, tipAmount, message);
      setActiveModal(null);
      setMessage('');
      setCustomAmount('');
    }
  };

  const handleGift = () => {
    const giftAmount = customAmount ? parseFloat(customAmount) : amount;
    if (giftAmount > 0) {
      giftToArtist(artistId, giftAmount, message);
      setActiveModal(null);
      setMessage('');
      setCustomAmount('');
    }
  };

  const handleBuyAlbum = (albumId: string, price: number) => {
    buyAlbum(albumId, artistId, price);
    setActiveModal(null);
  };

  const predefinedAmounts = [5, 10, 25, 50, 100];

  const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-brand-800 rounded-2xl p-6 max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Support {artist.name}</h3>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full">
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );

  if (!user) {
    return (
      <div className="bg-brand-800/40 rounded-2xl p-6 text-center">
        <p className="text-white/60 mb-4">Login to support this artist</p>
        <button className="bg-brand-accent text-white px-6 py-2 rounded-full font-semibold">
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Payment Options */}
      <div className="bg-brand-800/40 rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Heart size={20} className="text-red-500" />
          Support {artist.name}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Tip Artist */}
          <button
            onClick={() => setActiveModal('tip')}
            className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl hover:from-green-500 hover:to-emerald-500 transition-all"
          >
            <DollarSign size={20} />
            <div className="text-left">
              <div className="font-semibold">Tip Artist</div>
              <div className="text-sm opacity-90">Show appreciation</div>
            </div>
          </button>

          {/* Gift */}
          <button
            onClick={() => setActiveModal('gift')}
            className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            <Gift size={20} />
            <div className="text-left">
              <div className="font-semibold">Send Gift</div>
              <div className="text-sm opacity-90">Special message</div>
            </div>
          </button>

          {/* Buy Albums */}
          <button
            onClick={() => setActiveModal('album')}
            className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all"
          >
            <ShoppingBag size={20} />
            <div className="text-left">
              <div className="font-semibold">Buy Albums</div>
              <div className="text-sm opacity-90">Support directly</div>
            </div>
          </button>
        </div>
      </div>

      {/* Premium Features */}
      {!isPaidUser && (
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Star className="text-yellow-300" size={24} />
            <h3 className="text-lg font-semibold">Upgrade to SPIIN Premium</h3>
          </div>
          <p className="text-sm opacity-90 mb-4">
            Get unlimited access to tip artists, exclusive content, and premium features for just $10/month
          </p>
          <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Upgrade Now
          </button>
        </div>
      )}

      {/* Tip Modal */}
      {activeModal === 'tip' && (
        <Modal onClose={() => setActiveModal(null)}>
          <div className="space-y-4">
            <div className="text-center">
              <DollarSign size={32} className="mx-auto text-green-500 mb-2" />
              <p className="text-sm text-white/70">Show your appreciation with a tip</p>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {predefinedAmounts.map((preset) => (
                <button
                  key={preset}
                  onClick={() => { setAmount(preset); setCustomAmount(''); }}
                  className={`p-2 rounded-lg text-sm font-semibold transition-colors ${
                    amount === preset && !customAmount
                      ? 'bg-green-600 text-white'
                      : 'bg-brand-700 hover:bg-brand-600'
                  }`}
                >
                  ${preset}
                </button>
              ))}
            </div>

            <div>
              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full p-3 bg-brand-700 rounded-lg border border-white/10 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <textarea
                placeholder="Add a message (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 bg-brand-700 rounded-lg border border-white/10 text-white placeholder:text-white/50 resize-none"
                rows={3}
              />
            </div>

            <button
              onClick={handleTip}
              disabled={(!customAmount && !amount) || (customAmount && parseFloat(customAmount) <= 0)}
              className="w-full bg-green-600 hover:bg-green-500 disabled:bg-gray-600 disabled:cursor-not-allowed p-3 rounded-lg font-semibold transition-colors"
            >
              Tip ${customAmount || amount}
            </button>
          </div>
        </Modal>
      )}

      {/* Gift Modal */}
      {activeModal === 'gift' && (
        <Modal onClose={() => setActiveModal(null)}>
          <div className="space-y-4">
            <div className="text-center">
              <Gift size={32} className="mx-auto text-purple-500 mb-2" />
              <p className="text-sm text-white/70">Send a special gift with a message</p>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {predefinedAmounts.map((preset) => (
                <button
                  key={preset}
                  onClick={() => { setAmount(preset); setCustomAmount(''); }}
                  className={`p-2 rounded-lg text-sm font-semibold transition-colors ${
                    amount === preset && !customAmount
                      ? 'bg-purple-600 text-white'
                      : 'bg-brand-700 hover:bg-brand-600'
                  }`}
                >
                  ${preset}
                </button>
              ))}
            </div>

            <div>
              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full p-3 bg-brand-700 rounded-lg border border-white/10 text-white placeholder:text-white/50"
              />
            </div>

            <div>
              <textarea
                placeholder="Gift message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 bg-brand-700 rounded-lg border border-white/10 text-white placeholder:text-white/50 resize-none"
                rows={3}
                required
              />
            </div>

            <button
              onClick={handleGift}
              disabled={(!customAmount && !amount) || (customAmount && parseFloat(customAmount) <= 0) || !message.trim()}
              className="w-full bg-purple-600 hover:bg-purple-500 disabled:bg-gray-600 disabled:cursor-not-allowed p-3 rounded-lg font-semibold transition-colors"
            >
              Send Gift ${customAmount || amount}
            </button>
          </div>
        </Modal>
      )}

      {/* Album Modal */}
      {activeModal === 'album' && (
        <Modal onClose={() => setActiveModal(null)}>
          <div className="space-y-4">
            <div className="text-center">
              <ShoppingBag size={32} className="mx-auto text-blue-500 mb-2" />
              <p className="text-sm text-white/70">Purchase albums to support the artist</p>
            </div>

            <div className="space-y-3">
              {artist.albums?.map((album) => (
                <div key={album.id} className="flex items-center justify-between p-3 bg-brand-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img src={album.cover} alt={album.title} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <div className="font-semibold">{album.title}</div>
                      <div className="text-sm text-white/60">{album.year}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleBuyAlbum(album.id, 15)} // Default album price $15
                    className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    $15
                  </button>
                </div>
              )) || (
                <p className="text-center text-white/60">No albums available for purchase</p>
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}