import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Movies from "./components/Movies";
import DetailModal from "./components/DetailModal";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.css";

// Dummy data - no backend needed
const DUMMY_CONTENT = [
  {
    id: 1,
    title: "Squid Game",
    type: "series",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    backdropImage:
      "https://image.tmdb.org/t/p/original/oaGvjB0DvdhXhOAuADfHb261ZHa.jpg",
    genre: ["Thriller", "Drama"],
    year: 2021,
    maturityRating: "18+",
    matchScore: 98,
    synopsis:
      "Ratusan pemain yang sedang dalam kesulitan keuangan menerima undangan misterius untuk bertanding dalam permainan anak-anak.",
    episodes: 9,
  },
  {
    id: 2,
    title: "Money Heist",
    type: "series",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    backdropImage:
      "https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg",
    genre: ["Action", "Drama"],
    year: 2017,
    maturityRating: "16+",
    matchScore: 95,
    synopsis:
      "Sekelompok perampok yang dipimpin oleh Professor merencanakan pencurian terbesar dalam sejarah Spanyol.",
    episodes: 41,
  },
  {
    id: 3,
    title: "Stranger Things",
    type: "series",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    backdropImage:
      "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    genre: ["Sci-Fi", "Horror"],
    year: 2016,
    maturityRating: "16+",
    matchScore: 96,
    synopsis:
      "Ketika seorang anak laki-laki menghilang, sebuah kota kecil mengungkap misteri tentang eksperimen rahasia dan kekuatan supernatural.",
    episodes: 34,
  },
  {
    id: 4,
    title: "Wednesday",
    type: "series",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    backdropImage:
      "https://media.themoviedb.org/t/p/w1000_and_h563_face/AeJgnEXaFcsGzU5Y4Nrq9WggAQ5.jpg",
    genre: ["Comedy", "Mystery"],
    year: 2022,
    maturityRating: "13+",
    matchScore: 93,
    synopsis:
      "Wednesday Addams menyelidiki rangkaian pembunuhan yang meneror kota saat ia menjalani kehidupan barunya di Nevermore Academy.",
    episodes: 8,
  },
  {
    id: 5,
    title: "The Witcher",
    type: "series",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    backdropImage:
      "https://media.themoviedb.org/t/p/w1000_and_h563_face/foGkPxpw9h8zln81j63mix5B7m8.jpg",
    genre: ["Fantasy", "Action"],
    year: 2019,
    maturityRating: "18+",
    matchScore: 91,
    synopsis:
      "Geralt of Rivia, seorang pemburu monster bermutasi, berjuang menemukan tempatnya di dunia di mana manusia sering lebih jahat dari monster.",
    episodes: 24,
  },
  {
    id: 6,
    title: "Breaking Bad",
    type: "series",
    thumbnail: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    backdropImage:
      "https://media.themoviedb.org/t/p/w1000_and_h563_face/gc8PfyTqzqltKPW3X0cIVUGmagz.jpg",
    genre: ["Drama", "Crime"],
    year: 2008,
    maturityRating: "18+",
    matchScore: 99,
    synopsis:
      "Seorang guru kimia SMA yang didiagnosis menderita kanker paru-paru beralih ke pembuatan dan penjualan metamfetamin.",
    episodes: 62,
  },
  {
    id: 7,
    title: "Dark",
    type: "series",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    backdropImage:
      "https://media.themoviedb.org/t/p/w1000_and_h563_face/75HgaphatW0PDI3XIHQWZUpbhn6.jpg",
    genre: ["Sci-Fi", "Thriller"],
    year: 2017,
    maturityRating: "16+",
    matchScore: 97,
    synopsis:
      "Hilangnya seorang anak memulai pencarian yang mengungkap rahasia empat keluarga yang saling terkait.",
    episodes: 26,
  },
  {
    id: 8,
    title: "Peaky Blinders",
    type: "series",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    backdropImage:
      "https://image.tmdb.org/t/p/original/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg",
    genre: ["Drama", "Crime"],
    year: 2013,
    maturityRating: "18+",
    matchScore: 94,
    synopsis:
      "Keluarga gangster yang berbasis di Birmingham, Inggris, pada tahun 1920-an, dipimpin oleh Tommy Shelby yang ambisius.",
    episodes: 36,
  },
];

