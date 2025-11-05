import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  {
    title: "Shaping Bright Minds",
    description: "Where every child's potential is celebrated",
    image: hero1,
  },
  {
    title: "Future Leaders Start Here",
    description: "Inspiring excellence in a nurturing environment",
    image: hero2,
  },
  {
    title: "Innovation and Discovery",
    description: "Where tradition meets innovation in learning",
    image: hero3,
  },
  {
    title: "Where Excellence Begins",
    description: "Building character, knowledge, and lifelong friendships",
    image: hero4,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[700px] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 z-10 animate-pulse">
        <Sparkles className="h-8 w-8 text-gold opacity-60" />
      </div>
      <div className="absolute bottom-20 left-10 z-10 animate-pulse" style={{ animationDelay: '1s' }}>
        <Sparkles className="h-6 w-6 text-gold opacity-50" />
      </div>
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
          
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" 
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
            />
          </div>
          
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-3xl animate-fade-in">
              {/* Decorative line above title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-20 bg-gold rounded"></div>
                <Sparkles className="h-5 w-5 text-gold" />
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-md">
                {slide.description}
              </p>
              
              {/* Decorative line below */}
              <div className="h-1 w-32 bg-gold/70 rounded"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 z-20 rounded-full w-14 h-14"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 z-20 rounded-full w-14 h-14"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all backdrop-blur-sm ${
              index === currentSlide 
                ? "bg-gold w-12 shadow-lg shadow-gold/50" 
                : "bg-white/60 w-3 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
