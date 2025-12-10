"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface MiniMusicPlayerProps {
  audioSrc: string;
  title?: string;
}

export default function MiniMusicPlayer({ audioSrc, title = "Wahala 4" }: MiniMusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;

      const handleEnded = () => setIsPlaying(false);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);

      return () => {
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
      };
    }
  }, [volume]);

  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      <div className="bg-gradient-to-r from-brand-800/90 to-brand-700/90 backdrop-blur-md border border-white/20 rounded-full shadow-2xl shadow-black/50 p-3 md:p-4">
        <div className="flex items-center gap-2 md:gap-3">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center hover:from-orange-400 hover:to-red-400 transition-colors shadow-lg"
          >
            {isPlaying ? (
              <Pause size={14} className="text-white md:w-4 md:h-4" />
            ) : (
              <Play size={14} className="text-white ml-0.5 md:w-4 md:h-4" />
            )}
          </button>

          {/* Track Info - Hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-2 md:gap-3">
            <div>
              <div className="text-white text-xs md:text-sm font-medium">{title}</div>
              <div className="text-white/60 text-xs">Background Music</div>
            </div>

            {/* Volume Control - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-2">
              <Volume2 size={14} className="text-white/60" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-white/20 rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
                  [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Hidden Audio Element */}
        <audio ref={audioRef} loop>
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}