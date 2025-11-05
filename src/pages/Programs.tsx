import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Beaker, Globe, Code, Music, Palette } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Advanced Academic Program",
    description: "Rigorous curriculum covering mathematics, sciences, humanities, and languages with advanced placement courses.",
    features: ["Advanced Placement Courses", "University-level Curriculum", "Research Opportunities", "Individual Mentorship"],
  },
  {
    icon: Beaker,
    title: "STEM Excellence",
    description: "Specialized program in Science, Technology, Engineering, and Mathematics with hands-on laboratory work.",
    features: ["State-of-the-art Labs", "Research Projects", "Innovation Challenges", "Industry Partnerships"],
  },
  {
    icon: Globe,
    title: "International Baccalaureate",
    description: "Globally recognized IB Diploma Programme preparing students for universities worldwide.",
    features: ["IB Curriculum", "International Recognition", "Critical Thinking", "Global Perspective"],
  },
  {
    icon: Code,
    title: "Computer Science & AI",
    description: "Comprehensive programming and artificial intelligence curriculum with practical projects.",
    features: ["Programming Languages", "AI & Machine Learning", "Web Development", "Cybersecurity"],
  },
  {
    icon: Music,
    title: "Arts & Music",
    description: "Comprehensive arts education including visual arts, music, drama, and creative expression.",
    features: ["Music Theory & Practice", "Visual Arts", "Drama & Theater", "Creative Workshops"],
  },
  {
    icon: Palette,
    title: "Leadership & Innovation",
    description: "Developing future leaders through entrepreneurship, public speaking, and project management.",
    features: ["Entrepreneurship", "Public Speaking", "Project Management", "Social Innovation"],
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-royal-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-6">
                Educational Programs
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Comprehensive programs designed for academic excellence
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                Learning Paths for Every Passion
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover programs that inspire curiosity and unlock your child's full potential.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-primary/20 to-royal-blue/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <program.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-card-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {program.description.split('.')[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-foreground mb-12">
                What Your Child Will Gain
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { emoji: "🎯", label: "Excellence" },
                  { emoji: "🌍", label: "Global Skills" },
                  { emoji: "❤️", label: "Character" },
                  { emoji: "💡", label: "Creativity" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-card p-6 rounded-2xl shadow-lg">
                    <div className="text-5xl mb-3">{item.emoji}</div>
                    <p className="font-semibold text-card-foreground">{item.label}</p>
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

export default Programs;
