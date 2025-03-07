import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Moon, 
  Sun, 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  BookOpen, 
  Briefcase, 
  User2, 
  Home, 
  Send,
  Database,
  GitBranch,
  Code,
  Bug
} from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section */}
      <Section id="home" className="h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
            alt="Background"
            className="w-full h-full object-cover opacity-50 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex items-center"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold mb-6 text-white"
              >
                Hello<br />
                I'm Asthik
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl"
              >
                A technology enthusiast passionate about crafting innovative solutions. 
                I thrive on exploring emerging technologies and turning complex problems into elegant solutions.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
              >
                <a 
                  href="#contact"
                  className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Get in Touch
                </a>
                <a 
                  href="https://github.com/asthikshetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors inline-flex items-center gap-2 backdrop-blur-sm"
                >
                  <Github className="w-4 h-4" />
                  View Projects
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section id="about" className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
        <div className="container mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6 leading-relaxed">
              I am a technology enthusiast with a deep passion for innovation and problem-solving. Currently pursuing my education 
              at Government Engineering College Karwar under Visvesvaraya Technological University, I'm constantly exploring 
              new technologies and methodologies to create impactful solutions.
            </p>
            <p className="text-lg leading-relaxed">
              My journey in technology has led me to develop expertise in various domains including Java development, cloud computing,
              and modern web technologies. I believe in the power of technology to transform ideas into reality and am always eager
              to take on new challenges that push the boundaries of what's possible.
            </p>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className={darkMode ? 'text-gray-100' : 'text-gray-900'}>
        <div className="container mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl p-8`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Software Development Intern</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Friends Union For Energising Lives (FUEL) Hubli</p>
                </div>
              </div>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  <span>Developed and maintained Java-based web applications using Spring Boot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  <span>Implemented database solutions using MySQL and optimized queries for better performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  <span>Created responsive front-end interfaces using modern HTML, CSS, and JavaScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  <span>Collaborated with team members using Git for version control and project management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
        <div className="container mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Core Java', icon: Code2 },
              { name: 'Python', icon: Code2 },
              { name: 'PHP', icon: Code2 },
              { name: 'MySQL', icon: Database },
              { name: 'Git', icon: GitBranch },
              { name: 'GitHub', icon: Github },
              { name: 'HTML/CSS', icon: Code },
              { name: 'Debugging', icon: Bug },
            ].map((skill) => (
              <div key={skill.name} className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'} rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg`}>
                <skill.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                <p className="font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className={darkMode ? 'text-gray-100' : 'text-gray-900'}>
        <div className="container mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-blue-500 outline-none`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-blue-500 outline-none`}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-blue-500 outline-none`}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
            <div className="mt-12 text-center">
              <p className="mb-4 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                asthikshetty0@gmail.com
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/asthikshetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/asthik-shetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;