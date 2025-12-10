import { ContentCardProps } from "@/components/content-card";
import { artistsData } from "@/lib/artistData";

export const discovered: ContentCardProps[] = [
  {
    id: "song1",
    title: "Midnight Sessions Vol. 1",
    subtitle: "Jasmine Carter",
    badge: "New",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    price: 2.99,
    type: "song",
    artistId: "artist1"
  },
  {
    id: "song2",
    title: "City Lights Live",
    subtitle: "The Neon Collective",
    badge: "Exclusive",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",
    price: 3.99,
    type: "song",
    artistId: "artist2"
  },
  {
    id: "song3",
    title: "Studio Stories EP",
    subtitle: "Marcus Vale",
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400",
    price: 9.99,
    type: "album",
    artistId: "artist3"
  },
  {
    id: "song4",
    title: "Acoustic Dreams",
    subtitle: "Luna Rivers",
    badge: "Live",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    price: 1.99,
    type: "song",
    artistId: "artist4"
  }
];

export const trending: ContentCardProps[] = [
  {
    id: "song5",
    title: "Tour Diaries 2024",
    subtitle: "Electric Youth",
    badge: "Trending",
    imageUrl: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400",
    price: 4.99,
    type: "album",
    artistId: "artist5"
  },
  {
    id: "song6",
    title: "Underground Sessions",
    subtitle: "DJ Shadow",
    imageUrl: "https://images.unsplash.com/photo-1571266028243-d220c6a8d7e7?w=400",
    price: 2.49,
    type: "song",
    artistId: "artist6"
  },
  {
    id: "song7",
    title: "Remix Collection",
    subtitle: "Various Artists",
    badge: "Hot",
    imageUrl: "https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?w=400",
    price: 12.99,
    type: "album"
  }
];

export const exclusive: ContentCardProps[] = [
  {
    id: "song8",
    title: "Backstage Pass Q&A",
    subtitle: "The Velvet Underground",
    badge: "Members Only",
    imageUrl: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400",
    price: 5.99,
    type: "event",
    artistId: "artist7"
  },
  {
    id: "song9",
    title: "Private Concert Series",
    subtitle: "Indie Nights",
    badge: "VIP",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400",
    price: 19.99,
    type: "event"
  }
];

export const powered: ContentCardProps[] = [
  {
    id: "song10",
    title: "Live in Berlin",
    subtitle: "Techno Masters",
    imageUrl: "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?w=400",
    price: 7.99,
    type: "album",
    artistId: "artist8"
  },
  {
    id: "song11",
    title: "Rooftop Sessions NYC",
    subtitle: "Jazz Collective",
    imageUrl: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400",
    price: 3.49,
    type: "song"
  }
];

export const artists: ContentCardProps[] = Object.values(artistsData).map(artist => ({
  id: artist.id,
  title: artist.name,
  subtitle: `${artist.genre} · ${artist.followers} followers`,
  imageUrl: artist.image,
  type: "artist" as const,
  artistId: artist.id
}));

export const songDetails = {
  song1: {
    id: "song1",
    title: "Midnight Sessions Vol. 1",
    artist: "Jasmine Carter",
    artistId: "artist1",
    price: 2.99,
    duration: "3:45",
    genre: "Neo-Soul",
    releaseDate: "2024-01-15",
    description: "An intimate late-night recording session captured in its raw, authentic form. Experience the creative process behind Jasmine's most personal work.",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    audioPreview: "/preview/midnight-sessions.mp3",
    credits: [
      "Written & Performed by Jasmine Carter",
      "Produced by Marcus Thompson",
      "Mixed at SPIIN Studios"
    ]
  }
};

export const artistDetails = {
  artist1: {
    id: "artist1",
    name: "Jasmine Carter",
    bio: "Neo-soul artist from Atlanta, blending classic R&B with modern electronic production. Known for her powerful vocals and introspective songwriting.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    coverUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200",
    stats: {
      fans: "2.3M",
      songs: 47,
      albums: 3,
      monthlyListeners: "892K"
    },
    socials: {
      instagram: "@jasminecarter",
      twitter: "@jasminecarter",
      spotify: "jasmine-carter"
    },
    topSongs: [
      {
        id: "song1",
        title: "Midnight Sessions Vol. 1",
        plays: "12.3M",
        duration: "3:45",
        price: 2.99
      },
      {
        id: "song12",
        title: "Golden Hour",
        plays: "8.7M",
        duration: "4:12",
        price: 1.99
      },
      {
        id: "song13",
        title: "City Dreams",
        plays: "6.2M",
        duration: "3:28",
        price: 2.49
      }
    ]
  }
};