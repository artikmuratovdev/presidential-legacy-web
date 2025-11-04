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
                Our Curriculum
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our educational programs are designed to provide students with a well-rounded education 
                that combines academic rigor with practical skills. We offer specialized tracks that allow 
                students to pursue their passions while maintaining excellence across all subjects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all p-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <program.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-card-foreground mb-4">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-2xl p-12">
              <h2 className="text-3xl font-display font-bold text-center text-card-foreground mb-8">
                Program Goals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-card-foreground">Academic Excellence</h3>
                  <p className="text-muted-foreground">
                    Maintain high academic standards while fostering critical thinking and problem-solving skills.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-card-foreground">Global Competence</h3>
                  <p className="text-muted-foreground">
                    Prepare students for success in an increasingly interconnected and diverse world.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-card-foreground">Character Development</h3>
                  <p className="text-muted-foreground">
                    Cultivate integrity, responsibility, and ethical leadership in all students.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-card-foreground">Innovation & Creativity</h3>
                  <p className="text-muted-foreground">
                    Encourage innovative thinking and creative problem-solving across all disciplines.
                  </p>
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

export default Programs;
