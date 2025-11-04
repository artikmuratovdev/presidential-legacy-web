import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Award, BookOpen, Calendar, Plus, Edit, Trash2, Home } from "lucide-react";

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { title: "Total Students", value: "850", icon: Users, color: "text-royal-blue" },
    { title: "Total Teachers", value: "65", icon: Users, color: "text-gold" },
    { title: "Programs", value: "12", icon: BookOpen, color: "text-royal-blue" },
    { title: "Achievements", value: "48", icon: Award, color: "text-gold" },
  ];

  const recentActivities = [
    { action: "New teacher added", name: "Dr. Sarah Johnson", time: "2 hours ago" },
    { action: "Achievement updated", name: "International Math Olympiad", time: "5 hours ago" },
    { action: "Program modified", name: "STEM Excellence Program", time: "1 day ago" },
    { action: "Student enrolled", name: "152 new students", time: "2 days ago" },
  ];

  const teachers = [
    { id: 1, name: "Dr. Sarah Johnson", subject: "Mathematics", email: "sarah.j@school.uz" },
    { id: 2, name: "Prof. Michael Chen", subject: "Physics", email: "michael.c@school.uz" },
    { id: 3, name: "Dr. Emma Williams", subject: "Literature", email: "emma.w@school.uz" },
  ];

  const achievements = [
    { id: 1, title: "International Math Olympiad", year: "2024", level: "Gold" },
    { id: 2, title: "Science Fair Winner", year: "2024", level: "National" },
    { id: 3, title: "Debate Championship", year: "2023", level: "Regional" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-royal-blue text-white py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold mb-2">Admin Dashboard</h1>
              <p className="text-light-blue">Presidential School of Uzbekistan</p>
            </div>
            <Link to="/">
              <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Home className="mr-2 h-4 w-4" />
                Back to Site
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-royal-blue" />
                Recent Activity
              </CardTitle>
              <CardDescription>Latest updates and changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-gold mt-2"></div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.name}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Add Teacher
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Add Achievement
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Add Program
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Event
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Management Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Content Management</CardTitle>
            <CardDescription>Manage teachers, achievements, and programs</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="teachers" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="teachers">Teachers</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="programs">Programs</TabsTrigger>
              </TabsList>

              <TabsContent value="teachers" className="space-y-4">
                <div className="flex items-center justify-between">
                  <Input
                    placeholder="Search teachers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                  />
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Teacher
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teachers.map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell className="font-medium">{teacher.name}</TableCell>
                        <TableCell>{teacher.subject}</TableCell>
                        <TableCell>{teacher.email}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-4">
                <div className="flex items-center justify-between">
                  <Input
                    placeholder="Search achievements..."
                    className="max-w-sm"
                  />
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Achievement
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Year</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {achievements.map((achievement) => (
                      <TableRow key={achievement.id}>
                        <TableCell className="font-medium">{achievement.title}</TableCell>
                        <TableCell>{achievement.year}</TableCell>
                        <TableCell>{achievement.level}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="programs" className="space-y-4">
                <div className="flex items-center justify-between">
                  <Input
                    placeholder="Search programs..."
                    className="max-w-sm"
                  />
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Program
                  </Button>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  Program management interface coming soon
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
