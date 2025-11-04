import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Mail, Award } from "lucide-react";

const teachers = [
  {
    name: "Dr. Aziza Karimova",
    subject: "Mathematics",
    bio: "PhD in Applied Mathematics, 15 years of teaching experience",
    email: "a.karimova@school.uz",
    awards: "International Mathematics Olympiad Coach",
  },
  {
    name: "Prof. Jamshid Abdullayev",
    subject: "Physics",
    bio: "Professor of Theoretical Physics, Former Research Scientist",
    email: "j.abdullayev@school.uz",
    awards: "Excellence in Science Education Award",
  },
  {
    name: "Dr. Nilufar Rashidova",
    subject: "English Literature",
    bio: "Master's in English Literature, Cambridge Certified",
    email: "n.rashidova@school.uz",
    awards: "Best Language Teacher 2022",
  },
  {
    name: "Mr. Rustam Yusupov",
    subject: "Computer Science",
    bio: "Software Engineer turned Educator, MIT Graduate",
    email: "r.yusupov@school.uz",
    awards: "Innovation in Education Award",
  },
  {
    name: "Dr. Malika Sharipova",
    subject: "Chemistry",
    bio: "PhD in Organic Chemistry, Published Research Author",
    email: "m.sharipova@school.uz",
    awards: "Science Excellence Award",
  },
  {
    name: "Prof. Otabek Murodov",
    subject: "History",
    bio: "Professor of World History, 20 years of experience",
    email: "o.murodov@school.uz",
    awards: "Outstanding Educator Award",
  },
];

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");

  const subjects = ["All", ...new Set(teachers.map((t) => t.subject))];

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch =
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === "All" || teacher.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-royal-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-6">
                Our Expert Faculty
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Meet the dedicated educators shaping future leaders
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or subject..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {subjects.map((subject) => (
                    <Button
                      key={subject}
                      variant={selectedSubject === subject ? "default" : "outline"}
                      onClick={() => setSelectedSubject(subject)}
                      className="whitespace-nowrap"
                    >
                      {subject}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTeachers.map((teacher, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-primary to-royal-blue h-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6 -mt-12">
                    <div className="bg-card w-24 h-24 rounded-full border-4 border-card shadow-lg flex items-center justify-center mb-4">
                      <span className="text-3xl font-display font-bold text-primary">
                        {teacher.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-card-foreground mb-1">
                      {teacher.name}
                    </h3>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {teacher.subject}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{teacher.bio}</p>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
                      <Award className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                      <span>{teacher.awards}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <a href={`mailto:${teacher.email}`} className="hover:text-primary transition-colors">
                        {teacher.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Teachers;
