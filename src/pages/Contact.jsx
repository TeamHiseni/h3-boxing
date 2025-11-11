import React, { useState } from 'react';
import { Mail, MapPin, Instagram, Youtube, Music2, Clock, Cpu, Shield, Zap, Hexagon, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('E-Mail wird gesendet...');

    const emailData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      // Call the send-email Edge Function directly
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify(emailData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Fehler beim Senden der E-Mail');
      }

      if (data && data.success) {
        setStatus('E-Mail erfolgreich gesendet! Wir melden uns bald bei dir.');
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data?.error || 'Unbekannter Fehler beim Senden der E-Mail');
      }
    } catch (err) {
      setStatus(`Fehler beim Senden der E-Mail: ${err.message}. Bitte kontaktiere uns direkt per E-Mail: hiseni@h3boxing.com`);
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      title: 'E-Mail',
      content: 'hiseni@h3boxing.com',
      link: 'mailto:hiseni@h3boxing.com',
      glow: 'red-500'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Industriestrasse 2A, 8604 Volketswil, Schweiz',
      link: 'https://maps.google.com/?q=Industriestrasse+2A,+8604+Volketswil,+Switzerland',
      glow: 'cyan-400'
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      content: 'Mo-So: 16:30 - 22:00',
      glow: 'purple-500'
    },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      link: 'https://www.instagram.com/h3boxing/',
      color: 'hover:text-pink-500',
      glow: 'pink-500'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      link: 'http://www.youtube.com/@H3Boxing-GmbH',
      color: 'hover:text-red-600',
      glow: 'red-600'
    },
    {
      icon: Music2,
      name: 'TikTok',
      link: 'https://www.tiktok.com/@h3boxing',
      color: 'hover:text-purple-500',
      glow: 'purple-500'
    },
  ];

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-move 25s linear infinite'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url("/WhatsApp Image 2025-07-21 at 21.23.36.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center -30px',
          }}
        ></div>
        
        {/* Holographic Scan Lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-red-600/30 blur-3xl animate-pulse group-hover:bg-red-500/40 transition-all duration-500"></div>
            <Hexagon className="h-20 w-20 text-red-500 mx-auto animate-spin-slow opacity-30 absolute" />
            <Cpu className="h-16 w-16 text-red-600 mx-auto animate-pulse relative z-10 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]" />
            <div className="absolute inset-0 border-2 border-red-500/30 rounded-full animate-ping"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              Kontakt
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Bereit für dein erstes Training? Kontaktiere uns und starte deine Boxing-Journey bei H3 Boxing.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative">
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(220, 38, 38, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)
            `
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <div className="relative inline-block mb-8">
                <Shield className="h-10 w-10 text-red-500 animate-pulse" />
                <div className="absolute inset-0 bg-red-500/30 blur-xl animate-pulse"></div>
              </div>
              
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                  Kontaktiere Uns
                </span>
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden"
                  >
                    {/* Holographic Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${item.glow}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-300 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>

                    <div className="flex items-start space-x-4 relative z-10">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-${item.glow}/20 blur-2xl group-hover:blur-3xl transition-all duration-500`}></div>
                        <item.icon className={`h-6 w-6 text-${item.glow} group-hover:text-white transition-colors duration-300 relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]`} />
                        <div className="absolute inset-0 border border-red-500/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2 group-hover:text-red-400 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-red-500 transition-colors duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-300 whitespace-pre-line group-hover:text-gray-200 transition-colors duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">
                            {item.content}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Scan Line Effect */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="relative inline-block mb-8">
                <Sparkles className="h-10 w-10 text-red-500 animate-pulse" />
                <div className="absolute inset-0 bg-red-500/30 blur-xl animate-pulse"></div>
              </div>
              
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                  Schreibt uns eine Nachricht
                </span>
              </h2>
              
              {/* Status Message */}
              {status && (
                <div className={`mb-6 p-4 rounded-lg border ${
                  status.includes('erfolgreich')
                    ? 'bg-green-900/20 border-green-500/50 text-green-400' 
                    : status.includes('Fehler') 
                    ? 'bg-red-900/20 border-red-500/50 text-red-400'
                    : 'bg-blue-900/20 border-blue-500/50 text-blue-400'
                }`}>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      status.includes('erfolgreich') 
                        ? 'bg-green-500' 
                        : status.includes('Fehler') 
                        ? 'bg-red-500'
                        : 'bg-blue-500 animate-pulse'
                    }`}></div>
                    <span className="text-sm font-medium">{status}</span>
                  </div>
                </div>
              )}
              
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-red-400 transition-colors duration-300">
                      Vorname
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all duration-300"
                        placeholder="Dein Vorname"
                        disabled={isSubmitting}
                      />
                      <div className="absolute inset-0 border border-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      Nachname
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                        placeholder="Dein Nachname"
                        disabled={isSubmitting}
                      />
                      <div className="absolute inset-0 border border-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    E-Mail
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300"
                      placeholder="deine@email.com"
                      disabled={isSubmitting}
                    />
                    <div className="absolute inset-0 border border-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                
                <div className="relative group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-red-400 transition-colors duration-300">
                    Betreff
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all duration-300"
                      placeholder="Worum geht es?"
                      disabled={isSubmitting}
                    />
                    <div className="absolute inset-0 border border-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                
                <div className="relative group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    Nachricht
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 resize-none"
                      placeholder="Deine Nachricht..."
                      disabled={isSubmitting}
                    ></textarea>
                    <div className="absolute inset-0 border border-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:to-red-700'
                  } text-white`}
                >
                  {!isSubmitting && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-red-500/30 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    </>
                  )}
                  <span className="relative z-10 flex items-center justify-center">
                    <Zap className={`w-5 h-5 mr-2 ${isSubmitting ? 'animate-spin' : 'animate-pulse'}`} />
                    {isSubmitting ? 'E-Mail wird gesendet...' : 'E-Mail Senden'}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 border border-red-400/50 rounded-lg group-hover:border-red-300 transition-colors duration-300"></div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
        {/* Matrix Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(220, 38, 38, 0.3) 25%, rgba(220, 38, 38, 0.3) 26%, transparent 27%),
              linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.3) 25%, rgba(6, 182, 212, 0.3) 26%, transparent 27%),
              linear-gradient(45deg, transparent 24%, rgba(168, 85, 247, 0.3) 25%, rgba(168, 85, 247, 0.3) 26%, transparent 27%)
            `,
            backgroundSize: '40px 40px, 40px 40px, 40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="relative inline-block mb-8">
            <Cpu className="h-12 w-12 text-red-500 mx-auto animate-spin-slow" />
            <div className="absolute inset-0 bg-red-500/30 blur-xl animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
              Folge uns auf Social Media
            </span>
          </h2>
          
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            Bleib up-to-date mit den neuesten Trainings-Tips, Events und Community-News
          </p>
          
          <div className="flex justify-center space-x-8">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center space-y-2 p-6 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden ${social.color}`}
              >
                {/* Holographic Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${social.glow}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-300 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>

                <div className="relative z-10">
                  <div className="relative mb-2">
                    <div className={`absolute inset-0 bg-${social.glow}/20 blur-2xl group-hover:blur-3xl transition-all duration-500`}></div>
                    <social.icon className="h-8 w-8 text-gray-400 group-hover:text-current transition-colors duration-300 relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    {social.name}
                  </span>
                </div>

                {/* Scan Line Effect */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;