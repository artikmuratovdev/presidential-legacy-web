import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Calendar, Newspaper, Heart } from "lucide-react";

const clubs = [
  { name: "Science Club", members: "45+ members", description: "Exploring the wonders of science through experiments" },
  { name: "Debate Society", members: "30+ members", description: "Developing critical thinking and public speaking" },
  { name: "Robotics Team", members: "25+ members", description: "Building and programming robots for competitions" },
  { name: "Art Club", members: "40+ members", description: "Expressing creativity through various art forms" },
  { name: "Music Ensemble", members: "35+ members", description: "Performing classical and contemporary music" },
  { name: "Sports Teams", members: "100+ members", description: "Competing in basketball, football, and volleyball" },
];

const events = [
  { title: "Annual Science Fair", date: "March 2024", description: "Students showcase innovative research projects" },
  { title: "Cultural Festival", date: "April 2024", description: "Celebrating diversity through music, dance, and food" },
  { title: "Sports Day", date: "May 2024", description: "Inter-house athletic competitions and team building" },
  { title: "International Day", date: "June 2024", description: "Exploring cultures from around the world" },
];

const testimonials = [
  {
    name: "Dilshod Rahimov",
    class: "Class of 2023",
    quote: "This school gave me the confidence and skills to pursue my dreams at MIT. The teachers truly care about every student's success.",
  },
  {
    name: "Madina Sultanova",
    class: "Class of 2023",
    quote: "The opportunities for leadership and personal growth here are incredible. I've made lifelong friends and discovered my passion for science.",
  },
  {
    name: "Sardor Alimov",
    class: "Class of 2022",
    quote: "Being part of the robotics team taught me teamwork and innovation. Now I'm studying engineering at Cambridge University.",
  },
];

const StudentLife = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-royal-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-6">
                Student Life
              </h1>
              <p className="text-xl text-primary-foreground/90">
                A vibrant community where students thrive and grow
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                Happy Students, Bright Futures
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A vibrant community where friendships bloom and passions are discovered.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-display font-bold text-foreground">Clubs & Activities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {clubs.map((club, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-display font-bold text-card-foreground mb-2">
                    {club.name}
                  </h3>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {club.members}
                  </div>
                  <p className="text-muted-foreground">{club.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Calendar className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-display font-bold text-foreground">Upcoming Events</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all p-8 border-l-4 border-primary animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {event.date}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-card-foreground mb-3">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Heart className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-display font-bold text-foreground">Student Voices</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl shadow-lg p-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl text-primary mb-4">"</div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-display font-bold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.class}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-12">
                <Newspaper className="h-8 w-8 text-primary" />
                <h2 className="text-4xl font-display font-bold text-foreground">Campus Gallery</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { emoji: "🎨", label: "Art & Creativity" },
                  { emoji: "⚽", label: "Sports Day" },
                  { emoji: "🎭", label: "Drama Club" },
                  { emoji: "🔬", label: "Science Fair" },
                  { emoji: "🎵", label: "Music Concert" },
                  { emoji: "🌍", label: "Field Trips" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-primary/10 to-royal-blue/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all animate-fade-in flex flex-col items-center justify-center p-6 group cursor-pointer"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <span className="text-6xl mb-3 group-hover:scale-110 transition-transform">{item.emoji}</span>
                    <p className="text-sm font-medium text-foreground text-center">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StudentLife;
