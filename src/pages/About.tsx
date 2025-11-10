import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Award } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const milestones = [
  { year: "2010", title: "Foundation", description: "Presidential School of Uzbekistan was established" },
  { year: "2012", title: "First Graduates", description: "Our first class of exceptional students graduated" },
  { year: "2015", title: "International Recognition", description: "Received accreditation from international education bodies" },
  { year: "2018", title: "Innovation Center", description: "Launched state-of-the-art innovation and research center" },
  { year: "2020", title: "Digital Transformation", description: "Implemented comprehensive digital learning platform" },
  { year: "2023", title: "Excellence Awards", description: "Recognized as leading educational institution in Central Asia" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="relative h-[500px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-4xl animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-6">
                About Our School
              </h1>
              <p className="text-xl text-primary-foreground/90">
                A legacy of excellence in education since 2010
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Since 2010, we've been creating a nurturing environment where young minds flourish, 
                combining academic excellence with warmth, care, and inspiration.
              </p>
            </div>
            
            {/* Visual Timeline/Collage */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
              {[
                { emoji: "🏫", label: "Modern Campus" },
                { emoji: "👨‍🏫", label: "Expert Teachers" },
                { emoji: "🎓", label: "Global Success" },
                { emoji: "🌟", label: "Excellence" },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="aspect-square bg-gradient-to-br from-primary/10 to-royal-blue/10 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center p-6 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <span className="text-5xl mb-3">{item.emoji}</span>
                  <p className="text-sm font-medium text-foreground text-center">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-card p-8 rounded-xl shadow-lg text-center animate-fade-in">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empowering students to become confident leaders and compassionate global citizens.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-lg text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A premier institution where every child reaches their full potential in a caring community.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-lg text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Excellence, integrity, kindness, and respect in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-display font-bold text-center text-foreground mb-16">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative mb-12 ${
                      index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                    } animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background" />
                      <div className="text-3xl font-display font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
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

export default About;
