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
    image: "/Davido/close.png",
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
    image: "/Burna/closeup.png",
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
    image: "/Asake/mrmoney.png",
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
    image: "/Rema/farsmoke.png",
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
    image: "/Shalopoppi/weed.png",
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
    image: "/SeyiVibez/shades.png",
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
    image: "/OdumoduBlvk/odu.png",
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
  },

  "wizkid": {
    id: "wizkid",
    name: "Wizkid",
    image: "/Wizzy/kid.png",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "18.3M",
    monthlyListeners: "12.5M",
    bio: "Ayodeji Ibrahim Balogun, known professionally as Wizkid, is a Nigerian singer and songwriter. He is regarded as one of the biggest and most influential African artists of all time.",
    genre: "Afrobeats, Afro-pop, R&B",
    verified: true,
    socialLinks: {
      instagram: "wizkidayo",
      twitter: "wizkidayo",
      youtube: "WizkidOfficial"
    },
    recentSongs: [
      {
        id: "1",
        title: "Essence (feat. Tems)",
        releaseDate: "2020",
        streams: "235M",
        duration: "3:12",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        hasAudio: true,
        hasVideo: true
      },
      {
        id: "2",
        title: "Joro",
        releaseDate: "2019",
        streams: "156M",
        duration: "2:58",
        cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&q=80",
        hasAudio: true,
        hasVideo: false
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Made in Lagos",
        year: "2020",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      }
    ]
  },

  "tiwa-savage": {
    id: "tiwa-savage",
    name: "Tiwa Savage",
    image: "/Tiwa Savage/bootsbrown.png",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "8.9M",
    monthlyListeners: "5.2M",
    bio: "Tiwatope Savage is a Nigerian singer, songwriter, and actress. She is one of Africa's biggest female artists and a pioneer for women in Afrobeats.",
    genre: "Afrobeats, R&B, Pop",
    verified: true,
    socialLinks: {
      instagram: "tiwasavage",
      twitter: "TiwaSavage"
    },
    recentSongs: [
      {
        id: "1",
        title: "Somebody's Son (feat. Brandy)",
        releaseDate: "2021",
        streams: "89M",
        duration: "3:45",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        hasAudio: true,
        hasVideo: true
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Celia",
        year: "2020",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      }
    ]
  },

  "kizz-daniel": {
    id: "kizz-daniel",
    name: "Kizz Daniel",
    image: "/Kizz Daniel/kizzy.png",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "6.8M",
    monthlyListeners: "4.3M",
    bio: "Oluwatobiloba Daniel Anidugbe, known as Kizz Daniel, is a Nigerian singer and songwriter known for his unique Afrobeats style.",
    genre: "Afrobeats, Afro-pop",
    verified: true,
    socialLinks: {
      instagram: "kizzdaniel",
      twitter: "KizzDaniel"
    },
    recentSongs: [
      {
        id: "1",
        title: "Buga (feat. Tekno)",
        releaseDate: "2022",
        streams: "145M",
        duration: "2:51",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        hasAudio: true,
        hasVideo: true
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Barnabas",
        year: "2021",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "EP"
      }
    ]
  },

  "fireboy-dml": {
    id: "fireboy-dml",
    name: "Fireboy DML",
    image: "/Fireboy DML/culture.png",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "5.7M",
    monthlyListeners: "3.8M",
    bio: "Adedamola Adefolahan, known professionally as Fireboy DML, is a Nigerian Afrobeats singer and songwriter signed to YBNL Nation.",
    genre: "Afrobeats, Afro-pop, R&B",
    verified: true,
    socialLinks: {
      instagram: "fireboydml",
      twitter: "fireboydml"
    },
    recentSongs: [
      {
        id: "1",
        title: "Peru",
        releaseDate: "2021",
        streams: "98M",
        duration: "2:53",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        hasAudio: true,
        hasVideo: true
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Playboy",
        year: "2022",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      }
    ]
  },

  "omah-lay": {
    id: "omah-lay",
    name: "Omah Lay",
    image: "/Omar Lay/smile.png",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "4.2M",
    monthlyListeners: "2.9M",
    bio: "Stanley Omah Didia, known as Omah Lay, is a Nigerian singer, songwriter and record producer who gained popularity with his unique Afrobeats sound.",
    genre: "Afrobeats, Afro-fusion",
    verified: true,
    socialLinks: {
      instagram: "omah_lay",
      twitter: "Omah_Lay"
    },
    recentSongs: [
      {
        id: "1",
        title: "Understand",
        releaseDate: "2021",
        streams: "76M",
        duration: "2:47",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        hasAudio: true,
        hasVideo: true
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Boy Alone",
        year: "2022",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      }
    ]
  },

  "joeboy": {
    id: "joeboy",
    name: "Joeboy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "3.8M",
    monthlyListeners: "2.1M",
    bio: "Joseph Akinwale Akinfenwa-Donus, known as Joeboy, is a Nigerian Afrobeats singer and songwriter known for his melodic sound.",
    genre: "Afrobeats, Afro-pop",
    verified: true,
    socialLinks: {
      instagram: "joeboy",
      twitter: "joeboyofficial"
    },
    recentSongs: [
      {
        id: "1",
        title: "Alcohol",
        releaseDate: "2021",
        streams: "54M",
        duration: "3:01",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        hasAudio: true,
        hasVideo: true
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Somewhere Between Beauty & Magic",
        year: "2021",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      }
    ]
  },

  "oxlade": {
    id: "oxlade",
    name: "Oxlade",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "2.9M",
    monthlyListeners: "1.8M",
    bio: "Ikuforiji Olaitan Abdulrahman, known as Oxlade, is a Nigerian Afrobeats singer and songwriter with a distinctive vocal style.",
    genre: "Afrobeats, R&B",
    verified: true,
    socialLinks: {
      instagram: "oxladeofficial",
      twitter: "oxladeofficial"
    },
    recentSongs: [
      {
        id: "1",
        title: "Kulosa",
        releaseDate: "2022",
        streams: "42M",
        duration: "2:38",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        hasAudio: true,
        hasVideo: true
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Eclipse",
        year: "2022",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "EP"
      }
    ]
  },

  "ruger": {
    id: "ruger",
    name: "Ruger",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "3.1M",
    monthlyListeners: "1.9M",
    bio: "Michael Adebayo Olayinka, known as Ruger, is a Nigerian Afrobeats singer and songwriter known for his energetic performances.",
    genre: "Afrobeats, Afro-pop",
    verified: true,
    socialLinks: {
      instagram: "rugerofficial",
      twitter: "rugerofficial"
    },
    recentSongs: [
      {
        id: "1",
        title: "Dior",
        releaseDate: "2022",
        streams: "67M",
        duration: "2:44",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        hasAudio: true,
        hasVideo: true
      }
    ],
    albums: [
      {
        id: "album1",
        title: "The Second Wave",
        year: "2022",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "EP"
      }
    ]
  },

  "bnxn": {
    id: "bnxn",
    name: "BNXN",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "2.7M",
    monthlyListeners: "1.6M",
    bio: "Daniel Benson, known as BNXN (formerly Buju), is a Nigerian Afrobeats singer and songwriter with a smooth vocal style.",
    genre: "Afrobeats, R&B",
    verified: true,
    socialLinks: {
      instagram: "bnxn",
      twitter: "BNXN"
    },
    recentSongs: [
      {
        id: "1",
        title: "Finesse (feat. Pheelz)",
        releaseDate: "2022",
        streams: "89M",
        duration: "2:33",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        hasAudio: true,
        hasVideo: true
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Bad Since '97",
        year: "2022",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "EP"
      }
    ]
  },

  "victony": {
    id: "victony",
    name: "Victony",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "2.3M",
    monthlyListeners: "1.4M",
    bio: "Anthony Ebuka Victor, known as Victony, is a Nigerian Afrobeats singer and songwriter who has gained recognition for his melodic style.",
    genre: "Afrobeats, Afro-fusion",
    verified: true,
    socialLinks: {
      instagram: "victony",
      twitter: "victony"
    },
    recentSongs: [
      {
        id: "1",
        title: "Holy Father (feat. Mayorkun)",
        releaseDate: "2021",
        streams: "35M",
        duration: "3:17",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        hasAudio: true,
        hasVideo: true
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Outlaw",
        year: "2023",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "EP"
      }
    ]
  },

  "zinoleesky": {
    id: "zinoleesky",
    name: "Zinoleesky",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "2.8M",
    monthlyListeners: "1.7M",
    bio: "Oniyide Azeez, known as Zinoleesky, is a Nigerian Afrobeats singer and songwriter signed to Marlian Music.",
    genre: "Afrobeats, Street-hop",
    verified: true,
    socialLinks: {
      instagram: "zinoleesky",
      twitter: "zinoleesky"
    },
    recentSongs: [
      {
        id: "1",
        title: "Kilofeshe",
        releaseDate: "2021",
        streams: "58M",
        duration: "2:41",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        hasAudio: true,
        hasVideo: true
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Chrome",
        year: "2022",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "EP"
      }
    ]
  },

  "mohbad": {
    id: "mohbad",
    name: "Mohbad",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "3.5M",
    monthlyListeners: "2.2M",
    bio: "Ilerioluwa Oladimeji Aloba, known as Mohbad, was a Nigerian rapper and singer who made significant contributions to Afrobeats and street-hop music.",
    genre: "Afrobeats, Hip-hop, Street-hop",
    verified: true,
    socialLinks: {
      instagram: "mohbad",
      twitter: "mohbad"
    },
    recentSongs: [
      {
        id: "1",
        title: "Peace",
        releaseDate: "2023",
        streams: "125M",
        duration: "2:55",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        hasAudio: true,
        hasVideo: true
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Blessed",
        year: "2023",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "Album"
      }
    ]
  },

  "young-jonn": {
    id: "young-jonn",
    name: "Young Jonn",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=640&q=80",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80",
    followers: "1.9M",
    monthlyListeners: "1.2M",
    bio: "John Saviours Udomboso, known as Young Jonn, is a Nigerian record producer and singer who transitioned from producing to performing.",
    genre: "Afrobeats, Afro-pop",
    verified: true,
    socialLinks: {
      instagram: "youngjonn",
      twitter: "youngjonn"
    },
    recentSongs: [
      {
        id: "1",
        title: "Dada (feat. Davido)",
        releaseDate: "2022",
        streams: "73M",
        duration: "3:05",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80",
        hasAudio: true,
        hasVideo: true
      }
    ],
    albums: [
      {
        id: "album1",
        title: "Love Is Not Enough",
        year: "2023",
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=300&q=80",
        type: "EP"
      }
    ]
  }
};

export function getArtistById(id: string): Artist | undefined {
  return artistsData[id];
}