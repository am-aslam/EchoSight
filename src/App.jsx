import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Section from './components/Section';
import heroImg from './assets/hero_echo.png';
import neuralImg from './assets/neural_echo.png';
import {
  ChevronDown, Eye, Activity, Phone, Ear, Puzzle, Camera, Zap, Shield, Globe,
  ArrowRight, Layers, Mic, Cpu, Lock, CheckCircle, Navigation as NavIcon,
  Type, MessageSquare, Box, Heart, Award, Target, TrendingUp, Users
} from 'lucide-react';
import ContactTerminal from './components/ContactTerminal';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [isPitchModalOpen, setIsPitchModalOpen] = useState(false);
  const [showBlast, setShowBlast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const progress = (currentScrollY / (docHeight - winHeight)) * 100;

      setScrollY(currentScrollY);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNotify = () => {
    setShowBlast(true);
    setTimeout(() => {
      setShowBlast(false);
      setIsPitchModalOpen(false);
    }, 1500);
  };

  const sections = [
    {
      id: "hero",
      isHero: true,
      headline: "EchoSight",
      subtitle: "AI That Sees, Hears, and Guides",
      content: (
        <div className="hero-content">
          <p className="hero-text" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--color-text-dim)' }}>
            Empowering daily independence through real-time environmental awareness. Next-generation AI smart spectacles for everyone.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary" style={{ background: 'var(--color-primary)', color: '#000' }}>
              Schedule a Meeting
            </a>
            <a href="#platform" className="btn-primary">
              Explore Platform
            </a>
          </div>
          <div className="scroll-indicator" style={{ marginTop: '4rem', opacity: 0.5, animation: 'bounce 2s infinite' }}>
            <ChevronDown size={32} color="var(--color-primary)" />
          </div>
        </div>
      ),
      visual: <img src={heroImg} alt="EchoSight Hero" className="hero-image pulse-glow" style={{ width: '90%', maxWidth: '800px', margin: '2rem auto', display: 'block', filter: 'drop-shadow(0 0 30px rgba(238, 252, 84, 0.2))' }} />,
      align: "center"
    },
    {
      id: "platform",
      title: "Product Platform",
      headline: "An AI-Powered Smart Spectacle Platform",
      subtitle: "The Future of Accessibility",
      content: (
        <div className="platform-container">
          <p style={{ marginBottom: '2rem' }}>
            EchoSight combines computer vision, speech AI, and hearing assistance into a single, elegant wearable platform. No surgery, no implants—just pure intelligent assistance.
          </p>
          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              { icon: <Eye />, title: "Vision-to-Voice", desc: "Real-time scene understanding converted to natural audio guidance" },
              { icon: <Phone />, title: "AI Call Assistant", desc: "Intelligent message and call management built for voice" },
              { icon: <Ear />, title: "Hearing Support", desc: "Integrated digital audio enhancement and dual streams" },
              { icon: <Puzzle />, title: "Modular Design", desc: "Customizable ecosystem that grows with your needs" }
            ].map((f, i) => (
              <div key={i} className="feature-card" style={{ padding: '1.5rem', border: '1px solid rgba(238, 252, 84, 0.1)', background: 'rgba(255,255,255,0.01)', position: 'relative' }}>
                <div style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>{f.icon}</div>
                <h4 style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-tech)' }}>{f.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>{f.desc}</p>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '1px', background: 'var(--color-primary)' }}></div>
              </div>
            ))}
          </div>
        </div>
      ),
      visual: <div style={{ position: 'relative', textAlign: 'center' }}>
        <img src={heroImg} alt="EchoSight Feature" style={{ transform: 'rotate(-10deg) scale(0.9)', opacity: 0.8 }} />
      </div>,
      align: "right"
    },
    {
      id: "independence",
      title: "Capabilities",
      headline: "Designed for Daily Independence",
      content: (
        <div className="independence-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {[
            { icon: <Target />, title: "Object & Obstacle Detection", desc: "Identification of obstacles and hazards in the path" },
            { icon: <Activity />, title: "Dual Audio Streams", desc: "Simultaneous environmental awareness and communication" },
            { icon: <NavIcon />, title: "Navigation Assistance", desc: "Turn-by-turn guidance for indoor and outdoor" },
            { icon: <Ear />, title: "Hearing-Aid Compatible", desc: "Seamless integration with existing assistance devices" },
            { icon: <Users />, title: "Caller Recognition", desc: "AI announces caller names and manages calls" },
            { icon: <Type />, title: "Text Recognition", desc: "Read signs, labels, menus, and documents in real-time" },
            { icon: <MessageSquare />, title: "Message Reading", desc: "Text messages read aloud with AI response options" },
            { icon: <Layers />, title: "Scene Understanding", desc: "Contextual awareness from crosswalks to doorways" }
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><CheckCircle size={16} /></div>
              <div>
                <h5 style={{ fontSize: '1rem', color: 'var(--color-text-main)', marginBottom: '0.25rem' }}>{item.title}</h5>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ),
      align: "left"
    },
    {
      id: "design",
      title: "Philosophy",
      headline: "Wearable, Modular, Human-Centered",
      content: (
        <div className="design-content">
          <p style={{ marginBottom: '2rem' }}>
            EchoSight's design priorities dignity, comfort, and personalization. Our spectacle-based form factor eliminates stigma while providing powerful AI.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'space-between' }}>
            {[
              { icon: <Box />, title: "Interchangeable Frames", desc: "Multiple style options to match personal preferences" },
              { icon: <Layers />, title: "Selectable Modules", desc: "User-chosen hearing and audio components" },
              { icon: <Heart />, title: "Lightweight Design", desc: "All-day comfort with balanced weight distribution" }
            ].map((item, idx) => (
              <div key={idx} style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                <h5 style={{ marginBottom: '0.5rem' }}>{item.title}</h5>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2.5rem', fontSize: '0.9rem', color: 'var(--color-text-dim)', borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
            Unlike invasive surgical solutions, EchoSight requires no medical procedures. Users can start benefiting immediately.
          </p>
        </div>
      ),
      align: "center"
    },
    {
      id: "tech-foundation",
      title: "Architecture",
      headline: "Deep-Tech Foundation",
      content: (
        <div className="tech-foundation">
          <div className="tech-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {[
              { icon: <Camera />, title: "Computer Vision", desc: "Advanced object detection and spatial awareness using deep learning" },
              { icon: <Mic />, title: "Speech AI", desc: "Natural language processing for seamless conversational interfaces" },
              { icon: <Cpu />, title: "Hybrid Computing", desc: "Balanced on-device processing for low latency and cloud for complex tasks" },
              { icon: <Lock />, title: "Privacy-First", desc: "End-to-end encryption and local processing of sensitive data" }
            ].map((card, i) => (
              <div key={i} style={{ padding: '1.5rem', background: 'var(--color-surface)', border: '1px solid #333', borderRadius: '4px' }}>
                <div style={{ background: 'var(--color-primary)', color: '#000', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  {React.cloneElement(card.icon, { size: 18 })}
                </div>
                <h5 style={{ marginBottom: '0.5rem' }}>{card.title}</h5>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ color: 'var(--color-primary)', fontSize: '1rem', marginBottom: '1rem' }}>Technical Advantages</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                Our proprietary AI layer integrates deep learning models optimized for real-time performance on edge devices.
                Custom algorithms for low-power vision maintain accuracy while extending battery life.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', marginTop: '2rem' }}>
                The secure architecture ensures that personal data never leaves the device unless explicitly authorized.
                Hybrid approach allows for continuous improvement while maintaining offline functionality.
              </p>
            </div>
          </div>
        </div>
      ),
      visual: <img src={neuralImg} alt="Neural Foundation" style={{ opacity: 0.6, filter: 'hue-rotate(10deg) saturate(1.2)' }} />,
      align: "right"
    },
    {
      id: "advantages",
      title: "Competitiveness",
      headline: "Why EchoSight Wins",
      content: (
        <div className="advantages-grid">
          {[
            { title: "No Surgery Required", desc: "Completely non-invasive. Start immediately without medical procedures or recovery time." },
            { title: "All-in-One Platform", desc: "Integrates vision, hearing, and communication into a single, elegant wearable." },
            { title: "Modular Ecosystem", desc: "Upgrade components without replacing the entire system, creating long-term value." },
            { title: "AI-First Design", desc: "Built from the ground up for AI, not a retrofit of existing glasses. Our architecture is optimized for machine learning workloads and future AI capabilities." }
          ].map((item, i) => (
            <div key={i} className="advantage-card">
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
          <div className="advantages-footer" style={{ marginTop: '1rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
              Our modular approach creates a sustainable competitive moat through ecosystem lock-in and continuous innovation.
            </p>
          </div>
        </div>
      ),
      align: "center"
    },
    {
      id: "market",
      title: "Market Opportunity",
      headline: "A Large, Growing Market",
      content: (
        <div className="market-content">
          <div className="stat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
            {[
              { val: "285M+", label: "Visually Impaired", sub: "Global population requiring vision assistance" },
              { val: "430M+", label: "Hearing Impaired", sub: "Worldwide users facing barriers" },
              { val: "$8B+", label: "Target Market", sub: "Projected assistive technology sector by 2028" }
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-tech)' }}>{stat.val}</div>
                <div style={{ fontWeight: 600, margin: '0.5rem 0' }}>{stat.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-dim)' }}>{stat.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)', textAlign: 'center' }}>
            <Globe size={40} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
            <p style={{ fontSize: '0.95rem' }}>Social impact and technological readiness create a unique investment opportunity.</p>
          </div>
        </div>
      ),
      align: "center"
    },
    {
      id: "contact",
      title: "Join Us",
      headline: "Join Us in Building Inclusive Intelligence",
      content: (
        <div className="join-us">
          <p style={{ marginBottom: '2.5rem', color: 'var(--color-text-dim)' }}>
            EchoSight is a vision for a world where technology empowers everyone. We're seeking strategic partners who share our commitment.
          </p>
          <div className="join-us-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { icon: <TrendingUp />, title: "Investment", desc: "Join a high-growth deep-tech startup addressing an $8B+ market" },
              { icon: <Target />, title: "Partnerships", desc: "Collaborate on healthcare, integration, and global distribution" },
              { icon: <Award />, title: "Shared Vision", desc: "Build the future of accessibility with a mission-driven team" }
            ].map((item, i) => (
              <div key={i} style={{ padding: '1.5rem', background: '#111', border: '1px solid #222', textAlign: 'left' }}>
                <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{item.icon}</div>
                <h5 style={{ marginBottom: '0.5rem' }}>{item.title}</h5>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact-form" className="btn-primary" style={{ background: 'var(--color-primary)', color: '#000' }}>Schedule a Meeting</a>
            <button
              onClick={() => setIsPitchModalOpen(true)}
              className="btn-primary"
              style={{ border: '1px solid #444', color: '#fff', background: 'transparent' }}
            >
              Download Pitch Deck
            </button>
          </div>
          <div id="contact-form" style={{ marginTop: '5rem' }}>
            <ContactTerminal />
          </div>
        </div>
      ),
      visual: null,
      align: "center"
    }
  ];

  return (
    <div className="App">
      {/* Blasting Animation Overlay */}
      {showBlast && (
        <div className="blast-overlay">
          <div className="blast-core"></div>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`particle p${i}`}></div>
          ))}
          <div className="blast-text">NOTIFICATION READY</div>
        </div>
      )}

      {/* Pitch Modal */}
      {isPitchModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Pitch Deck Status</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--color-text-dim)' }}>The pitch is on way. We are finalizing the latest details for you.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button onClick={handleNotify} className="btn-primary" style={{ background: 'var(--color-primary)', color: '#000', padding: '0.5rem 1.5rem' }}>
                Notify me
              </button>
              <button onClick={() => setIsPitchModalOpen(false)} className="btn-primary" style={{ border: '1px solid #444', color: '#fff', padding: '0.5rem 1.5rem', background: 'transparent' }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}% ` }}></div>
      </div>

      <div
        className="parallax-bg"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }} // Subtle movement
      ></div>

      <Navigation />
      <div className="scroll-container">
        {sections.map(section => (
          <Section key={section.id} {...section} />
        ))}
      </div>

      {scrollY > 500 && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo(0, 0)}
          title="Back to Top"
        >
          <ArrowRight size={24} style={{ transform: 'rotate(-90deg)' }} />
        </button>
      )}

      <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>
        <div style={{ marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '2px' }}>ECHOSIGHT</div>
        &copy; 2025 EchoSight Technologies. All rights reserved.
      </footer>
    </div>
  );
}

export default App;


