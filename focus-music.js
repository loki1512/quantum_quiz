(function () {
  const STORAGE_KEY = 'quantumFocusMusic';
  const VOLUME_KEY = 'quantumFocusVolume';
  const MAX_GAIN = 0.075;
  const DEFAULT_VOLUME = 32;

  let audioCtx = null;
  let master = null;
  let lfo = null;
  let lfoGain = null;
  let nodes = [];
  let isOn = false;
  let wantsMusic = localStorage.getItem(STORAGE_KEY) === 'on';
  let volume = Number(localStorage.getItem(VOLUME_KEY) || DEFAULT_VOLUME);

  const style = document.createElement('style');
  style.textContent = `
    .focus-music {
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 250;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      border: 1px solid rgba(0, 212, 255, .24);
      border-radius: 6px;
      background: rgba(5, 10, 18, .88);
      backdrop-filter: blur(12px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, .28);
      font-family: var(--mono, monospace);
    }
    .focus-music__toggle {
      min-width: 76px;
      border: 1px solid var(--border, #1a3050);
      border-radius: 4px;
      background: transparent;
      color: var(--text-dim, #6a8aaa);
      cursor: pointer;
      font: inherit;
      font-size: 10px;
      letter-spacing: .12em;
      line-height: 1;
      padding: 9px 10px;
      text-transform: uppercase;
      transition: border-color .16s, color .16s, background .16s, box-shadow .16s;
    }
    .focus-music__toggle:hover,
    .focus-music__toggle:focus-visible {
      border-color: rgba(0, 212, 255, .55);
      color: var(--cyan, #00d4ff);
      outline: none;
    }
    .focus-music__toggle[aria-pressed="true"] {
      border-color: var(--cyan, #00d4ff);
      background: rgba(0, 212, 255, .1);
      color: var(--cyan, #00d4ff);
      box-shadow: 0 0 18px rgba(0, 212, 255, .12);
    }
    .focus-music__volume {
      width: 74px;
      accent-color: var(--cyan, #00d4ff);
      cursor: pointer;
    }
    @media (max-width: 620px) {
      .focus-music {
        right: 12px;
        bottom: 12px;
        padding: 6px;
      }
      .focus-music__toggle {
        min-width: 68px;
        padding: 8px;
      }
      .focus-music__volume {
        width: 58px;
      }
    }
  `;
  document.head.appendChild(style);

  const widget = document.createElement('div');
  widget.className = 'focus-music';
  widget.innerHTML = `
    <button class="focus-music__toggle" type="button" aria-pressed="false" title="Toggle quiet focus music">Focus Off</button>
    <input class="focus-music__volume" type="range" min="0" max="100" value="${volume}" aria-label="Focus music volume" title="Focus music volume">
  `;
  document.body.appendChild(widget);

  const toggle = widget.querySelector('.focus-music__toggle');
  const slider = widget.querySelector('.focus-music__volume');

  function setLabel() {
    toggle.setAttribute('aria-pressed', String(isOn));
    toggle.textContent = isOn ? 'Focus On' : 'Focus Off';
  }

  function currentGain() {
    return Math.max(0, Math.min(100, volume)) / 100 * MAX_GAIN;
  }

  function createAmbientBed() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    master = audioCtx.createGain();
    master.gain.value = 0;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 760;
    filter.Q.value = 0.55;

    lfo = audioCtx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.035;
    lfoGain = audioCtx.createGain();
    lfoGain.gain.value = MAX_GAIN * 0.22;
    lfo.connect(lfoGain).connect(master.gain);

    const tones = [
      { freq: 146.83, gain: 0.34 },
      { freq: 220.00, gain: 0.2 },
      { freq: 329.63, gain: 0.12 }
    ];

    tones.forEach((tone) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.value = tone.freq;
      osc.detune.value = Math.random() * 8 - 4;
      gain.gain.value = tone.gain;
      osc.connect(gain).connect(filter);
      osc.start();
      nodes.push(osc, gain);
    });

    filter.connect(master).connect(audioCtx.destination);
    lfo.start();
    nodes.push(filter, master, lfo, lfoGain);
  }

  async function startMusic() {
    if (!audioCtx) createAmbientBed();
    if (audioCtx.state === 'suspended') await audioCtx.resume();
    master.gain.cancelScheduledValues(audioCtx.currentTime);
    master.gain.setTargetAtTime(currentGain(), audioCtx.currentTime, 0.7);
    isOn = true;
    wantsMusic = true;
    localStorage.setItem(STORAGE_KEY, 'on');
    setLabel();
  }

  function stopMusic(savePreference = true) {
    if (audioCtx && master) {
      master.gain.cancelScheduledValues(audioCtx.currentTime);
      master.gain.setTargetAtTime(0, audioCtx.currentTime, 0.18);
    }
    isOn = false;
    wantsMusic = false;
    if (savePreference) localStorage.setItem(STORAGE_KEY, 'off');
    setLabel();
  }

  toggle.addEventListener('click', () => {
    if (isOn) stopMusic();
    else startMusic();
  });

  slider.addEventListener('input', () => {
    volume = Number(slider.value);
    localStorage.setItem(VOLUME_KEY, String(volume));
    if (isOn && master) {
      master.gain.setTargetAtTime(currentGain(), audioCtx.currentTime, 0.12);
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (!audioCtx || !master) return;
    if (document.hidden) master.gain.setTargetAtTime(0, audioCtx.currentTime, 0.25);
    else if (isOn) master.gain.setTargetAtTime(currentGain(), audioCtx.currentTime, 0.5);
  });

  document.addEventListener('pointerdown', () => {
    if (wantsMusic && !isOn) startMusic();
  }, { once: true });

  setLabel();
})();
