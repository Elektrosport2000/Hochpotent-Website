// Subtle UI sounds via Web Audio API – no external files required
let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioCtx;
  } catch {
    return null;
  }
}

function playTone(freq: number, duration: number, type: OscillatorType = 'sine', volume = 0.06) {
  const ctx = getCtx();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch { /* unsupported */ }
}

export function useSound() {
  return {
    click:   () => playTone(600, 0.06, 'sine', 0.07),
    success: () => { playTone(523, 0.12, 'sine', 0.06); setTimeout(() => playTone(659, 0.15, 'sine', 0.05), 100); },
    hover:   () => playTone(400, 0.04, 'sine', 0.03),
  };
}
