"use client"

import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Brush,
  Code,
  Cpu,
  GitBranch,
  LineChart,
  LayoutDashboard,
  MessageSquare,
  Flame,
  Users,
  Zap,
} from "lucide-react"

export default function SkillsPage() {
  const productSkills = [
    { name: "Product Strategy", icon: <LayoutDashboard className="h-5 w-5 text-blue-500" />, level: 90 },
    { name: "Roadmap Planning", icon: <GitBranch className="h-5 w-5 text-blue-500" />, level: 95 },
    { name: "User Research", icon: <Users className="h-5 w-5 text-blue-500" />, level: 85 },
    { name: "A/B Testing", icon: <BarChart className="h-5 w-5 text-blue-500" />, level: 80 },
    { name: "Product Analytics", icon: <LineChart className="h-5 w-5 text-blue-500" />, level: 85 },
  ]

  const technicalSkills = [
    { name: "Agile Methodologies", icon: <Zap className="h-5 w-5 text-green-500" />, level: 90 },
    { name: "SQL", icon: <Code className="h-5 w-5 text-green-500" />, level: 75 },
    { name: "JavaScript (Learning)", icon: <Cpu className="h-5 w-5 text-green-500" />, level: 60 },
    { name: "Node.js (Learning)", icon: <Cpu className="h-5 w-5 text-green-500" />, level: 50 },
    { name: "API Design", icon: <Brush className="h-5 w-5 text-green-500" />, level: 80 },
  ]

  const businessSkills = [
    { name: "Growth Hacking", icon: <Flame className="h-5 w-5 text-purple-500" />, level: 85 },
    { name: "Business Development", icon: <LineChart className="h-5 w-5 text-purple-500" />, level: 90 },
    { name: "Market Analysis", icon: <BarChart className="h-5 w-5 text-purple-500" />, level: 80 },
    { name: "Stakeholder Management", icon: <Users className="h-5 w-5 text-purple-500" />, level: 95 },
    { name: "Cross-functional Leadership", icon: <MessageSquare className="h-5 w-5 text-purple-500" />, level: 90 },
  ]

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={stagger(0.1)} className="mb-16 text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">
            My Skills
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A comprehensive overview of my professional capabilities
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-100 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <LayoutDashboard className="h-6 w-6 mr-2 text-blue-500" />
                  Product Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {productSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {skill.icon}
                          <span className="ml-2 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border-green-100 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Code className="h-6 w-6 mr-2 text-green-500" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {technicalSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {skill.icon}
                          <span className="ml-2 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-teal-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 border-purple-100 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <LineChart className="h-6 w-6 mr-2 text-purple-500" />
                  Business Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {businessSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {skill.icon}
                          <span className="ml-2 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Tools & Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Tools & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md text-center">
              <div className="bg-slate-100 dark:bg-slate-700 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Brush className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="font-semibold">Figma, FigJam</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Wireframing</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md text-center">
              <div className="bg-slate-100 dark:bg-slate-700 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <GitBranch className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Code Collaboration</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md text-center">
              <div className="bg-slate-100 dark:bg-slate-700 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="font-semibold">Jira</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Agile Management</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md text-center">
              <div className="bg-slate-100 dark:bg-slate-700 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="font-semibold">PowerBI</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Data Analysis</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md text-center">
              <div className="bg-slate-100 dark:bg-slate-700 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="font-semibold">Slack</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Communication</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md text-center">
              <div className="bg-slate-100 dark:bg-slate-700 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="font-semibold">MongoDB</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Database</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md text-center">
              <div className="bg-slate-100 dark:bg-slate-700 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="font-semibold">Confluence</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Documentation</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md text-center">
              <div className="bg-slate-100 dark:bg-slate-700 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <LayoutDashboard className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="font-semibold">Notion</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Task Management</p>
            </div>
          </div>
        </motion.section>

        {/* Soft Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Soft Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-4 rounded-xl text-center">
              <h3 className="font-semibold">Time Management</h3>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 p-4 rounded-xl text-center">
              <h3 className="font-semibold">Active Listening</h3>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 p-4 rounded-xl text-center">
              <h3 className="font-semibold">Organization</h3>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-4 rounded-xl text-center">
              <h3 className="font-semibold">Communication</h3>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20 p-4 rounded-xl text-center">
              <h3 className="font-semibold">Critical Thinking</h3>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 p-4 rounded-xl text-center">
              <h3 className="font-semibold">Problem Solving</h3>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 p-4 rounded-xl text-center">
              <h3 className="font-semibold">Emotional Intelligence</h3>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 p-4 rounded-xl text-center">
              <h3 className="font-semibold">Teamwork</h3>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  )
}

