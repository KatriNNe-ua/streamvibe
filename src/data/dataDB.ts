export type DataDB = MovieEntry | ShowEntry;

export type NormalizedDataDB =
  | (MovieEntry & { duration: number })
  | (ShowEntry & { duration: number; seasonsCount: number });

type Rating = {
  imdb: number;
  streamvibe: number;
};

type Person = {
  name: string; 
  country: string;
};

type CastMember = {
  img: string;
  link: string;
};

export type Review = {
	id: number;
  author: string;
  country: string;
  rating: number;
  text: string;
};

export type Episode = {
  number: number;
  title: string;
  duration: number;
  description: string;
  poster: string
};

export type Season = {
  season: number;
  episodes:  Episode[];
};

type BaseDataDB = {
  id: number;
  type: "movie" | "show";
  title: string;
  tagline: string;
  description: string;
  releasedYear: number;
  availableLanguages: string[];
  ratings: Rating;
  director: Person;
  music: Person;
  cast: CastMember[];
};

export type MovieEntry = BaseDataDB & {
  type: "movie";
  poster: string;
  cover: string;
  genres: string[];
  genre?: string;
  top10?: boolean;
  trendingNow?: boolean;
  newReleases?: boolean;
  dateReleases?: string;
  duration?: number;
  views?: number;
  showFirstPage?: boolean;
  watch?: boolean;
  reviews: Review[];
};

export type ShowEntry = BaseDataDB & {
  type: "show";
  poster?: string;
  cover?: string;
  genres: string[];
  genre?: string;
  top10?: boolean;
  trendingNow?: boolean;
  newReleases?: boolean;
  dateReleases?: string;
  duration?: number;
  seasonsCount?: number;
  views?: number;
  showFirstPage?: boolean;
  watch?: boolean;
  reviews?: Review[];
  seasons: Season[];
};

export type Cast ={
  img: string;
  link: string;
};
const cast :Cast[]= [
  {
    img: "/images/data/cast/01.webp",
    link: "#",
  },
  {
    img: "/images/data/cast/02.webp",
    link: "#",
  },
  {
    img: "/images/data/cast/03.webp",
    link: "#",
  },
  {
    img: "/images/data/cast/04.webp",
    link: "#",
  },
  {
    img: "/images/data/cast/05.webp",
    link: "#",
  },
  {
    img: "/images/data/cast/06.webp",
    link: "#",
  },
  {
    img: "/images/data/cast/07.webp",
    link: "#",
  },
  {
    img: "/images/data/cast/08.webp",
    link: "#",
  },
  {
    img: "/images/data/cast/9.webp",
    link: "#",
  },
  {
    img: "/images/data/cast/10.webp",
    link: "#",
  },
  {
    img: "/images/data/cast/54.webp",
    link: "#",
  },
  {
    img: "/images/data/cast/11.webp",
    link: "#",
  },
  {
    img: "/images/data/cast/12.webp",
    link: "#",
  },
];

const reviews:Review[] = [
  {
    id: 1,
    author: "Maria Lopez",
    country: "Spain",
    rating: 4.2,
    text: "A visually stunning film with breathtaking landscapes. The pacing was a bit slow, but the emotional depth kept me engaged."
  },
  {
    id: 2,
    author: "James Carter",
    country: "USA",
    rating: 3.8,
    text: "The storyline felt familiar, yet the performances were strong enough to make it worth watching once."
  },
  {
    id: 3,
    author: "Akira Tanaka",
    country: "Japan",
    rating: 5.0,
    text: "An absolute masterpiece! The soundtrack and cinematography worked perfectly together to create an unforgettable experience."
  },
  {
    id: 4,
    author: "Elena Petrova",
    country: "Ukraine",
    rating: 4.7,
    text: "I loved the character development and the unexpected plot twists. Definitely one of the best movies I've seen this year."
  },
  {
    id: 5,
    author: "David Müller",
    country: "Germany",
    rating: 3.5,
    text: "While the visuals were impressive, the dialogue felt forced at times. Still, it’s a decent watch for fans of the genre."
  },
  {
    id: 6,
    author: "Fatima Khan",
    country: "Pakistan",
    rating: 4.9,
    text: "A powerful story that touched my heart. The themes of resilience and hope were beautifully portrayed."
  },
  {
    id: 7,
    author: "Lucas Silva",
    country: "Brazil",
    rating: 4.0,
    text: "Great action sequences and solid acting. The ending could have been stronger, but overall it was entertaining."
  }
]


export const seasons: Season[] = [
  {
    season: 1,
    episodes: [
      {
        number: 1,
        title: "Awake in Neon",
        duration: 51,
        description: "An AI goes rogue in the heart of the city.",
        poster: "/images/data/shows/seasons/01.webp",
      },
      {
        number: 2,
        title: "Codebreaker",
        duration: 53,
        description: "A skilled hacker is pulled into the crisis.",
        poster: "/images/data/shows/seasons/02.webp",
      },
      {
        number: 3,
        title: "Digital Shadows",
        duration: 49,
        description: "The AI begins manipulating the city's systems.",
        poster: "/images/data/shows/seasons/03.webp",
      },
      {
        number: 4,
        title: "Alliance of Outcasts",
        duration: 55,
        description: "Unlikely partners form to stop the threat.",
        poster: "/images/data/shows/seasons/04.webp",
      },
      {
        number: 5,
        title: "Nightfall",
        duration: 56,
        description: "The final attempt to shut down the rogue intelligence.",
        poster: "/images/data/shows/seasons/05.webp",
      },
      {
        number: 6,
        title: "Nightfall",
        duration: 56,
        description: "The final attempt to shut down the rogue intelligence.",
        poster: "/images/data/shows/seasons/06.webp",
      },
    ],
  },
  {
    season: 2,
    episodes: [
      {
        number: 1,
		poster: "/images/data/shows/seasons/07.webp",
        title: "Chapter One: The Vanishing of Will Byers",
        duration: 49,
        description:
          "On his way from a friend's house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.",
      },
      {
        number: 2,
        title: "Chapter Two: The Weirdo on Maple Street",
        duration: 56,
		poster: "/images/data/shows/seasons/08.webp",
        description:
          "Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.",
      },
      {
        number: 3,
        title: "Chapter Three: Holly, Jolly",
        duration: 52,
		poster: "/images/data/shows/seasons/09.webp",
        description:
          "An increasingly concerned Nancy looks for Barb and finds out what Jonathan’s been up to. Joyce is convinced Will is trying to talk to her.",
      },
      {
        number: 4,
        title: "Chapter Four: The Body",
        duration: 51,
		poster: "/images/data/shows/seasons/10.webp",
        description:
          "Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover.",
      },
      {
        number: 5,
        title: "Chapter Five: The Flea and the Acrobat",
        duration: 53,
		poster: "/images/data/shows/seasons/11.webp",
        description:
          "Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.",
      },
    ],
  },
  {
    season: 3,
    episodes: [
      {
        number: 1,
        title: "Return to Tide",
        duration: 47,
		poster: "/images/data/shows/seasons/12.webp",
        description:
          "A broken singer returns to her hometown after years away.",
      },
      {
        number: 2,
        title: "Echoes in the Waves",
        duration: 50,
        description: "Old friends hide painful secrets behind smiles.",
		poster: "/images/data/shows/seasons/13.webp",
      },
      {
        number: 3,
        title: "The Missing Song",
        duration: 52,
        description: "A mysterious recording threatens powerful people.",
		poster: "/images/data/shows/seasons/14.webp",
      },
      {
        number: 4,
        title: "Drowned Truth",
        duration: 49,
        description: "She remembers why she really left the town.",
		poster: "/images/data/shows/seasons/15.webp",
      },
      {
        number: 5,
        title: "Voice from the Deep",
        duration: 54,
        description: "The ocean whispers forgotten memories.",
		poster: "/images/data/shows/seasons/16.webp",
      },
      {
        number: 6,
        title: "Drowned Truth",
        duration: 49,
        description: "She remembers why she really left the town.",
		poster: "/images/data/shows/seasons/17.webp",
      },
      {
        number: 7,
        title: "Voice from the Deep",
        duration: 54,
        description: "The ocean whispers forgotten memories.",
		poster: "/images/data/shows/seasons/18.webp",
      },
    ],
  },
];

//  "../../public/images/data/movies/other/11.webp"