const PLANS = [
  { 
    id: 'basic', 
    name: 'Basic', 
    price: 100000, 
    quality: '720p',
    resolution: 'Good',
    devices: 'TV, Computer, Phone, Tablet',
    downloads: 1
  },
  { 
    id: 'standard', 
    name: 'Standard', 
    price: 120000, 
    quality: '1080p',
    resolution: 'Great',
    devices: 'TV, Computer, Phone, Tablet',
    downloads: 2
  },
  { 
    id: 'premium', 
    name: 'Premium', 
    price: 186000, 
    quality: '4K + HDR',
    resolution: 'Best',
    devices: 'TV, Computer, Phone, Tablet',
    downloads: 6
  },
];

const FAQS = [
  {
    question: "What is diStreaming?",
    answer: "diStreaming is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price."
  },
  {
    question: "How much does diStreaming cost?",
    answer: "Watch diStreaming on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR 54,000 to IDR 186,000 a month. No extra costs, no contracts."
  },
  {
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime. Sign in with your diStreaming account to watch instantly on the web at distreaming.com from your personal computer or on any internet-connected device that offers the diStreaming app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
  },
  {
    question: "How do I cancel?",
    answer: "diStreaming is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    question: "What can I watch on diStreaming?",
    answer: "diStreaming has an extensive library of feature films, documentaries, TV shows, anime, award-winning diStreaming originals, and more. Watch as much as you want, anytime you want."
  },
  {
    question: "Is diStreaming good for kids?",
    answer: "The diStreaming Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
  },
];

function App() {
  // ========== STATE ==========
  const [allContent, setAllContent] = useState([]);
  const [myList, setMyList] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // ========== LOAD DATA ==========
  useEffect(() => {
    setAllContent(DUMMY_CONTENT);
  }, []);

  // ========== HANDLERS ==========
  const handleContentClick = (content) => {
    setSelectedContent(content);
    setIsDetailModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDetailModalOpen(false);
    setSelectedContent(null);
  };

  const handleToggleMyList = (contentId) => {
    if (myList.includes(contentId)) {
      setMyList(myList.filter((id) => id !== contentId));
    } else {
      setMyList([...myList, contentId]);
    }
  };

  // ========== GROUP CONTENT BY GENRE ==========
  const popularContent = [...allContent].sort((a, b) => b.matchScore - a.matchScore);
  
  const contentByCategory = {
    "Action & Adventure": allContent.filter((c) => c.genre.includes("Action")),
    "Sci-Fi & Fantasy": allContent.filter(
      (c) => c.genre.includes("Sci-Fi") || c.genre.includes("Fantasy")
    ),
    Drama: allContent.filter((c) => c.genre.includes("Drama")),
  };

  return (
    <div className="app">
      <Navbar />

      <HeroSection 
        onGetStarted={(email) => console.log('Get started with:', email)} 
      />

      <div className="content-rows" style={{ marginTop: '60px', paddingBottom: '60px' }}>
        <Movies
          title="Popular on diStreaming"
          items={popularContent}
          onItemClick={handleContentClick}
          isFeatured={true}
        />

        {myList.length > 0 && (
          <Movies
            title="My List"
            items={allContent.filter((c) => myList.includes(c.id))}
            onItemClick={handleContentClick}
          />
        )}

        {Object.entries(contentByCategory).map(
          ([category, items]) =>
            items.length > 0 && (
              <Movies
                key={category}
                title={category}
                items={items}
                onItemClick={handleContentClick}
              />
            )
        )}
      </div>

      <Pricing plans={PLANS} />
      <FAQ faqs={FAQS} />
      <Footer />

      {isDetailModalOpen && selectedContent && (
        <DetailModal
          content={selectedContent}
          isInMyList={myList.includes(selectedContent.id)}
          onClose={handleCloseModal}
          onToggleMyList={() => handleToggleMyList(selectedContent.id)}
        />
      )}
    </div>
  );
}

export default App;
