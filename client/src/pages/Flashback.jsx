import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Heart,
  Camera,
  Users,
  BookOpen,
  Coffee,
  MapPin,
  Clock,
  Star,
  Sparkles,
  ArrowRight,
  Quote,
  Building2,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";

// College memories data - these can be replaced with actual images
const collegeMemories = [
  
  {
    id: 2,
    image: ".././public/back3.jfif",
    title: "Graduation Day",
    description: "The culmination of years of hard work",
  },
  {
    id: 4,
    image: ".././public/back4.jfif",
    title: "Group Projects",
    description: "Friends who became family",
  },
  {
    id: 5,
    image: ".././public/back6.jfif",
    title: "Campus Events",
    description: "Memories that last forever",
  },
  {
    id: 6,
    image: ".././public/back7.jfif",
    title: "College Friends",
    description: "Bonds that never break",
  },
];

// Nostalgic quotes
const nostalgicQuotes = [
  {
    quote:
      "College days are the best days of our life. We don't realize it when we are in it, but we definitely miss it when it's over.",
    author: "Every Alumnus Ever",
  },
  {
    quote:
      "The friends we make in college are friends we'll have for life, even if we don't talk for years, we pick right back up.",
    author: "Unknown",
  },
  {
    quote:
      "Education is not the filling of a pail, but the lighting of a fire.",
    author: "W.B. Yeats",
  },
];

// College highlights
const collegeHighlights = [
  {
    icon: BookOpen,
    title: "Endless Learning",
    description: "From lectures to practicals, every day was a new discovery",
  },
  {
    icon: Users,
    title: "Lifelong Friends",
    description: "Strangers who became family in just four years",
  },
  {
    icon: Coffee,
    title: "Canteen Tales",
    description: "Where deals were made over chai and samosas",
  },
  {
    icon: Star,
    title: "Campus Events",
    description: "Tech fests, cultural nights, and unforgettable memories",
  },
  {
    icon: Clock,
    title: "Last Benchers",
    description: "The back rows where the best stories were born",
  },
  {
    icon: Heart,
    title: "First Crushes",
    description: "That nervous flutter in the corridors",
  },
];

const Flashback = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % nostalgicQuotes.length);
    }, 5000);
    return () => clearInterval(quoteInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % collegeMemories.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + collegeMemories.length) % collegeMemories.length,
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--background)] via-[var(--background)] to-[var(--primary-blue)]/5 dark:to-[var(--accent-orange)]/5">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-16"
        style={{
          backgroundImage: "url('/back7.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary-blue)]/20 dark:bg-[var(--accent-orange)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--accent-orange)]/10 dark:bg-[var(--primary-blue)]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">
                Welcome back, {user?.name?.split(" ")[0] || "Alumni"}!
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Relive The
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Golden Days{" "}
              </span>
              of CHARUSAT
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
              A journey through memories, friendships, and moments that shaped
              who we are today. Those corridors still echo with our laughter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/feed")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-blue)]/80 dark:from-[var(--accent-orange)] dark:to-[var(--accent-orange)]/80 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-[var(--primary-blue)]/20 dark:hover:shadow-[var(--accent-orange)]/20 transition-all duration-300 transform hover:scale-105"
              >
                Explore Feed
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("/network")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/30 hover:border-white/50 transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                Find Batchmates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Memory Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-blue)]/10 dark:bg-[var(--accent-orange)]/10 rounded-full mb-4">
              <Camera className="w-4 h-4 text-[var(--primary-blue)] dark:text-[var(--accent-orange)]" />
              <span className="text-sm font-medium text-[var(--primary-blue)] dark:text-[var(--accent-orange)]">
                Campus Memories
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Those Were The Days
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Every photograph tells a story. Every corner of the campus holds a
              memory.
            </p>
          </div>

          {/* Featured Slider */}
          <div className="relative mb-12">
            <div className="relative overflow-hidden rounded-3xl aspect-[16/9] md:aspect-[21/9]">
              <div
                className="flex transition-transform duration-500 h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {collegeMemories.map((memory) => (
                  <div
                    key={memory.id}
                    className="w-full h-full flex-shrink-0 relative"
                  >
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                        {memory.title}
                      </h3>
                      <p className="text-white/80 text-lg">
                        {memory.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {collegeMemories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-[var(--primary-blue)] dark:bg-[var(--accent-orange)]"
                      : "bg-[var(--border)] hover:bg-[var(--text-secondary)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Things We Loved */}
      <section className="py-16 bg-[var(--card-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-blue)]/10 dark:bg-[var(--accent-orange)]/10 rounded-full mb-4">
              <Heart className="w-4 h-4 text-[var(--primary-blue)] dark:text-[var(--accent-orange)]" />
              <span className="text-sm font-medium text-[var(--primary-blue)] dark:text-[var(--accent-orange)]">
                What We Loved
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              The Little Things That Made It Special
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              It wasn't just the degree, it was everything that came with it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collegeHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-[var(--background)] border border-[var(--border)] rounded-2xl p-6 hover:shadow-xl hover:shadow-[var(--primary-blue)]/5 dark:hover:shadow-[var(--accent-orange)]/5 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary-blue)]/10 to-[var(--primary-blue)]/5 dark:from-[var(--accent-orange)]/10 dark:to-[var(--accent-orange)]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-7 h-7 text-[var(--primary-blue)] dark:text-[var(--accent-orange)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                  {highlight.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-blue)]/10 dark:bg-[var(--accent-orange)]/10 rounded-full mb-4">
              <Clock className="w-4 h-4 text-[var(--primary-blue)] dark:text-[var(--accent-orange)]" />
              <span className="text-sm font-medium text-[var(--primary-blue)] dark:text-[var(--accent-orange)]">
                Journey
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Our College Journey
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[var(--primary-blue)] via-[var(--accent-orange)] to-[var(--primary-blue)] dark:from-[var(--accent-orange)] dark:via-[var(--primary-blue)] dark:to-[var(--accent-orange)] rounded-full" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: "First Year",
                  icon: Sun,
                  title: "The Beginning",
                  desc: "Fresh faces, new friends, and endless possibilities. Everything felt exciting and scary at the same time.",
                },
                {
                  year: "Second Year",
                  icon: BookOpen,
                  title: "Finding Our Way",
                  desc: "The hustle began. Assignments, projects, and the first real taste of our field.",
                },
                {
                  year: "Third Year",
                  icon: Users,
                  title: "The Golden Year",
                  desc: "Internships, leadership roles, and bonds that grew stronger. We were no longer just students.",
                },
                {
                  year: "Final Year",
                  icon: GraduationCap,
                  title: "The Grand Finale",
                  desc: "Placements, farewells, and promises to stay in touch. The end of an era.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                  >
                    <div
                      className={`bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6 inline-block ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}
                    >
                      <span className="text-sm font-semibold text-[var(--primary-blue)] dark:text-[var(--accent-orange)]">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mt-1">
                        {item.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] mt-2 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--primary-blue)] to-[var(--accent-orange)] dark:from-[var(--accent-orange)] dark:to-[var(--primary-blue)] flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="py-12 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[var(--text-secondary)] italic">
            "No matter where life takes us, CHARUSAT will always be home."
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-2">
            - The CampusRoots Team
          </p>
        </div>
      </section>
    </div>
  );
};

export default Flashback;
