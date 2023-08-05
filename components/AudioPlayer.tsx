// components/AudioPlayer.tsx
import React, { useRef } from 'react';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleButtonClick = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <audio ref={audioRef} src="/music.mp3" />
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
        onClick={handleButtonClick}
      >
        {audioRef.current?.paused ? 'Play Music' : 'Pause Music'}
      </button>
    </div>
  );
};

export default AudioPlayer;
