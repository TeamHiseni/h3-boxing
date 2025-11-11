import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Trophy, Target, Users, Clock, Star, CheckCircle, Cpu, Shield, Rocket, Hexagon, Sparkles, Dumbbell } from 'lucide-react';

const Memberships = () => {
  const membershipPlans = [
    {
      category: 'Competition Memberships',
      description: 'Für ambitionierte Boxer, die an Wettkämpfen teilnehmen möchten',
      icon: Trophy,
      color: 'from-red-500 via-red-600 to-red-700',
      glowColor: 'red-500',
      borderGlow: 'shadow-red-500/50',
      plans: [
        {
          name: 'Jährlich (Wettkämpfer)',
          price: '1290.-',
          duration: 'pro Jahr',
          features: [
            'Wettkampfvorbereitung',
            'Persönliche Betreuung',
            'Sparring Sessions',
            'Ernährungsberatung',
            'Wettkampfbegleitung'
          ],
          popular: true
        },
        {
          name: 'Jährlich Jugend (Wettkämpfer)',
          price: '999.-',
          duration: 'pro Jahr',
          features: [
            'Jugend-Wettkampfvorbereitung',
            'Altersgerechte Betreuung',
            'Techniktraining',
            'Mentale Vorbereitung',
            'Eltern-Updates'
          ]
        }
      ]
    },
    {
      category: 'Fitness Boxing',
      description: 'Perfekt für Fitness-orientiertes Boxtraining ohne Wettkampfdruck',
      icon: Target,
      color: 'from-cyan-500 via-cyan-600 to-blue-700',
      glowColor: 'cyan-400',
      borderGlow: 'shadow-cyan-500/50',
      plans: [
        {
          name: 'Jährlich',
          price: '1090.-',
          duration: 'pro Jahr',
          features: [
            'Fitness-Boxkurse',
            'Cardio-Training',
            'Krafttraining',
            'Flexibilität',
            'Community Events'
          ]
        },
        {
          name: 'Halbjahr',
          price: '650.-',
          duration: 'pro 6 Monate',
          features: [
            'Fitness-Boxkurse',
            'Cardio-Training',
            'Krafttraining',
            'Flexibilität'
          ]
        }
      ]
    },
    {
      category: 'Jugend (10–15 Jahre)',
      description: 'Speziell entwickelte Programme für junge Athleten',
      icon: Users,
      color: 'from-purple-500 via-purple-600 to-indigo-700',
      glowColor: 'purple-500',
      borderGlow: 'shadow-purple-500/50',
      plans: [
        {
          name: 'Jährlich',
          price: '790.-',
          duration: 'pro Jahr',
          features: [
            'Altersgerechtes Training',
            'Grundtechniken',
            'Koordination & Balance',
            'Selbstvertrauen stärken',
            'Soziale Kompetenzen',
            'Sicherheitstraining'
          ]
        },
        {
          name: 'Halbjahr',
          price: '490.-',
          duration: 'pro 6 Monate',
          features: [
            'Altersgerechtes Training',
            'Grundtechniken',
            'Koordination & Balance',
            'Selbstvertrauen stärken',
            'Soziale Kompetenzen'
          ]
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Dumbbell,
      title: 'Professionelle Trainer',
      description: 'Lerne von erfahrenen Coaches mit echter Kampferfahrung',
      glow: 'red-500'
    },
    {
      icon: Star,
      title: 'Top Equipment',
      description: 'Modernste Ausstattung und professionelle Geräte',
      glow: 'cyan-400'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Werde Teil einer motivierenden Gemeinschaft',
      glow: 'purple-500'
    },
    {
      icon: Target,
      title: 'Individuelle Ziele',
      description: 'Persönliche Betreuung für deine spezifischen Ziele',
      glow: 'green-500'
    }
  ];

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Animated Circuit Background */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 10% 90%, rgba(34, 197, 94, 0.4) 0%, transparent 50%)
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
            backgroundImage: 'url("/1FDBA8B8-EDF8-441F-BBA4-4B59E37E6814.JPG")',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
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
            <Rocket className="h-16 w-16 text-red-600 mx-auto animate-bounce relative z-10 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]" />
            <div className="absolute inset-0 border-2 border-red-500/30 rounded-full animate-ping"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              Mitgliedschaften
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Wähle das perfekte Trainingspaket für deine Ziele und starte deine Boxing-Journey bei H3 Boxing
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative">
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(220, 38, 38, 0.3) 25%, rgba(220, 38, 38, 0.3) 26%, transparent 27%),
              linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.3) 25%, rgba(6, 182, 212, 0.3) 26%, transparent 27%)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <Shield className="h-12 w-12 text-red-500 mx-auto animate-pulse" />
              <div className="absolute inset-0 bg-red-500/30 blur-xl animate-pulse"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                Deine Vorteile bei H3 Boxing
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 text-center overflow-hidden"
              >
                {/* Holographic Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${benefit.glow}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-300 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>

                <div className="relative z-10">
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-${benefit.glow}/20 blur-2xl group-hover:blur-3xl transition-all duration-500`}></div>
                    <benefit.icon className={`h-10 w-10 text-${benefit.glow} mx-auto group-hover:text-white transition-colors duration-300 relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]`} />
                    <div className="absolute inset-0 border border-red-500/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-red-600 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Scan Line */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
        {/* Animated Matrix Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(220, 38, 38, 0.3) 25%, rgba(220, 38, 38, 0.3) 26%, transparent 27%),
              linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.3) 25%, rgba(6, 182, 212, 0.3) 26%, transparent 27%),
              linear-gradient(45deg, transparent 24%, rgba(168, 85, 247, 0.3) 25%, rgba(168, 85, 247, 0.3) 26%, transparent 27%)
            `,
            backgroundSize: '50px 50px, 50px 50px, 50px 50px',
            animation: 'matrix-flow 25s linear infinite'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {membershipPlans.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <div className="text-center mb-12">
                <div className="relative mb-6 group">
                  <div className="absolute inset-0 bg-red-500/30 blur-2xl animate-pulse group-hover:blur-3xl transition-all duration-500"></div>
                  <category.icon className="h-12 w-12 text-red-500 mx-auto relative z-10 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]" />
                  <div className="absolute inset-0 border-2 border-red-500/30 rounded-full animate-ping opacity-50"></div>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                    {category.category}
                  </span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {category.plans.map((plan, planIndex) => (
                  <div
                    key={planIndex}
                    className={`group relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm p-8 pt-12 rounded-3xl border transition-all duration-500 transform hover:scale-105 overflow-visible ${
                      plan.popular 
                        ? `border-${category.glowColor} ${category.borderGlow} shadow-2xl` 
                        : 'border-gray-800 hover:border-red-500/50'
                    }`}
                  >
                    {/* Holographic Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${category.glowColor}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-50">
                        <div className="relative">
                        </div>
                      </div>
                    )}

                    {/* Corner Frames */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-300 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>

                    <div className="text-center mb-8 relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-600 transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                        {plan.name}
                      </h3>
                      <div className="mb-4">
                        <span className={`text-4xl font-bold text-${category.glowColor} drop-shadow-[0_0_20px_rgba(220,38,38,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(220,38,38,0.8)] transition-all duration-300`}>
                          CHF {plan.price}
                        </span>
                        <span className="text-gray-400 ml-2 group-hover:text-gray-300 transition-colors duration-300">
                          {plan.duration}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8 relative z-10">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                          <div className="relative mr-3">
                            <CheckCircle className={`h-5 w-5 text-${category.glowColor} flex-shrink-0 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]`} />
                            <div className={`absolute inset-0 bg-${category.glowColor}/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                          </div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/kontakt"
                      className={`group/btn relative block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                        plan.popular
                          ? `bg-gradient-to-r from-${category.glowColor} to-red-600 text-white ${category.borderGlow} shadow-2xl`
                          : 'bg-gradient-to-br from-gray-800/80 via-black/90 to-gray-800/80 hover:from-red-600 hover:to-red-700 text-white border border-gray-700 hover:border-red-500'
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <div className={`absolute inset-0 bg-${category.glowColor}/20 blur-xl group-hover/btn:blur-2xl transition-all duration-300`}></div>
                      <span className="relative z-10 flex items-center justify-center">
                        <Zap className="w-5 h-5 mr-2 animate-pulse" />
                        Jetzt Anfragen
                      </span>
                      <div className="absolute inset-0 border border-red-400/50 rounded-xl group-hover/btn:border-red-300 transition-colors duration-300"></div>
                    </Link>

                    {/* Scan Line Animation */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
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
            Kontaktiere uns für eine persönliche Beratung und finde die perfekte Mitgliedschaft für deine Ziele.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="group relative bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-red-500/30 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <span className="relative z-10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                Kontakt Aufnehmen
              </span>
              <div className="absolute inset-0 border border-red-400/50 rounded-lg group-hover:border-red-300 transition-colors duration-300"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Memberships;