import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StylesSection from './components/StylesSection.jsx';
import ChatSection from './components/ChatSection.jsx';
import GuidedPractice from './components/GuidedPractice.jsx';
import PoseTimer from './components/PoseTimer.jsx';
import Personalization from './components/Personalization.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

function loadProfile() {
  try {
    const stored = JSON.parse(localStorage.getItem('yogamate-profile'));
    if (stored && typeof stored === 'object') return stored;
  } catch {
    // Storage is optional.
  }
  return null;
}

export default function App() {
  const chatRef = useRef(null);
  const [selectedStyleId, setSelectedStyleId] = useState(null);
  const [profile, setProfile] = useState(loadProfile);
  const [practicePrefill, setPracticePrefill] = useState(null);

  useEffect(() => {
    if (!profile) {
      try {
        localStorage.removeItem('yogamate-profile');
      } catch {
        // Storage is optional.
      }
    }
  }, [profile]);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function startPractice(config) {
    setPracticePrefill({ ...config, token: Date.now() });
    scrollTo('practice');
  }

  function askStyle(style) {
    chatRef.current?.ask(
      `Teach me ${style.name} step by step for a beginner. Include posture, breathing, how long to hold the poses, benefits and common mistakes.`,
      style.id,
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <StylesSection
          onAsk={askStyle}
          onPractice={(style) =>
            startPractice({
              styleId: style.id,
              level: profile?.level || 'Beginner',
              goal: profile?.goal || 'General Fitness',
              minutes: profile?.minutes || 10,
              autoStart: true,
            })
          }
        />
        <ChatSection ref={chatRef} selectedStyleId={selectedStyleId} setSelectedStyleId={setSelectedStyleId} profile={profile} />
        <GuidedPractice
          prefill={practicePrefill}
          onPrefillUsed={() => setPracticePrefill(null)}
          profile={profile}
          selectedStyleId={selectedStyleId}
          setSelectedStyleId={setSelectedStyleId}
        />
        <PoseTimer onAsk={(question) => chatRef.current?.ask(question)} />
        <Personalization
          profile={profile}
          setProfile={setProfile}
          onStartPractice={startPractice}
          onAsk={(question) => chatRef.current?.ask(question)}
        />
        <About />
      </main>
      <Footer />
    </div>
  );
}
