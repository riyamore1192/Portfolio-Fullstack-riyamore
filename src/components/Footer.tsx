import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">More Riya</h3>
            <p className="text-slate-400">Full-Stack Developer</p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-slate-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-700">
            <p className="text-slate-400">
              © {new Date().getFullYear()} More Riya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;