import React from 'react';
import { Code, Coffee, Heart, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate fresher full-stack developer with extensive hands-on experience 
              in modern web technologies. Through personal projects, internships, and continuous 
              learning, I've developed strong skills in creating digital solutions that make a difference.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              As a recent graduate, I bring fresh perspectives and enthusiasm to every project. 
              I love turning complex problems into simple, beautiful, and intuitive designs. 
              My journey in tech has been driven by curiosity and a genuine passion for coding.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or building personal projects to expand my skill set. 
              I believe in writing clean, maintainable code and creating user experiences that delight.
            </p>
          </div>
            
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
             {/*<div className="text-center p-6 bg-slate-50 rounded-lg">
              <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Fresh Graduate</h3>
              <p className="text-sm text-slate-600">Ready to start my tech journey</p>
            </div> */}

            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Clean Code</h3>
              <p className="text-sm text-slate-600">Writing maintainable solutions</p>
            </div>
            
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <Coffee className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Problem Solver</h3>
              <p className="text-sm text-slate-600">Turning ideas into reality</p>
            </div>
            
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <Heart className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Team Player</h3>
              <p className="text-sm text-slate-600">Collaborating to build amazing products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;