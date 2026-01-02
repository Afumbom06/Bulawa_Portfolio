import { motion } from 'motion/react';
import { Download, CheckCircle2, Code2, Palette, Users, Brain } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
// photo removed to keep a clean, modern layout

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
    },
    {
      icon: Palette,
      title: 'Design First',
      description: 'User-centered design approach in every project',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Team player with excellent communication skills',
    },
    {
      icon: Brain,
      title: 'Problem Solver',
      description: 'Analytical thinking and attention to detail',
    },
  ];

  const keyPoints = [
    'BSc Software Engineering - CoT, University of Buea',
    'Specialized in Frontend Development & UI/UX Design',
    '2+ years of hands-on experience',
    'Strong foundation in modern web technologies',
    'Passionate about creating accessible interfaces',
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Premium visual: elegant gradient bg, prominent avatar, sophisticated card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full flex items-center justify-center px-4"
          >
            {/* Background gradient with decorative blurs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl" />
            </div>

            <div className="w-full max-w-md relative">
              {/* Avatar circle with glowing effect */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-lg opacity-40" />
                  <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center text-white text-4xl font-black shadow-2xl">
                    BA
                  </div>
                </div>
              </div>

              {/* Main card with premium styling */}
              <div className="rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-2xl p-8 space-y-6">
                {/* Accent line */}
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto" />

                {/* Name and title */}
                <div className="text-center space-y-2">
                  <h3 className="text-gray-900 dark:text-white text-2xl font-bold">Bulawa Joy Afumbom</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wide">Frontend Developer • UI/UX Designer</p>
                </div>

                {/* Skills with gradient badges */}
                <div className="flex flex-wrap gap-3 justify-center pt-2">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 text-sm font-semibold rounded-full text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-500/20">React</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 text-sm font-semibold rounded-full text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-500/20">TypeScript</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 text-sm font-semibold rounded-full text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-500/20">Figma</span>
                </div>

                {/* Bottom accent */}
                <div className="h-0.5 w-8 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full mx-auto" />
              </div>
            </div>
          </motion.div>

          {/* Content with stats and CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-gray-900 dark:text-white mb-4 text-xl font-semibold">
              Crafting Digital Experiences That Matter
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate Frontend Developer and UI/UX Designer with a Bachelor's degree in 
              Software Engineering from the College of Technology, University of Buea. My journey 
              in tech is driven by a love for creating beautiful, functional digital experiences 
              that truly serve users.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My approach combines technical excellence with design thinking. I believe in the 
              power of clean code, intuitive interfaces, and seamless user experiences. From 
              wireframing and prototyping in Figma to bringing designs to life with React and 
              modern web technologies, I handle the complete development lifecycle.
            </p>

            {/* stats removed for a cleaner, focused layout */}

            <div className="space-y-3 mb-6">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 gap-2"
                onClick={() => {
                  alert('CV download would start here');
                }}
              >
                <Download className="h-4 w-4" />
                Download My CV
              </Button>

              <Button size="lg" className="bg-transparent border border-slate-200 dark:border-slate-700 text-gray-700 dark:text-gray-200">
                Work With Me
              </Button>
            </div>
          </motion.div>

        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950 rounded-lg flex items-center justify-center mb-4 border border-blue-100 dark:border-blue-900">
                  <highlight.icon className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                </div>
                <h4 className="text-gray-900 dark:text-white mb-2">{highlight.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}