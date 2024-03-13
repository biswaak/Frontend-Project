import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ playlist, currentIndex, onEnded }) => {
  const audioRef = useRef(new Audio());
  
  useEffect(() => {
    const audio = audioRef.current;
    audio.src = playlist[currentIndex].url;
    audio.play().catch((error) => console.error('Playback error:', error));
    
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [playlist, currentIndex]);
  
  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('ended', onEnded);
    };
  }, [onEnded]);

  return (
    <div>
      <h2>Now Playing: {playlist[currentIndex].name}</h2>
      <audio ref={audioRef} controls />
    </div>
  );
};

const MusicApp = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const storedPlaylist = JSON.parse(localStorage.getItem('playlist')) || [];
    setPlaylist(storedPlaylist);

    const storedIndex = parseInt(localStorage.getItem('currentIndex'), 10) || 0;
    setCurrentIndex(storedIndex);
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const newPlaylist = [
        ...playlist,
        { name: file.name, url: URL.createObjectURL(file) },
      ];

      setPlaylist(newPlaylist);
      localStorage.setItem('playlist', JSON.stringify(newPlaylist));
    }
  };

  const handleAudioEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    localStorage.setItem('currentIndex', currentIndex + 1);
  };

  return (
    <div>
      <h1>Audio Player</h1>
      <input type="file" accept=".mp3" onChange={handleFileUpload} />
      <AudioPlayer
        playlist={playlist}
        currentIndex={currentIndex}
        onEnded={handleAudioEnd}
      />
      <h3>Playlist</h3>
      <ul>
        {playlist.map((audio, index) => (
          <li key={index}>{audio.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MusicApp;
