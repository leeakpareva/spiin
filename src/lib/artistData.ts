export interface Artist {
  id: string;
  name: string;
  image: string;
  coverImage: string;
  followers: string;
  monthlyListeners: string;
  bio: string;
  genre: string;
  verified: boolean;
  socialLinks: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
  recentSongs: Array<{
    id: string;
    title: string;
    releaseDate: string;
    streams: string;
    duration: string;
    cover: string;
    audioSrc?: string;
    videoSrc?: string;
    hasAudio: boolean;
    hasVideo: boolean;
  }>;
  albums: Array<{
    id: string;
    title: string;
    year: string;
    cover: string;
    type: 'Album' | 'EP' | 'Single';
  }>;
}

export const artistsData: Record<string, Artist> = {
  "davido": {
    id: "davido",
    name: "Davido",
    image: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "12.5M",
    monthlyListeners: "8.2M",
    bio: "David Adedeji Adeleke, known professionally as Davido, is a Nigerian-American singer, songwriter, and record producer. He is one of the most influential artists in Africa, pioneering the global Afrobeats movement with his unique blend of traditional African elements and contemporary pop.",
    genre: "Afrobeats, Afro-pop",
    verified: true,
    socialLinks: {
      instagram: "davido",
      twitter: "davido",
      youtube: "DavidoOfficial"
    },
    recentSongs: [
      {
        id: "davido-unavailable",
        title: "Unavailable (feat. Musa Keys)",
        releaseDate: "2023",
        streams: "125M",
        duration: "3:12",
        cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=300&q=80",
        audioSrc: "/audio/davido-unavailable.mp3",
        videoSrc: "/video/davido-unavailable.mp4",
        hasAudio: true,
        hasVideo: true
      },
      {
        id: "davido-feel",
        title: "Feel",
        releaseDate: "2023",
        streams: "89M",
        duration: "2:45",
        cover: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80",
        audioSrc: "/audio/davido-feel.mp3",
        hasAudio: true,
        hasVideo: false
      },
      {
        id: "davido-kante",
        title: "Kante (feat. Fave)",
        releaseDate: "2023",
        streams: "67M",
        duration: "3:28",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        audioSrc: "/audio/davido-kante.mp3",
        videoSrc: "/video/davido-kante.mp4",
        hasAudio: true,
        hasVideo: true
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Timeless",
        year: "2023",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      },
      {
        id: "album2",
        title: "A Better Time",
        year: "2020",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      }
    ]
  },
  "burna-boy": {
    id: "burna-boy",
    name: "Burna Boy",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1920&q=80",
    followers: "15.8M",
    monthlyListeners: "11.3M",
    bio: "Damini Ebunoluwa Ogulu, known professionally as Burna Boy, is a Nigerian singer, songwriter, and Grammy Award winner. He is one of the biggest and most successful African artists, known for pioneering Afro-fusion - a genre that blends Afrobeats, dancehall, reggae, and pop.",
    genre: "Afro-fusion, Afrobeats",
    verified: true,
    socialLinks: {
      instagram: "burnaboygram",
      twitter: "burnaboy",
      youtube: "BurnaBoy"
    },
    recentSongs: [
      {
        id: "burna-city-boys",
        title: "City Boys",
        releaseDate: "2023",
        streams: "145M",
        duration: "3:30",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80",
        audioSrc: "/audio/burna-city-boys.mp3",
        videoSrc: "/video/burna-city-boys.mp4",
        hasAudio: true,
        hasVideo: true
      },
      {
        id: "burna-sittin-on-top",
        title: "Sittin' On Top Of The World",
        releaseDate: "2023",
        streams: "98M",
        duration: "3:15",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=300&q=80",
        audioSrc: "/audio/burna-sittin-on-top.mp3",
        hasAudio: true,
        hasVideo: false
      },
      {
        id: "burna-big-7",
        title: "Big 7",
        releaseDate: "2023",
        streams: "76M",
        duration: "2:58",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        audioSrc: "/audio/burna-big-7.mp3",
        hasAudio: true,
        hasVideo: false
      }
    ],
    albums: [
      {
        id: "album1",
        title: "I Told Them...",
        year: "2023",
        cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      },
      {
        id: "album2",
        title: "Love, Damini",
        year: "2022",
        cover: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      }
    ]
  },
  "asake": {
    id: "asake",
    name: "Asake",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1920&q=80",
    followers: "6.7M",
    monthlyListeners: "5.8M",
    bio: "Ahmed Ololade, known professionally as Asake, is a Nigerian singer and songwriter. He is signed to YBNL Nation and Empire Distribution. His music style is a fusion of Afrobeats, hip-hop, and Amapiano with Yoruba cultural elements.",
    genre: "Afrobeats, Afro-fusion",
    verified: true,
    socialLinks: {
      instagram: "asakemusic",
      twitter: "asakemusik",
      youtube: "AsakeOfficial"
    },
    recentSongs: [
      {
        id: "1",
        title: "Lonely At The Top",
        releaseDate: "2023",
        streams: "112M",
        duration: "3:05",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "2",
        title: "2:30",
        releaseDate: "2023",
        streams: "95M",
        duration: "2:30",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "3",
        title: "Amapiano (feat. Olamide)",
        releaseDate: "2023",
        streams: "88M",
        duration: "3:18",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80"
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Work of Art",
        year: "2023",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      },
      {
        id: "album2",
        title: "Mr. Money With The Vibe",
        year: "2022",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      }
    ]
  },
  "rema": {
    id: "rema",
    name: "Rema",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80",
    followers: "9.4M",
    monthlyListeners: "7.1M",
    bio: "Divine Ikubor, known professionally as Rema, is a Nigerian singer and rapper. He rose to prominence after being signed to Jonzing World, a subsidiary of Mavin Records. His music is a fusion of Afrobeats, trap, and Indian music.",
    genre: "Afrobeats, Afro-rave",
    verified: true,
    socialLinks: {
      instagram: "heisrema",
      twitter: "heisrema",
      youtube: "RemaOfficial"
    },
    recentSongs: [
      {
        id: "1",
        title: "Calm Down",
        releaseDate: "2022",
        streams: "489M",
        duration: "3:39",
        cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "2",
        title: "Holiday",
        releaseDate: "2023",
        streams: "67M",
        duration: "3:05",
        cover: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "3",
        title: "Charm",
        releaseDate: "2023",
        streams: "54M",
        duration: "2:42",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80"
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Rave & Roses",
        year: "2022",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      },
      {
        id: "album2",
        title: "Rema Compilation",
        year: "2021",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "EP"
      }
    ]
  },
  "shallipopi": {
    id: "shallipopi",
    name: "Shallipopi",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=1920&q=80",
    followers: "8.3M",
    monthlyListeners: "6.2M",
    bio: "Crown Uzama, known professionally as Shallipopi, is a Nigerian singer, rapper, and songwriter. He gained prominence with his unique style that blends street-hop with Afrobeats, creating what he calls 'Afro-Pluto Sound'.",
    genre: "Afrobeats, Street-hop",
    verified: true,
    socialLinks: {
      instagram: "theycallmeshallipopi",
      twitter: "shallipopi",
      youtube: "Shallipopi"
    },
    recentSongs: [
      {
        id: "1",
        title: "Elon Musk",
        releaseDate: "2023",
        streams: "156M",
        duration: "2:48",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "2",
        title: "Ex Convict",
        releaseDate: "2023",
        streams: "98M",
        duration: "2:36",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "3",
        title: "Cast (feat. Odumodublvck)",
        releaseDate: "2023",
        streams: "72M",
        duration: "3:12",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80"
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Presido La Pluto",
        year: "2023",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      },
      {
        id: "album2",
        title: "Planet Pluto",
        year: "2023",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=300&q=80",
        type: "EP"
      }
    ]
  },
  "seyi-vibez": {
    id: "seyi-vibez",
    name: "Seyi Vibez",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80",
    followers: "4.2M",
    monthlyListeners: "3.8M",
    bio: "Balogun Afolabi Oluwaloseyi, known professionally as Seyi Vibez, is a Nigerian singer and songwriter. Known for his soulful voice and street-inspired lyrics, he has become one of the leading voices in the Nigerian street-pop scene.",
    genre: "Afrobeats, Street-pop",
    verified: true,
    socialLinks: {
      instagram: "seyi_vibez",
      twitter: "seyi_vibez",
      youtube: "SeyiVibez"
    },
    recentSongs: [
      {
        id: "1",
        title: "Gwagwalada",
        releaseDate: "2023",
        streams: "89M",
        duration: "2:54",
        cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "2",
        title: "Hat-Trick",
        releaseDate: "2023",
        streams: "67M",
        duration: "3:12",
        cover: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "3",
        title: "Chance (Na Ham)",
        releaseDate: "2023",
        streams: "54M",
        duration: "2:48",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80"
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Vibe Till Thy Kingdom Come",
        year: "2023",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      },
      {
        id: "album2",
        title: "Billion Dollar Baby",
        year: "2022",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      }
    ]
  },
  "odumodu-blvck": {
    id: "odumodu-blvck",
    name: "ODUMODU BLVCK",
    image: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "3.1M",
    monthlyListeners: "2.5M",
    bio: "Tochukwu Gbubemi Ojogwu, known professionally as Odumodublvck, is a Nigerian rapper, singer and songwriter. He is known for his unique style that blends drill music with Afrobeats, creating a distinctive sound in the Nigerian hip-hop scene.",
    genre: "Afro-drill, Hip-hop",
    verified: true,
    socialLinks: {
      instagram: "odumodublvck",
      twitter: "odumodublvck_",
      youtube: "Odumodublvck"
    },
    recentSongs: [
      {
        id: "1",
        title: "Declan Rice",
        releaseDate: "2023",
        streams: "78M",
        duration: "3:24",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "2",
        title: "Picanto (feat. Zlatan & Ecko Miles)",
        releaseDate: "2023",
        streams: "65M",
        duration: "3:06",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "3",
        title: "Dog Eat Dog",
        releaseDate: "2023",
        streams: "43M",
        duration: "2:58",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80"
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Eziokwu",
        year: "2023",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      },
      {
        id: "album2",
        title: "The Drop",
        year: "2023",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=300&q=80",
        type: "EP"
      }
    ]
  }
};

export function getArtistById(id: string): Artist | undefined {
  return artistsData[id];
}