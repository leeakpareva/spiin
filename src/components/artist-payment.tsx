"use client";

import React, { useState } from 'react';
import { usePayment } from '@/lib/payment-context';
import { useAuth } from '@/lib/auth-context';
import { Heart, Gift, ShoppingBag, Star, X, DollarSign, Music, Calendar, MessageCircle } from 'lucide-react';
import { getArtistById } from '@/lib/artistData';

interface ArtistPaymentProps {
  artistId: string;
}

export default function ArtistPayment({ artistId }: ArtistPaymentProps) {
  const { tipArtist, giftToArtist, buyAlbum, isPaidUser } = usePayment();
  const { user } = useAuth();
  const [activeModal, setActiveModal] = useState<'tip' | 'gift' | 'album' | null>(null);
  const [amount, setAmount] = useState(5);
  const [customAmount, setCustomAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const artist = getArtistById(artistId);
  if (!artist) return null;

  const handleTip = async () => {
    setIsProcessing(true);
    const tipAmount = customAmount ? parseFloat(customAmount) : amount;
    if (tipAmount > 0) {
      await tipArtist(artistId, tipAmount, message);
      setActiveModal(null);
      setMessage('');
      setCustomAmount('');
    }
    setIsProcessing(false);
  };

  const handleGift = async () => {
    setIsProcessing(true);
    const giftAmount = customAmount ? parseFloat(customAmount) : amount;
    if (giftAmount > 0) {
      await giftToArtist(artistId, giftAmount, message);
      setActiveModal(null);
      setMessage('');
      setCustomAmount('');
    }
    setIsProcessing(false);
  };

  const handleBuyAlbum = async (albumId: string, price: number) => {
    setIsProcessing(true);
    await buyAlbum(albumId, artistId, price);
    setActiveModal(null);
    setIsProcessing(false);
  };

  const predefinedAmounts = [5, 10, 25, 50, 100];

  const Modal = ({ children, onClose, title }: { children: React.ReactNode; onClose: () => void; title: string }) => (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-brand-800 to-brand-700 border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} className="text-white/60" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Artist Support Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <Heart size={24} className="text-red-500" />
          <h2 className="text-2xl font-bold text-white">Support {artist.name}</h2>
        </div>
        <p className="text-white/60 max-w-md mx-auto">
          Show your appreciation and help {artist.name} continue creating amazing music
        </p>
      </div>

      {/* Payment Options Grid */}
      <div className="grid gap-4">
        {/* Tip Artist */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 hover:from-green-500/30 hover:to-emerald-500/30 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-500 rounded-full">
                <DollarSign size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Tip Artist</h3>
                <p className="text-green-300 text-sm">Show direct appreciation</p>
              </div>
            </div>
            <button
              onClick={() => setActiveModal('tip')}
              className="bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Tip Now
            </button>
          </div>
          <p className="text-white/70 text-sm">
            Send a direct tip to {artist.name} to show your support for their music.
          </p>
        </div>

        {/* Send Gift */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 hover:from-purple-500/30 hover:to-pink-500/30 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <Gift size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Send Gift</h3>
                <p className="text-purple-300 text-sm">Special message included</p>
              </div>
            </div>
            <button
              onClick={() => setActiveModal('gift')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Send Gift
            </button>
          </div>
          <p className="text-white/70 text-sm">
            Send a gift with a personal message to make it extra special.
          </p>
        </div>

        {/* Buy Albums */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-6 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                <Music size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Buy Albums</h3>
                <p className="text-blue-300 text-sm">Support with purchases</p>
              </div>
            </div>
            <button
              onClick={() => setActiveModal('album')}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Browse
            </button>
          </div>
          <p className="text-white/70 text-sm">
            Purchase {artist.name}'s albums and help them earn directly from their art.
          </p>
        </div>
      </div>

      {/* Premium Features Upsell */}
      {!isPaidUser && (
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/40 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
              <Star size={20} className="text-black" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">🌟 SPIIN Premium</h3>
              <p className="text-yellow-200 mb-4">
                Unlock exclusive features and support artists even more effectively
              </p>
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <MessageCircle size={14} className="text-yellow-400" />
                  <span>Direct messaging</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Calendar size={14} className="text-yellow-400" />
                  <span>VIP Events access</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Music size={14} className="text-yellow-400" />
                  <span>Exclusive content</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-full font-bold hover:from-yellow-400 hover:to-orange-400 transition-colors">
                Upgrade to Premium - $10/month
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tip Modal */}
      {activeModal === 'tip' && (
        <Modal onClose={() => setActiveModal(null)} title={`Tip ${artist.name}`}>
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-green-500/20 rounded-full flex items-center justify-center">
                <DollarSign size={24} className="text-green-400" />
              </div>
              <p className="text-white/70">Choose an amount to tip {artist.name}</p>
            </div>

            {/* Amount Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-white">Select Amount</label>
              <div className="grid grid-cols-5 gap-2">
                {predefinedAmounts.map((presetAmount) => (
                  <button
                    key={presetAmount}
                    onClick={() => {
                      setAmount(presetAmount);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-2 rounded-lg text-sm font-medium transition-colors ${
                      amount === presetAmount && !customAmount
                        ? 'bg-green-500 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    ${presetAmount}
                  </button>
                ))}
              </div>

              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-green-500 focus:outline-none"
              />
            </div>

            {/* Optional Message */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Message (Optional)</label>
              <textarea
                placeholder="Send a message with your tip..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-green-500 focus:outline-none resize-none"
              />
            </div>

            {/* Action Button */}
            <button
              onClick={handleTip}
              disabled={isProcessing}
              className="w-full bg-green-500 hover:bg-green-400 disabled:opacity-50 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              {isProcessing ? 'Processing...' : `Send $${customAmount || amount} Tip`}
            </button>
          </div>
        </Modal>
      )}

      {/* Gift Modal */}
      {activeModal === 'gift' && (
        <Modal onClose={() => setActiveModal(null)} title={`Send Gift to ${artist.name}`}>
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                <Gift size={24} className="text-purple-400" />
              </div>
              <p className="text-white/70">Send a special gift with your personal message</p>
            </div>

            {/* Amount Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-white">Gift Amount</label>
              <div className="grid grid-cols-5 gap-2">
                {predefinedAmounts.map((presetAmount) => (
                  <button
                    key={presetAmount}
                    onClick={() => {
                      setAmount(presetAmount);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-2 rounded-lg text-sm font-medium transition-colors ${
                      amount === presetAmount && !customAmount
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    ${presetAmount}
                  </button>
                ))}
              </div>

              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Your Message</label>
              <textarea
                placeholder="Write your personal message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-purple-500 focus:outline-none resize-none"
              />
            </div>

            {/* Action Button */}
            <button
              onClick={handleGift}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 disabled:opacity-50 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              {isProcessing ? 'Processing...' : `Send $${customAmount || amount} Gift`}
            </button>
          </div>
        </Modal>
      )}

      {/* Album Modal */}
      {activeModal === 'album' && (
        <Modal onClose={() => setActiveModal(null)} title={`${artist.name}'s Albums`}>
          <div className="space-y-4">
            {artist.albums.map((album) => (
              <div
                key={album.id}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Music size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{album.title}</h4>
                  <p className="text-white/60 text-sm">{album.year} • {album.type}</p>
                </div>
                <button
                  onClick={() => handleBuyAlbum(album.id, 15.99)}
                  disabled={isProcessing}
                  className="bg-blue-500 hover:bg-blue-400 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  $15.99
                </button>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
}