export const dataDB: DataDB[] = [
  //----------------------New Releases
  //   newReleases: true,
  //     dateReleases: "12.08.2022",
  {
    id: 101,
    type: "movie",
    duration: 127,
    poster: "/images/data/posters/1.webp",
    cover: "/images/data/movies/other/11.webp",
    title: "Forest of Echoes",
    newReleases: true,
    genre: "action",
    dateReleases: "08.12.2022",
    genres: ["Action", "Adventure"],
    tagline:
      "A renegade ranger must protect a sacred forest when a mercenary band threatens to burn it to the ground.",
    description:
      "When ancient guardians awaken, one reluctant hero must bridge the gap between man and wilderness to save both.",
    releasedYear: 2022,
    availableLanguages: ["English", "Hindi", "Tamil", "Telugu", "Kannada"],
    ratings: {
      imdb: 4.6,
      streamvibe: 4.1,
    },

    director: {
      name: "Rishab Shetty",
      country: "India",
    },
    music: {
      name: "B. Ajaneesh Loknath",
      country: "India",
    },

    cast: cast,
    reviews: reviews,
  },
  {
    id: 102,
    type: "movie",
    duration: 130,
    poster: "/images/data/posters/2.webp",
    cover: "/images/data/movies/other/22.webp",
    title: "Midnight Horizon",
    genres: ["Action", "Adventure"],
    newReleases: true,
    genre: "action",
    dateReleases: "09.12.2022",
    tagline:
      "A lone pilot races through storm-torn skies to deliver a secret that could change the world.",
    description:
      "Haunted by a lost past, she must outfly enemies and her own doubts to keep hope alive.",
    releasedYear: 2001,
    availableLanguages: ["English", "Hindi"],
    ratings: { imdb: 4.3, streamvibe: 3.7 },
    director: { name: "Christopher Nolan", country: "UK" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 103,
    type: "movie",
    duration: 121,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/other/23.webp",
    title: "Shores of Silence",
    newReleases: true,
    genre: "action",
    dateReleases: "22.04.2002",
    genres: ["Drama", "Romance"],
    tagline:
      "In a coastal town where secrets drown beneath the surf, one woman searches for the voice she lost.",
    description:
      "A former singer returns home and uncovers a conspiracy that could silence the shoreline forever.",
    releasedYear: 2002,
    availableLanguages: ["English", "Tamil"],
    ratings: { imdb: 3.9, streamvibe: 4.0 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "A. R. Rahman", country: "India" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 104,
    type: "movie",
    duration: 118,
    poster: "/images/data/posters/9.webp",
    cover: "/images/data/movies/other/24.webp",

    title: "Nightfall Protocol",
    genres: ["Thriller", "Mystery"],
    genre: "action",
    newReleases: true,
    dateReleases: "02.08.2022",
    tagline:
      "A rogue AI awakens in a neon metropolis, forcing a hacker to risk everything to shut it down.",
    description:
      "As the city descends into chaos, an unlikely alliance must rewrite the rules before nightfall.",
    releasedYear: 2003,
    availableLanguages: ["English", "Telugu"],
    ratings: { imdb: 4.5, streamvibe: 4.2 },
    director: { name: "Hayao Miyazaki", country: "Japan" },
    music: { name: "Joe Hisaishi", country: "Japan" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 105,
    type: "movie",
    duration: 132,
    poster: "/images/data/posters/9.webp",
    cover: "/images/data/movies/other/33.webp",
    title: "Echoes of Avalon",
    genres: ["Fantasy", "Adventure"],
    newReleases: true,
    genre: "adventure",
    dateReleases: "12.08.2010",
    tagline:
      "When a hidden kingdom is threatened, a young knight must journey beyond the mists to reclaim his legacy.",
    description:
      "A mythic quest unfolds in a world where magic and medieval combat collide.",
    releasedYear: 2011,
    availableLanguages: ["English", "Spanish"],
    ratings: { imdb: 4.2, streamvibe: 3.9 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 106,
    type: "movie",
    duration: 127,
    poster: "/images/data/posters/9.webp",
    cover: "/images/data/movies/other/44.webp",
    title: "Quantum Rift",
    genres: ["Sci-Fi", "Thriller"],
    newReleases: true,
    genre: "adventure",
    dateReleases: "03.01.2022",
    tagline:
      "When time starts unraveling, a physicist must race through alternate realities to save existence.",
    description:
      "Across fractured timelines, choices become the only currency left in a collapsing universe.",
    releasedYear: 2012,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 4.0, streamvibe: 4.3 },
    director: { name: "Hayao Miyazaki", country: "Japan" },
    music: { name: "Joe Hisaishi", country: "Japan" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 107,
    type: "movie",
    duration: 118,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/other/556.webp",
    title: "Carnival of Thieves",
    newReleases: true,
    genre: "adventure",
    dateReleases: "12.11.2022",
    genres: ["Comedy", "Family"],
    tagline:
      "In a city of glittering neon, a street performer becomes the mastermind of the greatest heist ever attempted.",
    description:
      "With every trick, the stakes rise; one mistake could mean a lifetime behind bars.",
    releasedYear: 2013,
    availableLanguages: ["English", "German"],
    ratings: { imdb: 4.3, streamvibe: 3.8 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
  },
  //========================================================================
  //-----Trending Now
  //  trendingNow: true,
  //  showFirstPage: true,
  //    duration:;
  //   views: ;
  {
    id: 11,
    type: "movie",
    poster: "/images/data/posters/1.webp",
    cover: "/images/data/movies/other/678.webp",
    title: "Solar Drift",
    trendingNow: true,
    duration: 142,
    views: 15,
    showFirstPage: true,
    genres: ["Action", "Adventure"],
    genre: "comedy",
    tagline:
      "A retired astronaut returns to the stars when a rogue comet threatens Earth.",

    description:
      "As the world watches, she must pilot one last mission that could either save humanity or end it.",
    releasedYear: 2022,
    availableLanguages: ["English", "Hindi", "Tamil", "Telugu", "Kannada"],
    ratings: {
      imdb: 4.6,
      streamvibe: 4.2,
    },

    director: {
      name: "Rishab Shetty",
      country: "India",
    },
    music: {
      name: "B. Ajaneesh Loknath",
      country: "India",
    },

    cast: cast,
    reviews: reviews,
  },
  {
    id: 102,
    type: "movie",
    poster: "/images/data/posters/2.webp",
    cover: "/images/data/movies/other/65.webp",
    title: "Neon Outlaws",
    genres: ["Action", "Adventure"],
    genre: "comedy",
    trendingNow: true,
    duration: 128,
    views: 21,
    showFirstPage: true,
    tagline:
      "A crew of misfits steals back the city from a corrupt corporate regime.",
    description:
      "In a future ruled by corporations, rebellion comes with a price.",
    releasedYear: 2001,
    availableLanguages: ["English", "Hindi"],
    ratings: { imdb: 4.3, streamvibe: 3.8 },
    director: { name: "Christopher Nolan", country: "UK" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 13,
    type: "movie",
    poster: "/images/data/posters/5.webp",
    cover: "/images/data/movies/other/4e4.webp",
    title: "Harbor of Shadows",
    trendingNow: true,
    duration: 115,
    views: 9,
    showFirstPage: true,
    genres: ["Drama", "Romance"],
    genre: "drama",
    tagline:
      "In a seaside town, a journalist uncovers a decades-old mystery buried beneath the waves.",
    description:
      "As the tides turn, the past and present collide in a story of love, loss, and hidden truths.",
    releasedYear: 2002,
    availableLanguages: ["English", "Tamil"],
    ratings: { imdb: 4.0, streamvibe: 4.2 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "A. R. Rahman", country: "India" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 14,
    type: "movie",
    poster: "/images/data/posters/9.webp",
    cover: "/images/data/movies/other/775.webp",

    title: "Midnight Covenant",
    genres: ["Thriller", "Mystery"],
    genre: "drama",
    trendingNow: true,
    duration: 125,
    views: 18,
    showFirstPage: true,
    tagline:
      "When ancient oaths are broken, a detective must unravel a century-old conspiracy before dawn.",
    description:
      "The line between justice and vengeance blurs as buried secrets resurface in the dead of night.",
    releasedYear: 2003,
    availableLanguages: ["English", "Telugu"],
    ratings: { imdb: 4.7, streamvibe: 4.3 },
    director: { name: "Hayao Miyazaki", country: "Japan" },
    music: { name: "Joe Hisaishi", country: "Japan" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 15,
    type: "movie",
    poster: "/images/data/posters/6.webp",
    cover: "/images/data/movies/other/556.webp",
    title: "Dragon's Library",
    genres: ["Fantasy", "Adventure"],
    genre: "fantasy",
    trendingNow: true,
    duration: 138,
    views: 22,
    showFirstPage: true,
    tagline:
      "When the world's oldest grimoire is stolen, a librarian must race against time to retrieve it before spells are rewritten.",
    description:
      "Between enchanted stacks, allies and enemies blur as knowledge becomes the most dangerous weapon.",
    releasedYear: 2011,
    availableLanguages: ["English", "Spanish"],
    ratings: { imdb: 4.2, streamvibe: 3.9 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 16,
    type: "movie",
    poster: "/images/data/posters/10.webp",
    cover: "/images/data/movies/other/446.webp",
    title: "Echoes of the Deep",
    genres: ["Sci-Fi", "Thriller"],
    genre: "fantasy",
    trendingNow: true,
    duration: 132,
    views: 16,
    showFirstPage: true,
    tagline:
      "A deep-sea research vessel discovers a sound that shouldn't exist, and the ocean begins to answer.",
    description:
      "As pressure mounts, the crew must decide whether to flee or dive deeper into a conspiracy beneath the waves.",
    releasedYear: 2012,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 4.1, streamvibe: 4.0 },
    director: { name: "Hayao Miyazaki", country: "Japan" },
    music: { name: "Joe Hisaishi", country: "Japan" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 17,
    type: "movie",
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/other/77.webp",
    title: "Festival of Ash",
    trendingNow: true,
    duration: 140,
    views: 14,
    showFirstPage: true,
    genres: ["Comedy", "Family"],
    genre: "fantasy",
    tagline:
      "When a small town's annual festival turns into a ritual of fire and mystery, one teenager must uncover the truth.",
    description:
      "Amid sparks and shadows, friendships are tested and secrets rise with the flames.",
    releasedYear: 2013,
    availableLanguages: ["English", "German"],
    ratings: { imdb: 4.2, streamvibe: 3.9 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
  },
  //==============================================================================
  //Must - Watch Movies
  // watch: true
  //   poster: "/images/data/posters/4.webp",
  //     cover: "/images/data/movies/other/01.webp",
  {
    id: 212,
    type: "movie",
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/other/01.webp",
    title: "Silent Horizon",
    genres: ["Sci-Fi", "Thriller"],
    watch: true,
    duration: 142,
    views: 23,
    tagline:
      "When a satellite detects a strange signal from beyond the atmosphere, the world holds its breath.",
    description:
      "A mission to decode the message turns into a race against time as the sky begins to darken.",
    releasedYear: 2012,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 4.0, streamvibe: 4.3 },
    director: { name: "Hayao Miyazaki", country: "Japan" },
    music: { name: "Joe Hisaishi", country: "Japan" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 213,
    type: "movie",
    watch: true,
    duration: 134,
    views: 18,
    poster: "/images/data/posters/5.webp",
    cover: "/images/data/movies/other/02.webp",
    title: "Starlit Legacy",
    genres: ["Comedy", "Family"],
    tagline:
      "When an old family telescope reveals a long-lost star, a young astronomer must decide what to sacrifice for discovery.",
    description:
      "Between laughter and loss, a legacy is rewritten under the glow of a sky that has never been the same.",
    releasedYear: 2013,
    availableLanguages: ["English", "German"],
    ratings: { imdb: 4.3, streamvibe: 3.9 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 214,
    type: "movie",
    watch: true,
    duration: 132,
    views: 19,
    poster: "/images/data/posters/7.webp",
    cover: "/images/data/movies/other/03.webp",
    title: "Crimson Marauder",
    genres: ["War", "Historical"],
    tagline:
      "On the brink of war, a rogue captain leads a daring raid that could change the course of history.",
    description:
      "In a world of shifting alliances, every choice could ignite a conflict that consumes everything.",
    releasedYear: 2014,
    availableLanguages: ["English", "Japanese"],
    ratings: { imdb: 3.9, streamvibe: 4.1 },
    director: { name: "Christopher Nolan", country: "UK" },
    music: { name: "John Williams", country: "USA" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 215,
    type: "movie",
    watch: true,
    duration: 138,
    views: 20,
    poster: "/images/data/posters/6.webp",
    cover: "/images/data/movies/other/04.webp",
    title: "Whispering Vault",
    genres: ["Crime", "Thriller"],
    tagline:
      "A legendary vault holds a secret that could either save or doom an entire city.",
    description:
      "A relentless detective must outsmart a faceless syndicate and uncover the truth hidden behind the walls.",
    releasedYear: 2015,
    availableLanguages: ["English", "Kannada"],
    ratings: { imdb: 4.1, streamvibe: 3.9 },
    director: { name: "Rishab Shetty", country: "India" },
    music: { name: "A. R. Rahman", country: "India" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 216,
    type: "movie",
    watch: true,
    duration: 132,
    views: 19,
    poster: "/images/data/posters/9.webp",
    cover: "/images/data/movies/other/05.webp",
    title: "Iron Orchard",
    genres: ["Animation", "Family"],
    tagline:
      "In a town where machines grow fruit, a young inventor discovers the cost of the perfect harvest.",
    description:
      "When the gears of tradition start to grind, the only way forward may be to break the system entirely.",
    releasedYear: 2016,
    availableLanguages: ["English", "Hindi"],
    ratings: { imdb: 4.4, streamvibe: 4.0 },
    director: { name: "Hayao Miyazaki", country: "Japan" },
    music: { name: "Joe Hisaishi", country: "Japan" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 217,
    type: "movie",
    watch: true,
    duration: 138,
    views: 17,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/other/06.webp",
    title: "Velvet Revolver",
    genres: ["Musical", "Romance"],
    tagline:
      "When a legendary guitar is stolen, a down-on-his-luck musician must reclaim it before the band falls apart.",
    description:
      "From smoky clubs to sold-out arenas, the only thing sharper than the riffs is the rivalry that drives them.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 4.1, streamvibe: 3.8 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 218,
    type: "movie",
    watch: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/other/07.webp",
    title: "Aurora Drift",
    genres: ["Musical", "Romance"],
    duration: 136,
    views: 18,
    tagline:
      "When the northern lights dance, a pair of estranged musicians discover the melody that could heal their past.",
    description:
      "A journey through frozen landscapes, where every note brings them closer to reconciliation.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.9, streamvibe: 4.1 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
  },
  //================================================================================
  //action
  // genre: " action",
  {
    id: 1011,
    type: "movie",
    poster: "/images/data/posters/1.webp",
    cover: "/images/data/movies/action/genres-1.webp",
    title: "Raven Protocol",
    genre: "action",
    top10: true,
    genres: ["Action", "Adventure"],
    tagline:
      "A covert operative must infiltrate a fortified compound before dawn, with nothing but a raven's code to guide her.",

    description:
      "When the clock starts ticking, trust becomes the most dangerous weapon of all.",
    releasedYear: 2022,
    availableLanguages: ["English", "Hindi", "Tamil", "Telugu", "Kannada"],
    ratings: {
      imdb: 4.4,
      streamvibe: 4.1,
    },

    director: {
      name: "Rishab Shetty",
      country: "India",
    },
    music: {
      name: "B. Ajaneesh Loknath",
      country: "India",
    },

    cast: cast,
    reviews: reviews,
  },
  {
    id: 1012,
    type: "movie",
    poster: "/images/data/posters/1.webp",
    cover: "/images/data/movies/action/genres-2.webp",
    title: "Steel Tempest",
    genre: "action",
    top10: true,
    genres: ["Action", "Adventure"],
    tagline:
      "A stolen prototype weapon sets off a chain of events that throws an elite squad into the eye of a storm.",

    description:
      "Only by weathering the tempest can they hope to reclaim what was taken.",
    releasedYear: 2022,
    availableLanguages: ["English", "Hindi", "Tamil", "Telugu", "Kannada"],
    ratings: {
      imdb: 4.4,
      streamvibe: 4.1,
    },

    director: {
      name: "Rishab Shetty",
      country: "India",
    },
    music: {
      name: "B. Ajaneesh Loknath",
      country: "India",
    },

    cast: cast,
    reviews: reviews,
  },
  {
    id: 1013,
    type: "movie",
    poster: "/images/data/posters/1.webp",
    cover: "/images/data/movies/action/genres-3.webp",
    title: "Night Strike",
    genre: "action",
    top10: true,
    genres: ["Action", "Adventure"],
    tagline:
      "When the city sleeps, a lone vigilante takes aim at the syndicate that's been pulling the strings.",

    description:
      "In the shadows, every strike carries consequences that echo through the night.",
    releasedYear: 2022,
    availableLanguages: ["English", "Hindi", "Tamil", "Telugu", "Kannada"],
    ratings: {
      imdb: 4.4,
      streamvibe: 4.1,
    },

    director: {
      name: "Rishab Shetty",
      country: "India",
    },
    music: {
      name: "B. Ajaneesh Loknath",
      country: "India",
    },

    cast: cast,
    reviews: reviews,
  },
  {
    id: 1014,
    type: "movie",
    poster: "/images/data/posters/1.webp",
    cover: "/images/data/movies/action/genres-4.webp",
    title: "Vortex Run",
    genre: "action",
    top10: true,
    genres: ["Action", "Adventure"],
    tagline:
      "A rogue racer must navigate a deadly vortex course where the finish line is just the beginning.",

    description:
      "Every turn brings new hazards — and the only rule is to keep moving.",
    releasedYear: 2022,
    availableLanguages: ["English", "Hindi", "Tamil", "Telugu", "Kannada"],
    ratings: {
      imdb: 4.4,
      streamvibe: 4.0,
    },

    director: {
      name: "Rishab Shetty",
      country: "India",
    },
    music: {
      name: "B. Ajaneesh Loknath",
      country: "India",
    },

    cast: cast,
    reviews: reviews,
  },
  //================================================================================
  //adventure
  //genre: "adventure"
  // top10: true,
  {
    id: 2131,
    type: "movie",
    genre: "adventure",
    top10: true,
    poster: "/images/data/posters/5.webp",
    cover: "/images/data/movies/adventure/genres-5.webp",
    title: "Trailblazer's Map",
    genres: ["Comedy", "Family"],
    tagline:
      "A lost map leads a ragtag crew through uncharted wilds where every path tests their resolve.",
    description:
      "With laughter and courage as their compass, they discover that the greatest treasure is the journey itself.",
    releasedYear: 2013,
    availableLanguages: ["English", "German"],
    ratings: { imdb: 4.3, streamvibe: 4.1 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 2132,
    type: "movie",
    genre: "adventure",
    top10: true,
    poster: "/images/data/posters/5.webp",
    cover: "/images/data/movies/adventure/genres-6.webp",
    title: "Canyon of Echoes",
    genres: ["Comedy", "Family"],
    tagline:
      "A canyon's whispers lure explorers into a maze of memories where the past and present collide.",
    description:
      "As each echo reveals a secret, they must decide which truth to follow before it's too late.",
    releasedYear: 2013,
    availableLanguages: ["English", "German"],
    ratings: { imdb: 4.2, streamvibe: 4.0 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 2133,
    type: "movie",
    genre: "adventure",
    top10: true,
    poster: "/images/data/posters/7.webp",
    cover: "/images/data/movies/adventure/genres-7.webp",
    title: "Tidewalk Expedition",
    genres: ["Comedy", "Family"],
    tagline:
      "A coastal expedition becomes a race against the tide when the shoreline begins to shift overnight.",
    description:
      "They must learn to follow the current, or be swept away by the sea's own secrets.",
    releasedYear: 2013,
    availableLanguages: ["English", "German"],
    ratings: { imdb: 4.3, streamvibe: 4.0 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 2134,
    type: "movie",
    genre: "adventure",
    top10: true,
    poster: "/images/data/posters/5.webp",
    cover: "/images/data/movies/adventure/genres-8.webp",
    title: "Skybound Compass",
    genres: ["Comedy", "Family"],
    tagline:
      "A broken compass points to the sky as a group of misfits chase the legend of a floating island.",
    description:
      "With each leap of faith, they discover that the only way forward is to trust one another.",
    releasedYear: 2013,
    availableLanguages: ["English", "German"],
    ratings: { imdb: 4.4, streamvibe: 4.1 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
  },
  //================================================================================
  //comedy
  //genre: "comedy",
  // top10: true,
  {
    id: 21488,
    type: "movie",
    genre: "comedy",
    top10: true,
    poster: "/images/data/posters/7.webp",
    cover: "/images/data/movies/comedy/genres-9.webp",
    title: "Laughing Parade",
    genres: ["War", "Historical"],
    tagline:
      "A troupe of misfit performers turns a dull parade into a riotous rebellion.",
    description:
      "Their antics bring joy and chaos in equal measure, proving laughter can be the loudest protest.",
    releasedYear: 2014,
    availableLanguages: ["English", "Japanese"],
    ratings: { imdb: 3.8, streamvibe: 4.2 },
    director: { name: "Christopher Nolan", country: "UK" },
    music: { name: "John Williams", country: "USA" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 214884,
    type: "movie",
    genre: "comedy",
    top10: true,
    poster: "/images/data/posters/7.webp",
    cover: "/images/data/movies/comedy/genres-10.webp",
    title: "Chaplin's Heist",
    genres: ["War", "Historical"],
    tagline:
      "A silent-film star plans the heist of the century, relying on slapstick and timing instead of guns.",
    description:
      "With each pratfall and pratfall, the plan comes closer to victory and catastrophe.",
    releasedYear: 2014,
    availableLanguages: ["English", "Japanese"],
    ratings: { imdb: 3.7, streamvibe: 4.3 },
    director: { name: "Christopher Nolan", country: "UK" },
    music: { name: "John Williams", country: "USA" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 214884,
    type: "movie",
    genre: "comedy",
    top10: true,
    poster: "/images/data/posters/7.webp",
    cover: "/images/data/movies/comedy/genres-11.webp",
    title: "Punchline Frontier",
    genres: ["War", "Historical"],
    tagline:
      "A washed-up comedian takes one last road trip to deliver the final punchline of his career.",
    description:
      "Between dusty towns and broken stages, he discovers that the best jokes are the ones that heal.",
    releasedYear: 2014,
    availableLanguages: ["English", "Japanese"],
    ratings: { imdb: 3.8, streamvibe: 4.2 },
    director: { name: "Christopher Nolan", country: "UK" },
    music: { name: "John Williams", country: "USA" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 2148833,
    type: "movie",
    genre: "comedy",
    top10: true,
    poster: "/images/data/posters/7.webp",
    cover: "/images/data/movies/comedy/genres-12.webp",
    title: "Comedy of Errors",
    genres: ["War", "Historical"],
    tagline:
      "When the royal banquet goes terribly wrong, a band of clowns must improvise their way out of disaster.",
    description:
      "Chaos reigns, but laughter saves the day in the most unexpected ways.",
    releasedYear: 2014,
    availableLanguages: ["English", "Japanese"],
    ratings: { imdb: 3.7, streamvibe: 4.1 },
    director: { name: "Christopher Nolan", country: "UK" },
    music: { name: "John Williams", country: "USA" },
    cast: cast,
    reviews: reviews,
  },
  //================================================================================
  //comedy
  //genre: "drama",
  // top10: true,
  {
    id: 21522,
    type: "movie",
    genre: "drama",
    top10: true,
    poster: "/images/data/posters/6.webp",
    cover: "/images/data/movies/drama/genres-13.webp",
    title: "Broken Oath",
    genres: ["Crime", "Thriller"],
    tagline:
      "A prosecutor's career hangs in the balance when a case forces him to confront his own darkest secret.",
    description:
      "In a city where justice is negotiable, the only thing harder than the truth is admitting it.",
    releasedYear: 2015,
    availableLanguages: ["English", "Kannada"],
    ratings: { imdb: 4.1, streamvibe: 3.9 },
    director: { name: "Rishab Shetty", country: "India" },
    music: { name: "A. R. Rahman", country: "India" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 215220,
    type: "movie",
    genre: "drama",
    top10: true,
    poster: "/images/data/posters/6.webp",
    cover: "/images/data/movies/drama/genres-14.webp",
    title: "Glass Court",
    genres: ["Crime", "Thriller"],
    tagline:
      "A high-stakes trial exposes the fragile line between guilt and innocence.",
    description:
      "Every testimony peels back another layer, revealing that the biggest betrayal may come from within.",
    releasedYear: 2015,
    availableLanguages: ["English", "Kannada"],
    ratings: { imdb: 4.1, streamvibe: 3.9 },
    director: { name: "Rishab Shetty", country: "India" },
    music: { name: "A. R. Rahman", country: "India" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 215522,
    type: "movie",
    genre: "drama",
    top10: true,
    poster: "/images/data/posters/6.webp",
    cover: "/images/data/movies/drama/genres-15.webp",
    title: "City of Ashes",
    genres: ["Crime", "Thriller"],
    tagline:
      "In a city where every alley tells a story, a detective must put the pieces together before the next body falls.",
    description:
      "The truth is buried beneath scandal and smoke; finding it could burn everything to the ground.",
    releasedYear: 2015,
    availableLanguages: ["English", "Kannada"],
    ratings: { imdb: 4.1, streamvibe: 3.9 },
    director: { name: "Rishab Shetty", country: "India" },
    music: { name: "A. R. Rahman", country: "India" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 2152244,
    type: "movie",
    genre: "drama",
    top10: true,
    poster: "/images/data/posters/6.webp",
    cover: "/images/data/movies/drama/genres-16.webp",
    title: "Echo of Justice",
    genres: ["Crime", "Thriller"],
    tagline:
      "When a whistleblower disappears, a lawyer races against the system to bring the truth to light.",
    description:
      "Every revelation brings them closer to vindication — and further into danger.",
    releasedYear: 2015,
    availableLanguages: ["English", "Kannada"],
    ratings: { imdb: 4.2, streamvibe: 4.0 },
    director: { name: "Rishab Shetty", country: "India" },
    music: { name: "A. R. Rahman", country: "India" },
    cast: cast,
    reviews: reviews,
  },
  //================================================================================
  //horror
  //genre: "horror",
  // top10: true,
  {
    id: 232317,
    type: "movie",
    genre: "horror",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/horror/genres-17.webp",
    title: "Night Whispers",
    genres: ["Musical", "Romance"],
    tagline:
      "When the night speaks, the dead answer — and some secrets are better left unheard.",
    description:
      "A small town's lullaby becomes a scream as whispers in the dark pull its residents into nightmares.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.1 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 29932317,
    type: "movie",
    genre: "horror",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/horror/genres-18.webp",
    title: "Haunt of Hollow Lane",
    genres: ["Musical", "Romance"],
    tagline:
      "Every house has a story. On Hollow Lane, the walls tell you if you listen closely enough.",
    description:
      "A curious family moves in and discovers that some neighborhoods never let you go.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.0 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 23231807,
    type: "movie",
    genre: "horror",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/horror/genres-19.webp",
    title: "Nightmare Threshold",
    genres: ["Musical", "Romance"],
    tagline:
      "When dreams begin to bleed into the waking world, the only escape is to confront your darkest fear.",
    description:
      "A group of strangers must face the horrors they've locked away before they tear them apart.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.0 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 23552317,
    type: "movie",
    genre: "horror",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/horror/genres-19.webp",
    title: "Shadow Harvest",
    genres: ["Musical", "Romance"],
    tagline:
      "In a village where the harvest moon brings more than crops, the townsfolk must decide what to sacrifice.",
    description:
      "As shadows lengthen, the line between ritual and horror blurs, and the cost of survival becomes clear.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.1 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
  },
  //================================================================================
  //fantasy
  //genre: "fantasy",
  // top10: true,
  {
    id: 233218,
    type: "movie",
    genre: "fantasy",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/fantasy/20.webp",
    title: "Starfall Keep",
    genres: ["Musical", "Romance"],
    tagline:
      "When falling stars become weapons, a guardian must choose between duty and desire.",
    description:
      "In a kingdom where the skies are as dangerous as the ground, love is the only magic that truly matters.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.1 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 278633218,
    type: "movie",
    genre: "fantasy",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/fantasy/22.webp",
    title: "Moonlit Saga",
    genres: ["Musical", "Romance"],
    tagline:
      "Under a moon that never sets, a renegade bard composes a song that could topple empires.",
    description:
      "Rhythm and rebellion intertwine as melody becomes the spark for a revolution.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.1 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 2332179978,
    type: "movie",
    genre: "fantasy",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/fantasy/23.webp",
    title: "Crystal Vale",
    genres: ["Musical", "Romance"],
    tagline:
      "A hidden valley holds a crystal that can rewrite reality — if one dare to touch it.",
    description:
      "For some, the price of a wish is more than they can afford. For others, it's everything.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.1 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
  },
  {
    id: 2332967818,
    type: "movie",
    genre: "fantasy",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/fantasy/24.webp",
    title: "Whisperwind Grove",
    genres: ["Musical", "Romance"],
    tagline:
      "In a forest where the trees can speak, a lost traveler must learn to listen.",
    description:
      "Magic is not loud; it is the quiet promise that keeps the world turning.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.1 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
  },
  //=======================================================================================
  //=======================================================================================
  //=======================================================================================
  //   type: "show", помістити сюди
  // {
  //   id: 2,
  //   type: "show",
  //   title: "Stranger Things",
  //   tagline:
  //     "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
  //   description:
  //     "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
  //   releasedYear: 2022,
  //   availableLanguages: ["English", "Hindi", "Tamil", "Telugu", "Kannada"],
  //   ratings: {
  //     imdb: 4.5,
  //     streamvibe: 4.0,
  //   },
  //   genres: ["Sci-Fi TV", "Teen TV Shows", "US TV Shows"],
  //   director: {
  //     name: "The Duffer Brothers",
  //     country: "USA",
  //   },
  //   music: {
  //     name: "Kyle Dixon",
  //     country: "USA",
  //   },
  //   seasons: [
  //     {
  //       season: 1,
  //       episodes: 8,
  //     },
  //     {
  //       season: 2,
  //       episodes: [
  //         {
  //           number: 1,
  //           title: "Chapter One: The Vanishing of Will Byers",
  //           duration: "49 min",
  //           description:
  //             "On his way from a friend's house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.",
  //         },
  //         {
  //           number: 2,
  //           title: "Chapter Two: The Weirdo on Maple Street",
  //           duration: "56 min",
  //           description:
  //             "Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.",
  //         },
  //         {
  //           number: 3,
  //           title: "Chapter Three: Holly, Jolly",
  //           duration: "52 min",
  //           description:
  //             "An increasingly concerned Nancy looks for Barb and finds out what Jonathan’s been up to. Joyce is convinced Will is trying to talk to her.",
  //         },
  //         {
  //           number: 4,
  //           title: "Chapter Four: The Body",
  //           duration: "51 min",
  //           description:
  //             "Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover.",
  //         },
  //         {
  //           number: 5,
  //           title: "Chapter Five: The Flea and the Acrobat",
  //           duration: "53 min",
  //           description:
  //             "Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.",
  //         },
  //       ],
  //     },
  //     {
  //       season: 3,
  //       episodes: 7,
  //     },
  //   ],
  //   cast: cast,
  // },

  //----------------------New Releases
  {
    id: 187342,
    type: "show",
    duration: 250,
    seasonsCount: 4,
    poster: "/images/data/posters/1.webp",
    cover: "/images/data/shows/1.webp",
    title: "Forest of Echoes",
    newReleases: true,
    genre: "action",
    dateReleases: "08.12.2022",
    genres: ["Action", "Adventure"],
    tagline:
      "A renegade ranger must protect a sacred forest when a mercenary band threatens to burn it to the ground.",
    description:
      "When ancient guardians awaken, one reluctant hero must bridge the gap between man and wilderness to save both.",
    releasedYear: 2022,
    availableLanguages: ["English", "Hindi", "Tamil", "Telugu", "Kannada"],
    ratings: {
      imdb: 4.6,
      streamvibe: 4.1,
    },
    director: {
      name: "Rishab Shetty",
      country: "India",
    },
    music: {
      name: "B. Ajaneesh Loknath",
      country: "India",
    },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 904512,
    type: "show",
    duration: 655,
    seasonsCount: 3,
    poster: "/images/data/posters/2.webp",
    cover: "/images/data/shows/2.webp",
    title: "Midnight Horizon",
    genres: ["Action", "Adventure"],
    newReleases: true,
    genre: "action",
    dateReleases: "09.12.2022",
    tagline:
      "A lone pilot races through storm-torn skies to deliver a secret that could change the world.",
    description:
      "Haunted by a lost past, she must outfly enemies and her own doubts to keep hope alive.",
    releasedYear: 2001,
    availableLanguages: ["English", "Hindi"],
    ratings: { imdb: 4.3, streamvibe: 3.7 },
    director: { name: "Christopher Nolan", country: "UK" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 320174,
    type: "show",
    duration: 452,
    seasonsCount: 3,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/shows/3.webp",
    title: "Shores of Silence",
    newReleases: true,
    genre: "action",
    dateReleases: "22.04.2002",
    genres: ["Drama", "Romance"],
    tagline:
      "In a coastal town where secrets drown beneath the surf, one woman searches for the voice she lost.",
    description:
      "A former singer returns home and uncovers a conspiracy that could silence the shoreline forever.",
    releasedYear: 2002,
    availableLanguages: ["English", "Tamil"],
    ratings: { imdb: 3.9, streamvibe: 4.0 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "A. R. Rahman", country: "India" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 581930,
    type: "show",
    duration: 348,
    seasonsCount: 3,
    poster: "/images/data/posters/9.webp",
    cover: "/images/data/shows/4.webp",
    title: "Nightfall Protocol",
    genres: ["Thriller", "Mystery"],
    genre: "action",
    newReleases: true,
    dateReleases: "02.08.2022",
    tagline:
      "A rogue AI awakens in a neon metropolis, forcing a hacker to risk everything to shut it down.",
    description:
      "As the city descends into chaos, an unlikely alliance must rewrite the rules before nightfall.",
    releasedYear: 2003,
    availableLanguages: ["English", "Telugu"],
    ratings: { imdb: 4.5, streamvibe: 4.2 },
    director: { name: "Hayao Miyazaki", country: "Japan" },
    music: { name: "Joe Hisaishi", country: "Japan" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 247819,
    type: "show",
    duration: 750,
    seasonsCount: 3,
    poster: "/images/data/posters/9.webp",
    cover: "/images/data/shows/5.webp",
    title: "Echoes of Avalon",
    genres: ["Fantasy", "Adventure"],
    newReleases: true,
    genre: "adventure",
    dateReleases: "12.08.2010",
    tagline:
      "When a hidden kingdom is threatened, a young knight must journey beyond the mists to reclaim his legacy.",
    description:
      "A mythic quest unfolds in a world where magic and medieval combat collide.",
    releasedYear: 2011,
    availableLanguages: ["English", "Spanish"],
    ratings: { imdb: 4.2, streamvibe: 3.9 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 693124,
    type: "show",
    duration: 452,
    seasonsCount: 3,
    poster: "/images/data/posters/9.webp",
    cover: "/images/data/shows/6.webp",
    title: "Quantum Rift",
    genres: ["Sci-Fi", "Thriller"],
    newReleases: true,
    genre: "adventure",
    dateReleases: "03.01.2022",
    tagline:
      "When time starts unraveling, a physicist must race through alternate realities to save existence.",
    description:
      "Across fractured timelines, choices become the only currency left in a collapsing universe.",
    releasedYear: 2012,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 4.0, streamvibe: 4.3 },
    director: { name: "Hayao Miyazaki", country: "Japan" },
    music: { name: "Joe Hisaishi", country: "Japan" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 428751,
    type: "show",
    duration: 548,
    seasonsCount: 3,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/shows/7.webp",
    title: "Carnival of Thieves",
    newReleases: true,
    genre: "adventure",
    dateReleases: "12.11.2022",
    genres: ["Comedy", "Family"],
    tagline:
      "In a city of glittering neon, a street performer becomes the mastermind of the greatest heist ever attempted.",
    description:
      "With every trick, the stakes rise; one mistake could mean a lifetime behind bars.",
    releasedYear: 2013,
    availableLanguages: ["English", "German"],
    ratings: { imdb: 4.3, streamvibe: 3.8 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },

  //-----Trending Now
  {
    id: 675912,
    type: "show",
    duration: 350,
    seasonsCount: 5,
    poster: "/images/data/posters/1.webp",
    cover: "/images/data/shows/8.webp",
    title: "Solar Drift",
    trendingNow: true,
    views: 15,

    genres: ["Action", "Adventure"],
    genre: "comedy",
    tagline:
      "A retired astronaut returns to the stars when a rogue comet threatens Earth.",
    description:
      "As the world watches, she must pilot one last mission that could either save humanity or end it.",
    releasedYear: 2022,
    availableLanguages: ["English", "Hindi", "Tamil", "Telugu", "Kannada"],
    ratings: {
      imdb: 4.6,
      streamvibe: 4.2,
    },
    director: {
      name: "Rishab Shetty",
      country: "India",
    },
    music: {
      name: "B. Ajaneesh Loknath",
      country: "India",
    },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 819374,
    type: "show",
    duration: 750,
    seasonsCount: 3,
    poster: "/images/data/posters/2.webp",
    cover: "/images/data/shows/9.webp",
    title: "Neon Outlaws",
    genres: ["Action", "Adventure"],
    genre: "comedy",
    trendingNow: true,
    views: 21,

    tagline:
      "A crew of misfits steals back the city from a corrupt corporate regime.",
    description:
      "In a future ruled by corporations, rebellion comes with a price.",
    releasedYear: 2001,
    availableLanguages: ["English", "Hindi"],
    ratings: { imdb: 4.3, streamvibe: 3.8 },
    director: { name: "Christopher Nolan", country: "UK" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 356821,
    type: "show",
    duration: 652,
    seasonsCount: 3,
    poster: "/images/data/posters/5.webp",
    cover: "/images/data/shows/10.webp",
    title: "Harbor of Shadows",
    trendingNow: true,
    views: 9,

    genres: ["Drama", "Romance"],
    genre: "drama",
    tagline:
      "In a seaside town, a journalist uncovers a decades-old mystery buried beneath the waves.",
    description:
      "As the tides turn, the past and present collide in a story of love, loss, and hidden truths.",
    releasedYear: 2002,
    availableLanguages: ["English", "Tamil"],
    ratings: { imdb: 4.0, streamvibe: 4.2 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "A. R. Rahman", country: "India" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 742918,
    type: "show",
    duration: 449,
    seasonsCount: 3,
    poster: "/images/data/posters/9.webp",
    cover: "/images/data/shows/11.webp",
    title: "Midnight Covenant",
    genres: ["Thriller", "Mystery"],
    genre: "drama",
    trendingNow: true,
    views: 18,

    tagline:
      "When ancient oaths are broken, a detective must unravel a century-old conspiracy before dawn.",
    description:
      "The line between justice and vengeance blurs as buried secrets resurface in the dead of night.",
    releasedYear: 2003,
    availableLanguages: ["English", "Telugu"],
    ratings: { imdb: 4.7, streamvibe: 4.3 },
    director: { name: "Hayao Miyazaki", country: "Japan" },
    music: { name: "Joe Hisaishi", country: "Japan" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 159273,
    type: "show",
    duration: 452,
    seasonsCount: 4,
    poster: "/images/data/posters/6.webp",
    cover: "/images/data/shows/12.webp",
    title: "Dragon's Library",
    genres: ["Fantasy", "Adventure"],
    genre: "fantasy",
    trendingNow: true,
    views: 22,

    tagline:
      "When the world's oldest grimoire is stolen, a librarian must race against time to retrieve it before spells are rewritten.",
    description:
      "Between enchanted stacks, allies and enemies blur as knowledge becomes the most dangerous weapon.",
    releasedYear: 2011,
    availableLanguages: ["English", "Spanish"],
    ratings: { imdb: 4.2, streamvibe: 3.9 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 284601,
    type: "show",
    duration: 450,
    seasonsCount: 3,
    poster: "/images/data/posters/10.webp",
    cover: "/images/data/shows/13.webp",
    title: "Echoes of the Deep",
    genres: ["Sci-Fi", "Thriller"],
    genre: "fantasy",
    trendingNow: true,
    views: 16,

    tagline:
      "A deep-sea research vessel discovers a sound that shouldn't exist, and the ocean begins to answer.",
    description:
      "As pressure mounts, the crew must decide whether to flee or dive deeper into a conspiracy beneath the waves.",
    releasedYear: 2012,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 4.1, streamvibe: 4.0 },
    director: { name: "Hayao Miyazaki", country: "Japan" },
    music: { name: "Joe Hisaishi", country: "Japan" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 917346,
    type: "show",
    duration: 648,
    seasonsCount: 3,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/shows/14.webp",
    title: "Festival of Ash",
    trendingNow: true,
    views: 14,

    genres: ["Comedy", "Family"],
    genre: "fantasy",
    tagline:
      "When a small town's annual festival turns into a ritual of fire and mystery, one teenager must uncover the truth.",
    description:
      "Amid sparks and shadows, friendships are tested and secrets rise with the flames.",
    releasedYear: 2013,
    availableLanguages: ["English", "German"],
    ratings: { imdb: 4.2, streamvibe: 3.9 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },

  // Must-Watch Shows
  {
    id: 512739,
    type: "show",
    duration: 650,
    seasonsCount: 3,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/shows/15.webp",
    title: "Silent Horizon",
    genres: ["Sci-Fi", "Thriller"],
    watch: true,
    views: 23,
    tagline:
      "When a satellite detects a strange signal from beyond the atmosphere, the world holds its breath.",
    description:
      "A mission to decode the message turns into a race against time as the sky begins to darken.",
    releasedYear: 2012,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 4.0, streamvibe: 4.3 },
    director: { name: "Hayao Miyazaki", country: "Japan" },
    music: { name: "Joe Hisaishi", country: "Japan" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 638194,
    type: "show",
    duration: 548,
    seasonsCount: 3,
    watch: true,
    views: 18,
    poster: "/images/data/posters/5.webp",
    cover: "/images/data/shows/16.webp",
    title: "Starlit Legacy",
    genres: ["Comedy", "Family"],
    tagline:
      "When an old family telescope reveals a long-lost star, a young astronomer must decide what to sacrifice for discovery.",
    description:
      "Between laughter and loss, a legacy is rewritten under the glow of a sky that has never been the same.",
    releasedYear: 2013,
    availableLanguages: ["English", "German"],
    ratings: { imdb: 4.3, streamvibe: 3.9 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 274918,
    type: "show",
    duration: 549,
    seasonsCount: 3,
    watch: true,
    views: 19,
    poster: "/images/data/posters/7.webp",
    cover: "/images/data/shows/17.webp",
    title: "Crimson Marauder",
    genres: ["War", "Historical"],
    tagline:
      "On the brink of war, a rogue captain leads a daring raid that could change the course of history.",
    description:
      "In a world of shifting alliances, every choice could ignite a conflict that consumes everything.",
    releasedYear: 2014,
    availableLanguages: ["English", "Japanese"],
    ratings: { imdb: 3.9, streamvibe: 4.1 },
    director: { name: "Christopher Nolan", country: "UK" },
    music: { name: "John Williams", country: "USA" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 391746,
    type: "show",
    duration: 648,
    seasonsCount: 3,
    watch: true,
    views: 20,
    poster: "/images/data/posters/6.webp",
    cover: "/images/data/shows/18.webp",
    title: "Whispering Vault",
    genres: ["Crime", "Thriller"],
    tagline:
      "A legendary vault holds a secret that could either save or doom an entire city.",
    description:
      "A relentless detective must outsmart a faceless syndicate and uncover the truth hidden behind the walls.",
    releasedYear: 2015,
    availableLanguages: ["English", "Kannada"],
    ratings: { imdb: 4.1, streamvibe: 3.9 },
    director: { name: "Rishab Shetty", country: "India" },
    music: { name: "A. R. Rahman", country: "India" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 528193,
    type: "show",
    duration: 347,
    seasonsCount: 3,
    watch: true,
    views: 19,
    poster: "/images/data/posters/9.webp",
    cover: "/images/data/shows/19.webp",
    title: "Iron Orchard",
    genres: ["Animation", "Family"],
    tagline:
      "In a town where machines grow fruit, a young inventor discovers the cost of the perfect harvest.",
    description:
      "When the gears of tradition start to grind, the only way forward may be to break the system entirely.",
    releasedYear: 2016,
    availableLanguages: ["English", "Hindi"],
    ratings: { imdb: 4.4, streamvibe: 4.0 },
    director: { name: "Hayao Miyazaki", country: "Japan" },
    music: { name: "Joe Hisaishi", country: "Japan" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 764102,
    type: "show",
    duration: 351,
    seasonsCount: 3,
    watch: true,
    views: 17,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/shows/20.webp",
    title: "Velvet Revolver",
    genres: ["Musical", "Romance"],
    tagline:
      "When a legendary guitar is stolen, a down-on-his-luck musician must reclaim it before the band falls apart.",
    description:
      "From smoky clubs to sold-out arenas, the only thing sharper than the riffs is the rivalry that drives them.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 4.1, streamvibe: 3.8 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 829374,
    type: "show",
    duration: 449,
    seasonsCount: 3,
    watch: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/shows/21.webp",
    title: "Aurora Drift",
    genres: ["Musical", "Romance"],
    views: 18,
    tagline:
      "When the northern lights dance, a pair of estranged musicians discover the melody that could heal their past.",
    description:
      "A journey through frozen landscapes, where every note brings them closer to reconciliation.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.9, streamvibe: 4.1 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },

  // action
  {
    id: 1011873,
    type: "show",
    duration: 548,
    seasonsCount: 4,
    poster: "/images/data/posters/1.webp",
    cover: "/images/data/movies/action/genres-1.webp",
    title: "Raven Protocol",
    genre: "action",
    top10: true,
    genres: ["Action", "Adventure"],
    tagline:
      "A covert operative must infiltrate a fortified compound before dawn, with nothing but a raven's code to guide her.",
    description:
      "When the clock starts ticking, trust becomes the most dangerous weapon of all.",
    releasedYear: 2022,
    availableLanguages: ["English", "Hindi", "Tamil", "Telugu", "Kannada"],
    ratings: {
      imdb: 4.4,
      streamvibe: 4.1,
    },
    director: {
      name: "Rishab Shetty",
      country: "India",
    },
    music: {
      name: "B. Ajaneesh Loknath",
      country: "India",
    },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 1012849,
    type: "show",
    duration: 650,
    seasonsCount: 3,
    poster: "/images/data/posters/1.webp",
    cover: "/images/data/movies/action/genres-2.webp",
    title: "Steel Tempest",
    genre: "action",
    top10: true,
    genres: ["Action", "Adventure"],
    tagline:
      "A stolen prototype weapon sets off a chain of events that throws an elite squad into the eye of a storm.",
    description:
      "Only by weathering the tempest can they hope to reclaim what was taken.",
    releasedYear: 2022,
    availableLanguages: ["English", "Hindi", "Tamil", "Telugu", "Kannada"],
    ratings: {
      imdb: 4.4,
      streamvibe: 4.1,
    },
    director: {
      name: "Rishab Shetty",
      country: "India",
    },
    music: {
      name: "B. Ajaneesh Loknath",
      country: "India",
    },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 1013927,
    type: "show",
    duration: 549,
    seasonsCount: 3,
    poster: "/images/data/posters/1.webp",
    cover: "/images/data/movies/action/genres-3.webp",
    title: "Night Strike",
    genre: "action",
    top10: true,
    genres: ["Action", "Adventure"],
    tagline:
      "When the city sleeps, a lone vigilante takes aim at the syndicate that's been pulling the strings.",
    description:
      "In the shadows, every strike carries consequences that echo through the night.",
    releasedYear: 2022,
    availableLanguages: ["English", "Hindi", "Tamil", "Telugu", "Kannada"],
    ratings: {
      imdb: 4.4,
      streamvibe: 4.1,
    },
    director: {
      name: "Rishab Shetty",
      country: "India",
    },
    music: {
      name: "B. Ajaneesh Loknath",
      country: "India",
    },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 1014872,
    type: "show",
    duration: 452,
    seasonsCount: 3,
    poster: "/images/data/posters/1.webp",
    cover: "/images/data/movies/action/genres-4.webp",
    title: "Vortex Run",
    genre: "action",
    top10: true,
    genres: ["Action", "Adventure"],
    tagline:
      "A rogue racer must navigate a deadly vortex course where the finish line is just the beginning.",
    description:
      "Every turn brings new hazards — and the only rule is to keep moving.",
    releasedYear: 2022,
    availableLanguages: ["English", "Hindi", "Tamil", "Telugu", "Kannada"],
    ratings: {
      imdb: 4.4,
      streamvibe: 4.0,
    },
    director: {
      name: "Rishab Shetty",
      country: "India",
    },
    music: {
      name: "B. Ajaneesh Loknath",
      country: "India",
    },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },

  // adventure
  {
    id: 2131874,
    type: "show",
    genre: "adventure",
    top10: true,
    poster: "/images/data/posters/5.webp",
    cover: "/images/data/movies/adventure/genres-5.webp",
    title: "Trailblazer's Map",
    genres: ["Comedy", "Family"],
    tagline:
      "A lost map leads a ragtag crew through uncharted wilds where every path tests their resolve.",
    description:
      "With laughter and courage as their compass, they discover that the greatest treasure is the journey itself.",
    releasedYear: 2013,
    availableLanguages: ["English", "German"],
    ratings: { imdb: 4.3, streamvibe: 4.1 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 2132841,
    type: "show",
    genre: "adventure",
    top10: true,
    poster: "/images/data/posters/5.webp",
    cover: "/images/data/movies/adventure/genres-6.webp",
    title: "Canyon of Echoes",
    genres: ["Comedy", "Family"],
    tagline:
      "A canyon's whispers lure explorers into a maze of memories where the past and present collide.",
    description:
      "As each echo reveals a secret, they must decide which truth to follow before it's too late.",
    releasedYear: 2013,
    availableLanguages: ["English", "German"],
    ratings: { imdb: 4.2, streamvibe: 4.0 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 2133927,
    type: "show",
    genre: "adventure",
    top10: true,
    poster: "/images/data/posters/7.webp",
    cover: "/images/data/movies/adventure/genres-7.webp",
    title: "Tidewalk Expedition",
    genres: ["Comedy", "Family"],
    tagline:
      "A coastal expedition becomes a race against the tide when the shoreline begins to shift overnight.",
    description:
      "They must learn to follow the current, or be swept away by the sea's own secrets.",
    releasedYear: 2013,
    availableLanguages: ["English", "German"],
    ratings: { imdb: 4.3, streamvibe: 4.0 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 2134872,
    type: "show",
    genre: "adventure",
    top10: true,
    poster: "/images/data/posters/5.webp",
    cover: "/images/data/movies/adventure/genres-8.webp",
    title: "Skybound Compass",
    genres: ["Comedy", "Family"],
    tagline:
      "A broken compass points to the sky as a group of misfits chase the legend of a floating island.",
    description:
      "With each leap of faith, they discover that the only way forward is to trust one another.",
    releasedYear: 2013,
    availableLanguages: ["English", "German"],
    ratings: { imdb: 4.4, streamvibe: 4.1 },
    director: { name: "Quentin Tarantino", country: "USA" },
    music: { name: "Hans Zimmer", country: "Germany" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },

  // comedy
  {
    id: 21488193,
    type: "show",
    genre: "comedy",
    top10: true,
    poster: "/images/data/posters/7.webp",
    cover: "/images/data/movies/comedy/genres-9.webp",
    title: "Laughing Parade",
    genres: ["War", "Historical"],
    tagline:
      "A troupe of misfit performers turns a dull parade into a riotous rebellion.",
    description:
      "Their antics bring joy and chaos in equal measure, proving laughter can be the loudest protest.",
    releasedYear: 2014,
    availableLanguages: ["English", "Japanese"],
    ratings: { imdb: 3.8, streamvibe: 4.2 },
    director: { name: "Christopher Nolan", country: "UK" },
    music: { name: "John Williams", country: "USA" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 21488274,
    type: "show",
    genre: "comedy",
    top10: true,
    poster: "/images/data/posters/7.webp",
    cover: "/images/data/movies/comedy/genres-10.webp",
    title: "Chaplin's Heist",
    genres: ["War", "Historical"],
    tagline:
      "A silent-film star plans the heist of the century, relying on slapstick and timing instead of guns.",
    description:
      "With each pratfall and pratfall, the plan comes closer to victory and catastrophe.",
    releasedYear: 2014,
    availableLanguages: ["English", "Japanese"],
    ratings: { imdb: 3.7, streamvibe: 4.3 },
    director: { name: "Christopher Nolan", country: "UK" },
    music: { name: "John Williams", country: "USA" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 21488365,
    type: "show",
    genre: "comedy",
    top10: true,
    poster: "/images/data/posters/7.webp",
    cover: "/images/data/movies/comedy/genres-11.webp",
    title: "Punchline Frontier",
    genres: ["War", "Historical"],
    tagline:
      "A washed-up comedian takes one last road trip to deliver the final punchline of his career.",
    description:
      "Between dusty towns and broken stages, he discovers that the best jokes are the ones that heal.",
    releasedYear: 2014,
    availableLanguages: ["English", "Japanese"],
    ratings: { imdb: 3.8, streamvibe: 4.2 },
    director: { name: "Christopher Nolan", country: "UK" },
    music: { name: "John Williams", country: "USA" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 21488456,
    type: "show",
    genre: "comedy",
    top10: true,
    poster: "/images/data/posters/7.webp",
    cover: "/images/data/movies/comedy/genres-12.webp",
    title: "Comedy of Errors",
    genres: ["War", "Historical"],
    tagline:
      "When the royal banquet goes terribly wrong, a band of clowns must improvise their way out of disaster.",
    description:
      "Chaos reigns, but laughter saves the day in the most unexpected ways.",
    releasedYear: 2014,
    availableLanguages: ["English", "Japanese"],
    ratings: { imdb: 3.7, streamvibe: 4.1 },
    director: { name: "Christopher Nolan", country: "UK" },
    music: { name: "John Williams", country: "USA" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },

  // drama
  {
    id: 21522193,
    type: "show",
    genre: "drama",
    top10: true,
    poster: "/images/data/posters/6.webp",
    cover: "/images/data/movies/drama/genres-13.webp",
    title: "Broken Oath",
    genres: ["Crime", "Thriller"],
    tagline:
      "A prosecutor's career hangs in the balance when a case forces him to confront his own darkest secret.",
    description:
      "In a city where justice is negotiable, the only thing harder than the truth is admitting it.",
    releasedYear: 2015,
    availableLanguages: ["English", "Kannada"],
    ratings: { imdb: 4.1, streamvibe: 3.9 },
    director: { name: "Rishab Shetty", country: "India" },
    music: { name: "A. R. Rahman", country: "India" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 21522284,
    type: "show",
    genre: "drama",
    top10: true,
    poster: "/images/data/posters/6.webp",
    cover: "/images/data/movies/drama/genres-14.webp",
    title: "Glass Court",
    genres: ["Crime", "Thriller"],
    tagline:
      "A high-stakes trial exposes the fragile line between guilt and innocence.",
    description:
      "Every testimony peels back another layer, revealing that the biggest betrayal may come from within.",
    releasedYear: 2015,
    availableLanguages: ["English", "Kannada"],
    ratings: { imdb: 4.1, streamvibe: 3.9 },
    director: { name: "Rishab Shetty", country: "India" },
    music: { name: "A. R. Rahman", country: "India" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 21522375,
    type: "show",
    genre: "drama",
    top10: true,
    poster: "/images/data/posters/6.webp",
    cover: "/images/data/movies/drama/genres-15.webp",
    title: "City of Ashes",
    genres: ["Crime", "Thriller"],
    tagline:
      "In a city where every alley tells a story, a detective must put the pieces together before the next body falls.",
    description:
      "The truth is buried beneath scandal and smoke; finding it could burn everything to the ground.",
    releasedYear: 2015,
    availableLanguages: ["English", "Kannada"],
    ratings: { imdb: 4.1, streamvibe: 3.9 },
    director: { name: "Rishab Shetty", country: "India" },
    music: { name: "A. R. Rahman", country: "India" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 21522466,
    type: "show",
    genre: "drama",
    top10: true,
    poster: "/images/data/posters/6.webp",
    cover: "/images/data/movies/drama/genres-16.webp",
    title: "Echo of Justice",
    genres: ["Crime", "Thriller"],
    tagline:
      "When a whistleblower disappears, a lawyer races against the system to bring the truth to light.",
    description:
      "Every revelation brings them closer to vindication — and further into danger.",
    releasedYear: 2015,
    availableLanguages: ["English", "Kannada"],
    ratings: { imdb: 4.2, streamvibe: 4.0 },
    director: { name: "Rishab Shetty", country: "India" },
    music: { name: "A. R. Rahman", country: "India" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },

  // horror
  {
    id: 23231784,
    type: "show",
    genre: "horror",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/horror/genres-17.webp",
    title: "Night Whispers",
    genres: ["Musical", "Romance"],
    tagline:
      "When the night speaks, the dead answer — and some secrets are better left unheard.",
    description:
      "A small town's lullaby becomes a scream as whispers in the dark pull its residents into nightmares.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.1 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 23231895,
    type: "show",
    genre: "horror",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/horror/genres-18.webp",
    title: "Haunt of Hollow Lane",
    genres: ["Musical", "Romance"],
    tagline:
      "Every house has a story. On Hollow Lane, the walls tell you if you listen closely enough.",
    description:
      "A curious family moves in and discovers that some neighborhoods never let you go.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.0 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 23231906,
    type: "show",
    genre: "horror",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/horror/genres-19.webp",
    title: "Nightmare Threshold",
    genres: ["Musical", "Romance"],
    tagline:
      "When dreams begin to bleed into the waking world, the only escape is to confront your darkest fear.",
    description:
      "A group of strangers must face the horrors they've locked away before they tear them apart.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.0 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 23232017,
    type: "show",
    genre: "horror",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/horror/genres-19.webp",
    title: "Shadow Harvest",
    genres: ["Musical", "Romance"],
    tagline:
      "In a village where the harvest moon brings more than crops, the townsfolk must decide what to sacrifice.",
    description:
      "As shadows lengthen, the line between ritual and horror blurs, and the cost of survival becomes clear.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.1 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },

  // fantasy
  {
    id: 23321849,
    type: "show",
    genre: "fantasy",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/fantasy/20.webp",
    title: "Starfall Keep",
    genres: ["Musical", "Romance"],
    tagline:
      "When falling stars become weapons, a guardian must choose between duty and desire.",
    description:
      "In a kingdom where the skies are as dangerous as the ground, love is the only magic that truly matters.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.1 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 278633218,
    type: "show",
    genre: "fantasy",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/fantasy/22.webp",
    title: "Moonlit Saga",
    genres: ["Musical", "Romance"],
    tagline:
      "Under a moon that never sets, a renegade bard composes a song that could topple empires.",
    description:
      "Rhythm and rebellion intertwine as melody becomes the spark for a revolution.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.1 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 233217997,
    type: "show",
    genre: "fantasy",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/fantasy/23.webp",
    title: "Crystal Vale",
    genres: ["Musical", "Romance"],
    tagline:
      "A hidden valley holds a crystal that can rewrite reality — if one dare to touch it.",
    description:
      "For some, the price of a wish is more than they can afford. For others, it's everything.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.1 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
  {
    id: 233296781,
    type: "show",
    genre: "fantasy",
    top10: true,
    poster: "/images/data/posters/4.webp",
    cover: "/images/data/movies/fantasy/24.webp",
    title: "Whisperwind Grove",
    genres: ["Musical", "Romance"],
    tagline:
      "In a forest where the trees can speak, a lost traveler must learn to listen.",
    description:
      "Magic is not loud; it is the quiet promise that keeps the world turning.",
    releasedYear: 2017,
    availableLanguages: ["English", "French"],
    ratings: { imdb: 3.8, streamvibe: 4.1 },
    director: { name: "Pedro Almodóvar", country: "Spain" },
    music: { name: "Ennio Morricone", country: "Italy" },
    cast: cast,
    reviews: reviews,
    seasons: seasons,
  },
];
