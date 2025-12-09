"use client";

import React, { use, useState, useEffect } from "react";
import { useAuth } from "@/lib/auth-context";
import { useMedia } from "@/lib/media-context";
import { getArtistById } from "@/lib/artistData";
import AudioPlayer from "@/components/audio-player";
import VideoPlayer from "@/components/video-player";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Play, Pause, SkipForward, SkipBack, Heart, Share, Download } from "lucide-react";

interface PlayerPageProps {
  params: Promise<{ artistId: string }>;
}

export default function PlayerPage({ params }: PlayerPageProps) {
  const { artistId } = use(params);
  const { user } = useAuth();
  const { currentTrack, isPlaying, playTrack, pauseTrack, nextTrack, previousTrack } = useMedia();
  const [currentView, setCurrentView] = useState<'audio' | 'video'>('audio');
  const [selectedSong, setSelectedSong] = useState(0);

  const artist = getArtistById(artistId);

  if (!artist) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artist Not Found</h1>
          <Link href="/explore" className="text-brand-accent hover:underline">
            Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  const handlePlaySong = (songIndex: number) => {
    const song = artist.recentSongs[songIndex];
    setSelectedSong(songIndex);
    playTrack({
      id: song.id,
      title: song.title,
      artist: artist.name,
      cover: song.cover,
      audioSrc: song.audioSrc,
      videoSrc: song.videoSrc,
      hasAudio: song.hasAudio,
      hasVideo: song.hasVideo
    });
  };

  const currentSong = artist.recentSongs[selectedSong];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-brand-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/explore"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Explore
          </Link>
          <h1 className="text-xl font-bold">Music Player</h1>
          <div className="w-20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Artist Info & Playlist */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 mb-6">
              <div className="relative">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover rounded-xl mb-4"
                />
                {artist.verified && (
                  <div className="absolute top-3 right-3 bg-blue-500 rounded-full p-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>

              <h2 className="text-2xl font-bold mb-2">{artist.name}</h2>
              <p className="text-brand-accent text-sm mb-2">{artist.genre}</p>
              <p className="text-white/70 text-sm mb-4">{artist.followers} followers • {artist.monthlyListeners} monthly listeners</p>

              <div className="flex gap-3 mb-4">
                <button className="glass px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-white/10 transition-colors">
                  <Heart size={16} />
                  Follow
                </button>
                <button className="glass px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-white/10 transition-colors">
                  <Share size={16} />
                  Share
                </button>
              </div>
            </div>

            {/* Playlist */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Songs</h3>
              <div className="space-y-3">
                {artist.recentSongs.map((song, index) => (
                  <div
                    key={song.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedSong === index
                        ? 'bg-brand-accent/20 border border-brand-accent/30'
                        : 'hover:bg-white/5'
                    }`}
                    onClick={() => handlePlaySong(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                        <Image
                          src={song.cover}
                          alt={song.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <Play size={16} className="text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{song.title}</p>
                        <p className="text-white/60 text-sm">{song.streams} streams</p>
                      </div>
                      <div className="text-white/40 text-sm">{song.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Player */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-6 mb-6">
              {/* View Toggle */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setCurrentView('audio')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentView === 'audio'
                      ? 'bg-brand-accent text-white'
                      : 'bg-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  Audio Player
                </button>
                <button
                  onClick={() => setCurrentView('video')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentView === 'video'
                      ? 'bg-brand-accent text-white'
                      : 'bg-white/10 text-white/70 hover:text-white'
                  }`}
                  disabled={!currentSong?.hasVideo}
                >
                  Video Player
                </button>
              </div>

              {/* Now Playing Info */}
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={currentSong.cover}
                  alt={currentSong.title}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold">{currentSong.title}</h3>
                  <p className="text-brand-accent">{artist.name}</p>
                  <p className="text-white/60 text-sm">Released {currentSong.releaseDate}</p>
                </div>
              </div>

              {/* Player Component */}
              <div className="bg-black/20 rounded-xl p-6">
                {currentView === 'audio' ? (
                  currentSong.hasAudio && currentSong.audioSrc ? (
                    <AudioPlayer
                      src={currentSong.audioSrc}
                      title={currentSong.title}
                      artist={artist.name}
                      cover={currentSong.cover}
                    />
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-white/60">Audio not available for this track</p>
                    </div>
                  )
                ) : (
                  currentSong.hasVideo && currentSong.videoSrc ? (
                    <VideoPlayer
                      src={currentSong.videoSrc}
                      poster={currentSong.cover}
                      title={currentSong.title}
                    />
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-white/60">Video not available for this track</p>
                    </div>
                  )
                )}
              </div>

              {/* Player Controls */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={previousTrack}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <SkipBack size={20} />
                </button>
                <button
                  onClick={isPlaying ? pauseTrack : () => handlePlaySong(selectedSong)}
                  className="p-4 rounded-full bg-brand-accent hover:bg-brand-accent/80 transition-colors"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button
                  onClick={nextTrack}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <SkipForward size={20} />
                </button>
              </div>
            </div>

            {/* Song Info */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-lg font-bold mb-4">About This Track</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-white/60">Release Date</p>
                  <p className="font-medium">{currentSong.releaseDate}</p>
                </div>
                <div>
                  <p className="text-white/60">Streams</p>
                  <p className="font-medium">{currentSong.streams}</p>
                </div>
                <div>
                  <p className="text-white/60">Duration</p>
                  <p className="font-medium">{currentSong.duration}</p>
                </div>
                <div>
                  <p className="text-white/60">Genre</p>
                  <p className="font-medium">{artist.genre}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}