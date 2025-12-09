"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { getArtistById } from "@/lib/artistData";
import { useAuth } from "@/lib/auth-context";
import { useMedia } from "@/lib/media-context";
import AudioPlayer from "@/components/audio-player";
import VideoPlayer from "@/components/video-player";

export default function ArtistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const artist = getArtistById(id);
  const { user } = useAuth();
  const { playTrack, currentTrack, isPlaying } = useMedia();
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState<'songs' | 'albums' | 'about'>('songs');
  const [playingMedia, setPlayingMedia] = useState<{id: string, type: 'audio' | 'video'} | null>(null);

  if (!artist) {
    return (
      <div className="min-h-screen bg-brand-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Artist not found</h1>
          <Link href="/artists" className="text-brand-accent hover:underline">
            Browse all artists
          </Link>
        </div>
      </div>
    );
  }

  const handleFollow = () => {
    if (!user) {
      window.location.href = '/login';
      return;
    }
    setIsFollowing(!isFollowing);
  };

  const handlePlayAudio = (song: any) => {
    if (!song.hasAudio || !song.audioSrc) return;

    const track = {
      id: song.id,
      title: song.title,
      artist: artist.name,
      src: song.audioSrc,
      cover: song.cover,
      duration: song.duration,
      type: 'audio' as const
    };

    playTrack(track);
    setPlayingMedia({ id: song.id, type: 'audio' });
  };

  const handlePlayVideo = (song: any) => {
    if (!song.hasVideo || !song.videoSrc) return;
    setPlayingMedia({ id: song.id, type: 'video' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-900 to-black">
      {/* Hero Section with Cover Image */}
      <div className="relative h-80 lg:h-96">
        <Image
          src={artist.coverImage}
          alt={artist.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Artist Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="max-w-7xl mx-auto flex items-end gap-6">
            <div className="relative h-32 w-32 lg:h-48 lg:w-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 pb-2">
              <div className="flex items-center gap-2 mb-1">
                {artist.verified && (
                  <span className="text-blue-400">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
                <span className="text-sm text-white/60">Verified Artist</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-2">{artist.name}</h1>
              <div className="flex items-center gap-4 text-sm text-white/80">
                <span>{artist.monthlyListeners} monthly listeners</span>
                <span>•</span>
                <span>{artist.followers} followers</span>
                <span>•</span>
                <span>{artist.genre}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-black/40 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center gap-4">
            <button className="h-14 w-14 rounded-full bg-brand-accent flex items-center justify-center hover:scale-105 transition-transform">
              <svg className="h-6 w-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>

            <button
              onClick={handleFollow}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                isFollowing
                  ? 'border border-white/40 text-white hover:bg-white/10'
                  : 'bg-white text-black hover:bg-white/90'
              }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>

            <button className="p-2 text-white/60 hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-6">
        <div className="border-b border-white/10">
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveTab('songs')}
              className={`pb-4 px-1 font-semibold transition-colors relative ${
                activeTab === 'songs'
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Popular Songs
              {activeTab === 'songs' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('albums')}
              className={`pb-4 px-1 font-semibold transition-colors relative ${
                activeTab === 'albums'
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Albums
              {activeTab === 'albums' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-4 px-1 font-semibold transition-colors relative ${
                activeTab === 'about'
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              About
              {activeTab === 'about' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent" />
              )}
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 pb-24">
        {/* Popular Songs Tab */}
        {activeTab === 'songs' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold mb-6">Popular</h2>

            {artist.recentSongs.map((song, index) => (
              <div key={song.id} className="space-y-4">
                {/* Song Info Row */}
                <div className="group flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <span className="text-white/40 w-6 text-center">{index + 1}</span>

                  <div className="relative h-12 w-12 rounded overflow-hidden">
                    <Image
                      src={song.cover}
                      alt={song.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="font-semibold">{song.title}</div>
                    <div className="text-sm text-white/60">{song.streams} plays</div>
                  </div>

                  <div className="text-sm text-white/60">{song.duration}</div>

                  {/* Play Buttons */}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {song.hasAudio && (
                      <button
                        onClick={() => handlePlayAudio(song)}
                        className="p-2 rounded-full bg-brand-accent text-black hover:scale-105 transition-transform"
                        title="Play Audio"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                        </svg>
                      </button>
                    )}

                    {song.hasVideo && (
                      <button
                        onClick={() => handlePlayVideo(song)}
                        className="p-2 rounded-full bg-emerald-500 text-black hover:scale-105 transition-transform"
                        title="Play Video"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Media Players */}
                {playingMedia?.id === song.id && (
                  <div className="ml-10 space-y-4">
                    {playingMedia.type === 'audio' && song.hasAudio && song.audioSrc && (
                      <AudioPlayer
                        src={song.audioSrc}
                        title={song.title}
                        artist={artist.name}
                        cover={song.cover}
                        duration={song.duration}
                        className="max-w-2xl"
                        onEnded={() => setPlayingMedia(null)}
                      />
                    )}

                    {playingMedia.type === 'video' && song.hasVideo && song.videoSrc && (
                      <VideoPlayer
                        src={song.videoSrc}
                        title={song.title}
                        artist={artist.name}
                        poster={song.cover}
                        className="max-w-4xl aspect-video"
                        onEnded={() => setPlayingMedia(null)}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Albums Tab */}
        {activeTab === 'albums' && (
          <div>
            <h2 className="text-xl font-bold mb-6">Albums & Singles</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {artist.albums.map((album) => (
                <div key={album.id} className="group cursor-pointer">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                    <Image
                      src={album.cover}
                      alt={album.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="h-12 w-12 rounded-full bg-brand-accent flex items-center justify-center">
                        <svg className="h-6 w-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold line-clamp-1">{album.title}</div>
                    <div className="text-sm text-white/60">{album.year} • {album.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="max-w-4xl">
            <h2 className="text-xl font-bold mb-6">About {artist.name}</h2>

            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <p className="text-white/80 leading-relaxed mb-6">{artist.bio}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold">{artist.followers}</div>
                  <div className="text-sm text-white/60">Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{artist.monthlyListeners}</div>
                  <div className="text-sm text-white/60">Monthly Listeners</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{artist.albums.length}</div>
                  <div className="text-sm text-white/60">Albums</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{artist.recentSongs.length}+</div>
                  <div className="text-sm text-white/60">Songs</div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold mb-3">Follow {artist.name}</h3>
                <div className="flex gap-4">
                  {artist.socialLinks.instagram && (
                    <a
                      href={`https://instagram.com/${artist.socialLinks.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                      </svg>
                      Instagram
                    </a>
                  )}
                  {artist.socialLinks.twitter && (
                    <a
                      href={`https://twitter.com/${artist.socialLinks.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      Twitter
                    </a>
                  )}
                  {artist.socialLinks.youtube && (
                    <a
                      href={`https://youtube.com/@${artist.socialLinks.youtube}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      YouTube
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}