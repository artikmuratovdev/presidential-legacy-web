import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, Users, Target } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <HeroSlider />

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <AnimatedCounter end={1200} suffix="+" title="Students" />
              <AnimatedCounter end={85} suffix="+" title="Programs" />
              <AnimatedCounter end={150} suffix="+" title="Awards" />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Where Excellence Begins
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Nurturing brilliant minds in a warm, inspiring environment where every child's potential is celebrated.
              </p>
              <Link to="/about">
                <Button size="lg" className="group">
                  Explore Our School
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-display font-bold text-center text-foreground mb-16">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                  Excellence
                </h3>
                <p className="text-muted-foreground">
                  Award-winning academic programs and internationally recognized achievements.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                  Innovation
                </h3>
                <p className="text-muted-foreground">
                  Modern teaching methods and cutting-edge educational technology.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                  Community
                </h3>
                <p className="text-muted-foreground">
                  A diverse and inclusive environment that fosters collaboration.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                  Leadership
                </h3>
                <p className="text-muted-foreground">
                  Developing future leaders with strong character and vision.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
