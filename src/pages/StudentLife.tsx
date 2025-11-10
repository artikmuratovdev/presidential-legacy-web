import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Calendar, Newspaper, Heart } from "lucide-react";
import studentLifeHero from "@/assets/student-life-hero.jpg";
import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";
import campus4 from "@/assets/campus-4.jpg";
import campus5 from "@/assets/campus-5.jpg";
import campus6 from "@/assets/campus-6.jpg";

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
        <section className="relative h-[500px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${studentLifeHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-4xl animate-fade-in">
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
                  { image: campus1, label: "Outdoor Study" },
                  { image: campus2, label: "Library" },
                  { image: campus3, label: "Science Lab" },
                  { image: campus4, label: "Arts & Music" },
                  { image: campus5, label: "Sports" },
                  { image: campus6, label: "Cafeteria" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-2xl shadow-lg hover:shadow-2xl transition-all animate-fade-in overflow-hidden group cursor-pointer relative"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                      <p className="text-white font-semibold text-lg">{item.label}</p>
                    </div>
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
