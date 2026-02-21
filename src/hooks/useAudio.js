import { useCallback, useRef } from 'react';

export function useAudio() {
  const synthRef = useRef(null);

  const speak = useCallback((text, lang = 'id-ID') => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9; // Slightly slower for children
      utterance.pitch = 1.1; // Slightly higher pitch

      // Pick voice that matches requested language first
      const voices = window.speechSynthesis.getVoices();
      const requestedLang = lang.toLowerCase();
      const requestedBase = requestedLang.split('-')[0];

      const exactVoice = voices.find((voice) => voice.lang.toLowerCase() === requestedLang);
      const baseVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith(requestedBase));
      const indonesianFallback = voices.find((voice) => voice.lang.toLowerCase().startsWith('id'));
      const selectedVoice = exactVoice || baseVoice || indonesianFallback;

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      window.speechSynthesis.speak(utterance);
      synthRef.current = utterance;
    }
  }, []);

  const playCorrectSound = useCallback(() => {
    // Create a happy sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const playTone = (frequency, startTime, duration) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    };

    const now = audioContext.currentTime;
    // Happy ascending notes
    playTone(523.25, now, 0.15); // C5
    playTone(659.25, now + 0.15, 0.15); // E5
    playTone(783.99, now + 0.3, 0.3); // G5
  }, []);

  const playWrongSound = useCallback(() => {
    // Create a gentle "try again" sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
    oscillator.frequency.linearRampToValueAtTime(200, audioContext.currentTime + 0.3);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);
  }, []);

  const playCelebrationSound = useCallback(() => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const playTone = (frequency, startTime, duration) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    };

    const now = audioContext.currentTime;
    // Celebration fanfare
    playTone(523.25, now, 0.2); // C5
    playTone(659.25, now + 0.2, 0.2); // E5
    playTone(783.99, now + 0.4, 0.2); // G5
    playTone(1046.50, now + 0.6, 0.4); // C6
  }, []);

  const stopSpeaking = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, []);

  return {
    speak,
    playCorrectSound,
    playWrongSound,
    playCelebrationSound,
    stopSpeaking,
  };
}
