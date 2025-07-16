// import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/25 to-cyan-400/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 font-medium">Available for opportunities</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              More Riya
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-white/80 mb-4 font-light">
            Full-Stack Developer
          </div>

          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building responsive, scalable web applications with a focus on performance and usability.
            <span className="text-gradient bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-semibold">
              {" "}Let’s turn great ideas into impactful products.
            </span>
          </p>


          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Code className="w-4 h-4 text-blue-300" />
              <span className="text-white/90 text-sm font-medium">Full-Stack</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span className="text-white/90 text-sm font-medium">Fast Learner</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span className="text-white/90 text-sm font-medium">Problem Solver</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/riyamore1192"
              className="group p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 hover:scale-110 transform transition-all duration-300"
            >
              <Github className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/riyamore-developer/"
              className="group p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 hover:scale-110 transform transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors" />
            </a>
            <a
              href="mailto:riyamore1192@gmail.com"
              className="group p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 hover:scale-110 transform transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={scrollToAbout}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>View My Work</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
            <a
              href="/Riya_Fullstack_Resume.pdf"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-semibold hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;