import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, Medal, Award, Star, Target, Zap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "International Mathematics Olympiad",
    year: "2023",
    description: "Gold Medal - First Place in Central Asia Regional Competition",
    color: "text-gold",
  },
  {
    icon: Medal,
    title: "Science Innovation Award",
    year: "2023",
    description: "National Recognition for Outstanding Research Project",
    color: "text-primary",
  },
  {
    icon: Award,
    title: "Best School of the Year",
    year: "2022",
    description: "Ministry of Education Excellence Award",
    color: "text-gold",
  },
  {
    icon: Star,
    title: "International Debate Championship",
    year: "2023",
    description: "Champions of Regional Youth Debate Tournament",
    color: "text-primary",
  },
  {
    icon: Target,
    title: "100% University Acceptance",
    year: "2023",
    description: "All graduates accepted to top-tier universities worldwide",
    color: "text-gold",
  },
  {
    icon: Zap,
    title: "Innovation in Education",
    year: "2022",
    description: "UNESCO Recognition for Digital Learning Excellence",
    color: "text-primary",
  },
];

const statistics = [
  { number: "150+", label: "Awards Won", description: "In national and international competitions" },
  { number: "95%", label: "Success Rate", description: "Students achieving top grades" },
  { number: "50+", label: "Competitions", description: "Participated annually" },
  { number: "25", label: "Countries", description: "Where our alumni study" },
];

const Achievements = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-royal-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-6">
                Our Achievements
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Celebrating excellence and success in education
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl font-display font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-display font-bold text-center text-foreground mb-16">
              Proud Moments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image placeholder with gradient */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary via-royal-blue to-gold relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <achievement.icon className="h-24 w-24 text-white/30 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute top-4 right-4 bg-gold text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {achievement.year}
                    </div>
                  </div>
                  
                  {/* Content overlay */}
                  <div className="bg-card p-6">
                    <h3 className="text-xl font-display font-bold text-card-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-2xl p-12 text-center">
              <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-gold" />
              </div>
              <h2 className="text-3xl font-display font-bold text-card-foreground mb-4">
                Student Success Stories
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our graduates shine at the world's best universities, making us incredibly proud.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-primary/10 px-6 py-3 rounded-full">
                  <span className="text-primary font-semibold">Harvard University</span>
                </div>
                <div className="bg-primary/10 px-6 py-3 rounded-full">
                  <span className="text-primary font-semibold">MIT</span>
                </div>
                <div className="bg-primary/10 px-6 py-3 rounded-full">
                  <span className="text-primary font-semibold">Oxford</span>
                </div>
                <div className="bg-primary/10 px-6 py-3 rounded-full">
                  <span className="text-primary font-semibold">Cambridge</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;
