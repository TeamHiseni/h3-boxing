import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Award, Users, Clock, Cpu, Shield, Rocket, Hexagon, Sparkles, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: 'Neu', label: 'Junges, engagiertes Unternehmen', glow: 'red-500' },
    { icon: Users, number: '40+', label: 'Zufriedene Kunden', glow: 'cyan-400' }
  ];


  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("/Screenshot 2025-09-01 155437.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Matrix Grid Overlay */}
        {/* Holographic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-cyan-400/5 animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-red-600/30 blur-3xl animate-pulse group-hover:bg-red-500/40 transition-all duration-500"></div>
            <Hexagon className="h-20 w-20 text-red-500 mx-auto animate-spin-slow opacity-30 absolute" />
            <Zap className="h-16 w-16 text-red-600 mx-auto animate-pulse relative z-10 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]" />
            <div className="absolute inset-0 border-2 border-red-500/30 rounded-full animate-ping"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              Über H3 Boxing
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            H3 Boxing ist mehr als ein Studio – wir sind eine Boxfamilie, die Technik, Disziplin und Kraft fördert.
          </p>
        </div>
      </section>
     {/* Flyer Section */}
     <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black relative">
       {/* Holographic Background */}
       <div className="absolute inset-0 opacity-10">
         <div className="absolute inset-0" style={{
           backgroundImage: `
             radial-gradient(circle at 30% 30%, rgba(220, 38, 38, 0.4) 0%, transparent 50%),
             radial-gradient(circle at 70% 70%, rgba(6, 182, 212, 0.4) 0%, transparent 50%)
           `
         }}></div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="w-full">
           <img
             src="/flyer.jpg"
             alt="H3 Boxing Flyer"
             className="w-full h-auto object-cover"
           />
         </div>
       </div>
     </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative">
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(220, 38, 38, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)
            `
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group relative">
                {/* Holographic Container */}
                <div className="relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${stat.glow}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-300 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>

                  <div className="relative z-10">
                    <div className="relative mb-4">
                      <div className={`absolute inset-0 bg-${stat.glow}/20 blur-2xl group-hover:blur-3xl transition-all duration-500`}></div>
                      <stat.icon className={`h-8 w-8 text-${stat.glow} group-hover:text-white transition-colors duration-300 relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]`} />
                      <div className="absolute inset-0 border border-red-500/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                    </div>
                    <div className={`text-4xl font-bold text-${stat.glow} mb-2 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(220,38,38,0.8)] transition-all duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-white group-hover:text-gray-300 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                      {stat.label}
                    </div>
                  </div>

                  {/* Scan Line */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
        {/* Matrix Background */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative inline-block mb-6">
                <Cpu className="h-10 w-10 text-red-500 animate-spin-slow" />
                <div className="absolute inset-0 bg-red-500/30 blur-xl animate-pulse"></div>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                  Unsere Geschichte
                </span>
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <div className="relative p-6 bg-gradient-to-br from-gray-900/50 via-black/70 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-red-500/30 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500/50"></div>
                  <p className="drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                   H3 Boxing wurde mit der Vision gegründet, Boxsport auf einem neuen Level zu erleben. 
Unser Studio in Volketswil verbindet traditionelle Boxtechniken mit modernen Trainingsmethoden 
und einer Atmosphäre, in der sich jeder willkommen fühlt.

                  </p>
                </div>
                
                <div className="relative p-6 bg-gradient-to-br from-gray-900/50 via-black/70 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50"></div>
                  <p className="drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    Wir glauben daran, dass jeder das Potenzial hat, ein Champion zu werden – 
egal ob Anfänger, Hobbyboxer oder Wettkämpfer. 
Bei uns findest du das Training, das zu deinen Zielen passt.

                  </p>
                </div>
                
                <div className="relative p-6 bg-gradient-to-br from-gray-900/50 via-black/70 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500/50"></div>
                  <p className="drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    Unser Team aus erfahrenen Trainern unterstützt dich auf deinem Weg, 
fördert Technik, Disziplin und Stärke und sorgt dafür, dass du deine persönlichen Bestleistungen erreichst. 
Dabei steht die Gemeinschaft immer im Mittelpunkt.

                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500 aspect-square">
                <img
                  src="/Kim Hiseni.JPG"
                  alt="Kim Hiseni - H3 Boxing"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
                
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner Frames */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-cyan-400/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative">
        {/* Animated Circuit Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 10%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 10% 90%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)
            `
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <Rocket className="h-12 w-12 text-red-500 mx-auto animate-bounce" />
              <div className="absolute inset-0 bg-red-500/30 blur-xl animate-pulse"></div>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                Unsere Mission
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
    title: 'Training der Zukunft',
    description: 'Wir kombinieren bewährte Boxtechniken mit modernem, effektivem Training für optimale Ergebnisse.',
    icon: Shield,
    glow: 'red-500'
  },
              {
    title: 'Community First',
    description: 'Gemeinschaft steht bei uns im Mittelpunkt – jeder ist willkommen und motiviert.',
    icon: Users,
    glow: 'cyan-400'
  },
              {
    title: 'Individuelle Betreuung',
    description: 'Unsere Trainer erstellen persönliche Trainingspläne, die auf deine Ziele abgestimmt sind.',
    icon: Sparkles,
    glow: 'purple-500'
  },
                {
    title: 'Höchste Standards',
    description: 'Von Ausstattung bis Betreuung – bei uns bekommst du Qualität auf Wettkampfniveau.',
    icon: Award,
                  glow: 'emerald-500'
  }
            ].map((item, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden">
                {/* Holographic Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${item.glow}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated Corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-300 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>

                <div className="relative z-10">
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-${item.glow}/20 blur-2xl group-hover:blur-3xl transition-all duration-500`}></div>
                    <item.icon className={`h-8 w-8 ${item.glow === 'emerald-500' ? 'text-emerald-500' : `text-${item.glow}`} group-hover:text-white transition-colors duration-300 relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:text-red-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                    {item.description}
                  </p>
                </div>

                {/* Scan Line Effect */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
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
            <Sparkles className="h-12 w-12 text-red-500 mx-auto animate-pulse" />
            <div className="absolute inset-0 bg-red-500/30 blur-xl animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
              Bereit für dein erstes Training?
            </span>
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            Starte deine Boxing-Journey bei H3 Boxing. Wähle eine Mitgliedschaft oder kontaktiere uns für weitere Informationen.
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
            
            <Link
              to="/mitgliedschaften"
              className="group relative border-2 border-red-600 text-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative z-10 flex items-center justify-center">
                <Trophy className="w-5 h-5 mr-2" />
                Mitgliedschaften Ansehen
              </span>
              <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;