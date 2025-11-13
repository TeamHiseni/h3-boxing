import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, FileText, Cpu, Hexagon, Sparkles, Camera, Globe, Users, Mail } from 'lucide-react';

const Datenschutz = () => {
  const sections = [
    {
      icon: Database,
      title: 'Welche Daten wir erfassen',
      content: [
        'Anmeldung für Training, Abo oder Event',
        'Kontakt über Formulare, E-Mail oder Social Media',
        'Website-Besuch (IP-Adresse, Cookies, Nutzungsdaten)',
        'Bilder/Videos bei Training oder Events (mit Einwilligung)',
        'Name, Kontaktdaten, Zahlungsinformationen, Trainingsdaten, Gesundheitsangaben (freiwillig), Kommunikationsinhalte'
      ],
      glow: 'blue-500'
    },
    {
      icon: Lock,
      title: 'Zweck der Datenverarbeitung',
      content: [
        'Abwicklung deiner Anmeldung und Mitgliedschaft',
        'Kommunikation (Terminänderungen, Angebote)',
        'Organisation von Trainings, Kursen und Veranstaltungen',
        'Optimierung unserer Website und Services',
        'Rechtliche und buchhalterische Pflichten'
      ],
      glow: 'green-500'
    },
    {
      icon: Users,
      title: 'Weitergabe an Dritte',
      content: [
        'Deine Daten werden nicht verkauft',
        'Weitergabe nur bei ausdrücklicher Zustimmung',
        'Bei gesetzlicher Vorschrift',
        'Zur Vertragserfüllung (Buchhaltung, Zahlungsdienstleister)',
        'Alle Dienstleister sind vertraglich zum Datenschutz verpflichtet'
      ],
      glow: 'orange-500'
    },
    {
      icon: Shield,
      title: 'Aufbewahrung und Sicherheit',
      content: [
        'Speicherung nur so lange wie notwendig oder gesetzlich verlangt',
        'Schutz durch technische und organisatorische Massnahmen',
        'Schutz vor unbefugtem Zugriff',
        'Regelmässige Sicherheitsüberprüfungen'
      ],
      glow: 'emerald-500'
    },
    {
      icon: UserCheck,
      title: 'Deine Rechte',
      content: [
        'Auskunft über deine gespeicherten Daten',
        'Berichtigung unrichtiger Daten',
        'Löschung (sofern keine Aufbewahrungspflicht besteht)',
        'Einschränkung der Verarbeitung',
        'Widerruf deiner Einwilligung mit Wirkung für die Zukunft'
      ],
      glow: 'amber-500'
    },
    {
      icon: Eye,
      title: 'Cookies und Tracking',
      content: [
        'Cookies zur Verbesserung der Nutzerfreundlichkeit',
        'Deaktivierung über Browser-Einstellungen möglich',
        'Keine personalisierte Werbung ohne Einwilligung',
        'Keine Tracking-Tools ohne deine Zustimmung'
      ],
      glow: 'violet-500'
    },
    {
      icon: Camera,
      title: 'Bild- und Videoaufnahmen',
      content: [
        'Aufnahmen während Trainings oder Events möglich',
        'Veröffentlichung auf Website oder Social Media',
        'Nur mit deiner ausdrücklichen Zustimmung',
        'Widerruf der Zustimmung jederzeit möglich'
      ],
      glow: 'rose-500'
    },
    {
      icon: Globe,
      title: 'Änderungen der Datenschutzerklärung',
      content: [
        'Anpassungen bei Bedarf vorbehalten',
        'Aktuelle Version gilt jeweils auf unserer Website',
        'Information über wesentliche Änderungen',
        'Regelmässige Überprüfung empfohlen'
      ],
      glow: 'teal-500'
    }
  ];

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Animated Circuit Background */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 10% 90%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)
          `,
          animation: 'circuit-pulse 20s ease-in-out infinite'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1600")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Matrix Grid Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-move 15s linear infinite'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-red-600/30 blur-3xl animate-pulse group-hover:bg-red-500/40 transition-all duration-500"></div>
            <Hexagon className="h-20 w-20 text-red-500 mx-auto animate-spin-slow opacity-30 absolute" />
            <Shield className="h-16 w-16 text-red-600 mx-auto animate-pulse relative z-10 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]" />
            <div className="absolute inset-0 border-2 border-red-500/30 rounded-full animate-ping"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              Datenschutzerklärung
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Der Schutz deiner persönlichen Daten ist uns, der H3 Boxing GmbH, ein wichtiges Anliegen.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="relative inline-block">
            <div className="bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm p-4 rounded-xl border border-gray-800 hover:border-red-500/30 transition-all duration-300">
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <FileText className="h-4 w-4 text-red-500" />
                <span className="text-sm">Stand: Juli 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Party Section */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <div className="relative inline-block mb-8">
              <Cpu className="h-10 w-10 text-red-500 animate-spin-slow" />
              <div className="absolute inset-0 bg-red-500/30 blur-xl animate-pulse"></div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-500/30 transition-all duration-500 max-w-2xl mx-auto relative">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500/50"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-500/50"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500/50"></div>

              <h2 className="text-2xl font-bold mb-6 text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] text-center">
                <span className="text-gray-800">1.</span> <span className="text-red-600">Verantwortliche Stelle</span>
              </h2>
              <div className="text-gray-300 space-y-2 text-center">
                <p className="text-xl font-semibold text-white">H3 Boxing GmbH</p>
                <p>Industriestrasse 2a</p>
                <p>8604 Volketswil, Schweiz</p>
                <p>E-Mail: <a href="mailto:H3boxing@gmail.com" className="text-red-500 hover:text-red-400 transition-colors">H3boxing@gmail.com</a></p>
                <p>Geschäftsführer: Kim Hiseni</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(220, 38, 38, 0.3) 25%, rgba(220, 38, 38, 0.3) 26%, transparent 27%),
              linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.3) 25%, rgba(6, 182, 212, 0.3) 26%, transparent 27%)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                {/* Holographic Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${section.glow}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-300 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>

                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-${section.glow}/20 blur-2xl group-hover:blur-3xl transition-all duration-500`}></div>
                    <section.icon 
                      className="h-10 w-10 transition-colors duration-300 relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]"
                      style={{ 
                        color: section.glow === 'blue-500' ? '#3b82f6' :
                               section.glow === 'green-500' ? '#22c55e' :
                               section.glow === 'orange-500' ? '#f97316' :
                               section.glow === 'emerald-500' ? '#10b981' :
                               section.glow === 'amber-500' ? '#f59e0b' :
                               section.glow === 'violet-500' ? '#8b5cf6' :
                               section.glow === 'rose-500' ? '#f43f5e' :
                               section.glow === 'teal-500' ? '#14b8a6' : '#ef4444'
                      }}
                    />
                    <div className="absolute inset-0 border border-red-500/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] text-white">
                    <span className="text-gray-900">{index + 2}.</span> <span className="text-red-600">{section.title}</span>
                  </h3>
                  
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 drop-shadow-[0_0_5px_rgba(220,38,38,0.5)]"
                          style={{ 
                            backgroundColor: section.glow === 'blue-500' ? '#3b82f6' :
                                           section.glow === 'green-500' ? '#22c55e' :
                                           section.glow === 'orange-500' ? '#f97316' :
                                           section.glow === 'emerald-500' ? '#10b981' :
                                           section.glow === 'amber-500' ? '#f59e0b' :
                                           section.glow === 'violet-500' ? '#8b5cf6' :
                                           section.glow === 'rose-500' ? '#f43f5e' :
                                           section.glow === 'teal-500' ? '#14b8a6' : '#ef4444'
                          }}
                        ></div>
                        <span className="drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scan Line Effect */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
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
            <Sparkles className="h-12 w-12 text-red-500 animate-pulse" />
            <div className="absolute inset-0 bg-red-500/30 blur-xl animate-pulse"></div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-500/30 transition-all duration-500 max-w-2xl mx-auto relative">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500/50"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-500/50"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500/50"></div>

            <h3 className="text-2xl font-bold mb-4 text-purple-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
              <span className="text-red-600">Bei Fragen zum Datenschutz</span>
            </h3>
            <p className="text-gray-300 mb-6 drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">
              Wir verarbeiten deine Daten vertraulich und im Einklang mit dem revidierten Schweizer Datenschutzgesetz (revDSG).
            </p>
            <div className="flex items-center justify-center space-x-2 text-red-500">
              <Mail className="h-5 w-5" />
              <a
                href="mailto:hiseni@h3boxing.com"
                className="text-lg font-semibold hover:text-red-400 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]"
              >
                hiseni@h3boxing.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Datenschutz;