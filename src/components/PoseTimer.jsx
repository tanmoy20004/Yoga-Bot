import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Bot,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Minus,
  Pause,
  Play,
  Plus,
  RotateCcw,
  Timer,
  Wind,
} from 'lucide-react';
import { getPose, getPoseHoldSeconds, posePhotos } from '../../shared/yogaKnowledge.js';

const quickPoseIds = [
  'tadasana',
  'vrksasana',
  'virabhadrasana-2',
  'bhujangasana',
  'uttanasana',
  'balasana',
  'sukhasana',
  'savasana',
];

function formatTime(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

export default function PoseTimer({ onAsk }) {
  const [selectedId, setSelectedId] = useState('vrksasana');
  const [seconds, setSeconds] = useState(() => getPoseHoldSeconds(getPose('vrksasana')));
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  const pose = getPose(selectedId);
  const photo = posePhotos[selectedId] || '/images/yoga/hatha.jpg';
  const initialSeconds = getPoseHoldSeconds(pose);

  function selectPose(id) {
    const next = getPose(id);
    setSelectedId(id);
    setSeconds(getPoseHoldSeconds(next));
    setRunning(false);
    setDone(false);
  }

  function stepPose(direction) {
    const currentIndex = quickPoseIds.indexOf(selectedId);
    const nextIndex = (currentIndex + direction + quickPoseIds.length) % quickPoseIds.length;
    selectPose(quickPoseIds[nextIndex]);
  }

  useEffect(() => {
    if (!running || seconds <= 0) return undefined;
    const timer = setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => clearInterval(timer);
  }, [running, seconds > 0]);

  useEffect(() => {
    if (seconds === 0 && running) {
      setRunning(false);
      setDone(true);
    }
  }, [seconds, running]);

  const progress = initialSeconds > 0 ? seconds / initialSeconds : 0;

  return (
    <section id="pose-timer" className="scroll-mt-24 bg-white/70 py-16 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label"><Timer size={13} /> Practise at your own pace</span>
            <h2 className="section-title">Pose timer for specific yoga poses</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/60">
              Pick a pose and follow its own suggested hold time. Breathe slowly, watch the timer and
              stop at any moment if something feels uncomfortable.
            </p>
          </div>
          <span className="pill w-fit"><Clock size={13} /> Suggested holds from our knowledge base</span>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickPoseIds.map((id) => {
            const item = getPose(id);
            const selected = selectedId === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => selectPose(id)}
                className={`group overflow-hidden rounded-2xl border text-left transition-all hover:-translate-y-1 ${selected ? 'border-forest-500 shadow-soft ring-2 ring-forest-100' : 'border-forest-100 bg-white hover:border-forest-300'}`}
              >
                <div className="relative h-32 overflow-hidden">
                  <img src={posePhotos[id]} alt={`${item.name} pose`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-xs font-bold text-white">{item.name}</span>
                  {selected && (
                    <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-forest-600 text-white">
                      <Check size={14} />
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between px-3 py-2.5">
                  <span className="text-[10px] font-semibold text-ink/45">{item.level}</span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-forest-600"><Clock size={11} /> {getPoseHoldSeconds(item)}s</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="card mt-7 overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[320px_minmax(0,1fr)]">
            <div className="relative h-60 lg:h-full">
              <img src={photo} alt={`${pose.name} pose`} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/80">{pose.sanskrit}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold">{pose.name}</h3>
                <p className="mt-1 text-[11px] text-white/80">{pose.category} · {pose.level}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-display text-lg font-semibold text-ink">Your timer</h4>
                  <p className="mt-1 text-[12px] text-ink/55">Suggested hold: {pose.hold}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" className="btn-icon" onClick={() => stepPose(-1)} aria-label="Previous pose"><ChevronLeft size={17} /></button>
                  <button type="button" className="btn-icon" onClick={() => stepPose(1)} aria-label="Next pose"><ChevronRight size={17} /></button>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="relative h-36 w-36 shrink-0">
                  <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#DDEEE2" strokeWidth="9" />
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke={done ? '#8FBE9F' : '#3E8E63'}
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 52}
                      strokeDashoffset={2 * Math.PI * 52 * (1 - progress)}
                      className="transition-all duration-1000 ease-linear"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Timer size={15} className="text-forest-500" />
                    <span className="font-display text-3xl font-semibold text-forest-800">{formatTime(seconds)}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-ink/40">{done ? 'complete' : running ? 'holding' : 'ready'}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="rounded-2xl border border-forest-100 bg-forest-50/60 p-4">
                    <p className="flex items-center gap-2 text-xs font-bold text-forest-700"><Wind size={15} /> Breathing during this pose</p>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-ink/70">{pose.breath}</p>
                  </div>
                  {done && (
                    <p className="mt-3 rounded-2xl bg-emerald-50 px-4 py-3 text-xs font-semibold text-emerald-800">
                      Well done. Come out slowly and take one gentle breath before the next pose.
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button type="button" className="btn-primary !px-4 !py-2.5" onClick={() => setRunning((value) => !value)} disabled={done}>
                      {running ? <Pause size={15} /> : <Play size={15} />} {running ? 'Pause' : 'Start timer'}
                    </button>
                    <button type="button" className="btn-soft !px-4 !py-2.5" onClick={() => { setSeconds(initialSeconds); setRunning(false); setDone(false); }}>
                      <RotateCcw size={15} /> Reset
                    </button>
                    <button type="button" className="btn-soft !px-3 !py-2.5" onClick={() => setSeconds((value) => Math.max(15, value - 15))} aria-label="Reduce timer by 15 seconds">
                      <Minus size={14} /> 15s
                    </button>
                    <button type="button" className="btn-soft !px-3 !py-2.5" onClick={() => setSeconds((value) => Math.min(600, value + 15))} aria-label="Add 15 seconds">
                      <Plus size={14} /> 15s
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-forest-100 pt-5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-forest-600">How to do {pose.name}</h5>
                <ol className="mt-3 grid gap-2 sm:grid-cols-2">
                  {pose.steps.map((step, index) => (
                    <li key={index} className="flex gap-2 text-[12px] leading-relaxed text-ink/70">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-50 text-[10px] font-bold text-forest-600">{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <button
                  type="button"
                  onClick={() => onAsk(`Teach me ${pose.name} (${pose.sanskrit}) step by step, including posture, breathing, how long to hold it, benefits and common mistakes.`)}
                  className="mt-5 flex items-center gap-2 text-xs font-bold text-forest-600 hover:gap-3"
                >
                  <Bot size={15} /> Ask YogaMate AI about this pose <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-[11px] leading-relaxed text-ink/45">
          Timers are general guidance only. Skip a pose or stop the timer if you feel pain, dizziness or discomfort.
        </p>
      </div>
    </section>
  );
}
