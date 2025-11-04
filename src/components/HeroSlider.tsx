import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Excellence in Education",
    description: "Nurturing brilliant minds for a brighter tomorrow",
  },
  {
    title: "Innovation and Leadership",
    description: "Empowering students to become future leaders",
  },
  {
    title: "Shaping Future Scholars",
    description: "Where tradition meets innovation in learning",
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
    <div className="relative h-[600px] overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-royal-blue">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-transparent" />
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/30 text-primary-foreground backdrop-blur-sm"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/30 text-primary-foreground backdrop-blur-sm"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary-foreground w-8" : "bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
