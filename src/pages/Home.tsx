import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Target, Trophy, Users, Cpu, Hexagon, Shield, Sparkles, Rocket, Clock } from 'lucide-react';

const Home = () => {
  const features = [
  {
    icon: Target,
    title: 'Familiäre Atmosphäre',
    description: 'Bei uns zählst du – familiäre Atmosphäre, Respekt und Gemeinschaft.',
    glow: 'red-500'
  },
  {
    icon: Trophy,
    title: 'Training Vielfalt',
    description: 'Vielfältige Trainings für Einsteiger und Fortgeschrittene.',
    glow: 'cyan-400'
  },
  {
    icon: Users,
    title: 'Gemeinschaft',
    description: 'Mehr als ein Studio – Freundschaft und Teamgeist inklusive.',
    glow: 'purple-500'
  },
];


  const memberships = [
    {
      category: 'Competition Memberships',
      plans: [
        { name: 'Jährlich (Wettkämpfer)', price: '1290.-' },
        { name: 'Jährlich Jugend (Wettkämpfer)', price: '999.-' },
      ],
      glow: 'red-500'
    },
    {
      category: 'Fitness Boxing',
      plans: [
        { name: 'Jährlich', price: '1090.-' },
        { name: 'Halbjahr', price: '650.-' },
      ],
      glow: 'cyan-400'
    },
    {
      category: 'Jugend (10–15 Jahre)',
      plans: [
        { name: 'Jährlich', price: '790.-' },
        { name: 'Halbjahr', price: '490.-' },
      ],
      glow: 'purple-500'
    },
  ];

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-50"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[calc(100vh-100px)] flex items-center justify-center overflow-hidden">
        {/* Futuristic Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url("/Ramadan vs Shamil.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          {/* Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          ></div>
          {/* Animated Scan Lines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Holographic Logo */}
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-red-600/30 blur-3xl animate-pulse group-hover:bg-red-500/40 transition-all duration-500"></div>
            <img 
              src="/logo.png" 
              alt="H3 Boxing Logo" 
              className="h-20 w-20 mx-auto object-contain animate-pulse relative z-10 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)] group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 border-2 border-red-500/30 rounded-lg animate-ping"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              H3 Boxing
            </span>
          </h1>
          
          
          {/* Holographic Subtitle */}
          <div className="relative mb-8">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Dein Boxstudio in Volketswil – professionell, einladend und für alle Levels geeignet.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-xl"></div>
          </div>
          
          {/* Futuristic Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="group relative bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-red-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <span className="relative z-10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                Jetzt Starten
              </span>
              <div className="absolute inset-0 border border-red-400/50 rounded-lg group-hover:border-red-300 transition-colors duration-300"></div>
            </Link>
            <Link
              to="/uber-uns"
              className="group relative border-2 border-red-600 text-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative z-10 flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2" />
                Mehr Erfahren
              </span>
              <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative">
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)
            `
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <Cpu className="h-12 w-12 text-red-500 mx-auto animate-spin-slow" />
              <div className="absolute inset-0 bg-red-500/30 blur-xl animate-pulse"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                Warum H3 Boxing?
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              Entdecke die Vorteile unseres modernen Boxtrainings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                {/* Holographic Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.glow}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 via-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-${feature.glow}/20 blur-2xl group-hover:blur-3xl transition-all duration-500`}></div>
                    <feature.icon className={`h-12 w-12 text-${feature.glow} group-hover:text-white transition-colors duration-300 relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]`} />
                    <div className="absolute inset-0 border border-red-500/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-red-400 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Scan Line Effect */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Schedule Section */}
        <div className="mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="relative inline-block mb-6">
                <Clock className="h-12 w-12 text-red-500 mx-auto animate-pulse" />
                <div className="absolute inset-0 bg-red-500/30 blur-xl animate-pulse"></div>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                  Trainingszeiten
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                Unser wöchentlicher Trainingsplan - für alle Levels geeignet
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="group relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 overflow-hidden">
                {/* Holographic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-300 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>

                <div className="relative z-10 overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">Zeit</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-red-500 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">Montag</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-cyan-400 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">Dienstag</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-purple-500 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Mittwoch</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-green-500 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">Donnerstag</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-yellow-500 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">Freitag</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-pink-500 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">Samstag</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800 hover:bg-green-900/10 transition-colors duration-300">
                        <td className="px-6 py-4 text-white font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">11:00–12:30</td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">-</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">-</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">-</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">-</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">-</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">Kraft und Ausdauer</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-red-900/10 transition-colors duration-300">
                        <td className="px-6 py-4 text-white font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">17:15–18:15</td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">Jugend Boxtraining</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">-</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">Jugend Boxtraining</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">-</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">Jugend Boxtraining</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">-</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-red-900/10 transition-colors duration-300">
                        <td className="px-6 py-4 text-white font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">18:30–19:45</td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">Fitnessboxtraining</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">Freies Training</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">Fitnessboxtraining</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">Freies Training</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">Fitnessboxtraining</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">-</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-cyan-900/10 transition-colors duration-300">
                        <td className="px-6 py-4 text-white font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">19:45–21:00</td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">Wettkampf-Training</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">Freies-Training</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">Wettkampf-Training</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">Freies-Training</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">Wettkampf-Training</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="relative group/cell">
                            <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            <span className="relative z-10">-</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Custom Scrollbar Styles */}
                <style jsx>{`
                  .overflow-x-auto::-webkit-scrollbar {
                    height: 6px;
                  }
                  .overflow-x-auto::-webkit-scrollbar-track {
                    background: rgba(31, 41, 55, 0.5);
                    border-radius: 3px;
                  }
                  .overflow-x-auto::-webkit-scrollbar-thumb {
                    background: linear-gradient(to right, #dc2626, #ef4444);
                    border-radius: 3px;
                  }
                  .overflow-x-auto::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to right, #ef4444, #f87171);
                  }
                `}</style>

                {/* Free Trial Note */}
                <div className="relative z-10 px-6 py-4 border-t border-gray-700">
                  <p className="text-center text-red-500 font-semibold drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] animate-pulse">
                    *Kostenloses Probetraining / Free Trial
                  </p>
                </div>

                {/* Scan Line Effect */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Matrix-style Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(220, 38, 38, 0.3) 25%, rgba(220, 38, 38, 0.3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.3) 75%, rgba(6, 182, 212, 0.3) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(220, 38, 38, 0.3) 25%, rgba(220, 38, 38, 0.3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.3) 75%, rgba(6, 182, 212, 0.3) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <Rocket className="h-12 w-12 text-red-500 mx-auto animate-bounce" />
              <div className="absolute inset-0 bg-red-500/30 blur-xl animate-pulse"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                Mitgliedschaften
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              Wähle das perfekte Trainingspaket für deine Ziele
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberships.map((membership, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/90 via-black to-gray-900/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                {/* Holographic Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${membership.glow}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-300 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-6 text-white drop-shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:text-red-400 transition-all duration-300">
                    {membership.category}
                  </h3>
                  <div className="space-y-4">
                    {membership.plans.map((plan, planIndex) => (
                      <div key={planIndex} className="flex justify-between items-center py-3 border-b border-gray-800 last:border-b-0 group-hover:border-gray-700 transition-colors duration-300">
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{plan.name}</span>
                        <span className={`text-${membership.glow} font-semibold drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]`}>CHF {plan.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scan Line Animation */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/kontakt"
              className="group relative inline-flex items-center bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-red-500/30 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <Zap className="w-5 h-5 mr-2 animate-pulse relative z-10" />
              <span className="relative z-10">Mitgliedschaft Anfragen</span>
              <div className="absolute inset-0 border border-red-400/50 rounded-lg group-hover:border-red-300 transition-colors duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative">
        {/* Holographic Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(220, 38, 38, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)
            `,
            animation: 'circuit-pulse 18s ease-in-out infinite'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="relative inline-block mb-8">
            <Cpu className="h-12 w-12 text-red-500 mx-auto animate-spin-slow" />
            <div className="absolute inset-0 bg-red-500/30 blur-xl animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
              Bereit für dein erstes Training?
            </span>
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            Kontaktiere uns für eine persönliche Beratung und starte deine Boxing-Journey bei H3 Boxing.
          </p>
          
          <Link
            to="/kontakt"
            className="group relative inline-flex items-center bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-red-500/30 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <Sparkles className="w-5 h-5 mr-2 animate-pulse relative z-10" />
            <span className="relative z-10">Jetzt Kontaktieren</span>
            <div className="absolute inset-0 border border-red-400/50 rounded-lg group-hover:border-red-300 transition-colors duration-300"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

// Add custom animations to the CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  
  @keyframes scan {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-scan {
    animation: scan 2s ease-in-out infinite;
  }
  
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
`;
document.head.appendChild(style);

export default Home;