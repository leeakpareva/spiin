"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';

interface MediaTrack {
  id: string;
  title: string;
  artist: string;
  src: string;
  cover?: string;
  duration?: string;
  type: 'audio' | 'video';
}

interface MediaContextType {
  currentTrack: MediaTrack | null;
  isPlaying: boolean;
  playlist: MediaTrack[];
  currentIndex: number;

  // Actions
  playTrack: (track: MediaTrack) => void;
  pauseTrack: () => void;
  resumeTrack: () => void;
  stopTrack: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
  setPlaylist: (tracks: MediaTrack[], startIndex?: number) => void;
  addToPlaylist: (track: MediaTrack) => void;
  removeFromPlaylist: (trackId: string) => void;
  clearPlaylist: () => void;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export function MediaProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<MediaTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlist, setPlaylistState] = useState<MediaTrack[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const playTrack = useCallback((track: MediaTrack) => {
    setCurrentTrack(track);
    setIsPlaying(true);

    // If this track isn't in the playlist, add it
    const trackIndex = playlist.findIndex(t => t.id === track.id);
    if (trackIndex === -1) {
      setPlaylistState(prev => [...prev, track]);
      setCurrentIndex(playlist.length);
    } else {
      setCurrentIndex(trackIndex);
    }
  }, [playlist]);

  const pauseTrack = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const resumeTrack = useCallback(() => {
    if (currentTrack) {
      setIsPlaying(true);
    }
  }, [currentTrack]);

  const stopTrack = useCallback(() => {
    setIsPlaying(false);
    setCurrentTrack(null);
    setCurrentIndex(0);
  }, []);

  const nextTrack = useCallback(() => {
    if (playlist.length === 0) return;

    const nextIndex = (currentIndex + 1) % playlist.length;
    const nextTrack = playlist[nextIndex];

    if (nextTrack) {
      setCurrentTrack(nextTrack);
      setCurrentIndex(nextIndex);
      setIsPlaying(true);
    }
  }, [playlist, currentIndex]);

  const previousTrack = useCallback(() => {
    if (playlist.length === 0) return;

    const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    const prevTrack = playlist[prevIndex];

    if (prevTrack) {
      setCurrentTrack(prevTrack);
      setCurrentIndex(prevIndex);
      setIsPlaying(true);
    }
  }, [playlist, currentIndex]);

  const setPlaylist = useCallback((tracks: MediaTrack[], startIndex: number = 0) => {
    setPlaylistState(tracks);
    setCurrentIndex(startIndex);

    if (tracks.length > 0 && tracks[startIndex]) {
      setCurrentTrack(tracks[startIndex]);
    }
  }, []);

  const addToPlaylist = useCallback((track: MediaTrack) => {
    setPlaylistState(prev => {
      // Don't add duplicates
      if (prev.some(t => t.id === track.id)) {
        return prev;
      }
      return [...prev, track];
    });
  }, []);

  const removeFromPlaylist = useCallback((trackId: string) => {
    setPlaylistState(prev => {
      const newPlaylist = prev.filter(t => t.id !== trackId);
      const removedIndex = prev.findIndex(t => t.id === trackId);

      // If we removed the currently playing track
      if (currentTrack?.id === trackId) {
        if (newPlaylist.length === 0) {
          setCurrentTrack(null);
          setIsPlaying(false);
          setCurrentIndex(0);
        } else {
          // Play the next track, or the previous if we were at the end
          const newIndex = removedIndex >= newPlaylist.length ? newPlaylist.length - 1 : removedIndex;
          setCurrentTrack(newPlaylist[newIndex]);
          setCurrentIndex(newIndex);
        }
      } else {
        // Adjust current index if needed
        if (removedIndex < currentIndex) {
          setCurrentIndex(prev => prev - 1);
        }
      }

      return newPlaylist;
    });
  }, [currentTrack]);

  const clearPlaylist = useCallback(() => {
    setPlaylistState([]);
    setCurrentTrack(null);
    setIsPlaying(false);
    setCurrentIndex(0);
  }, []);

  const value = {
    currentTrack,
    isPlaying,
    playlist,
    currentIndex,
    playTrack,
    pauseTrack,
    resumeTrack,
    stopTrack,
    nextTrack,
    previousTrack,
    setPlaylist,
    addToPlaylist,
    removeFromPlaylist,
    clearPlaylist,
  };

  return (
    <MediaContext.Provider value={value}>
      {children}
    </MediaContext.Provider>
  );
}

export function useMedia() {
  const context = useContext(MediaContext);
  if (context === undefined) {
    throw new Error('useMedia must be used within a MediaProvider');
  }
  return context;
}