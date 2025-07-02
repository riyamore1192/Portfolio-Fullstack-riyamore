import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and interesting projects. 
            Let's discuss how we can work together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Let's Connect</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 bg-blue-600 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Email</h4>
                  <p className="text-slate-600">more.riya@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-blue-600 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Phone</h4>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-blue-600 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Location</h4>
                  <p className="text-slate-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold text-slate-800 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  <Github className="w-6 h-6 text-slate-700" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
                <a
                  href="https://twitter.com"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  <Twitter className="w-6 h-6 text-blue-400" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;