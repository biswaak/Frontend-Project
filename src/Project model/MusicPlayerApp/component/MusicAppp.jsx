import { useState, useEffect } from 'react';

export default function MusicAppComponent() {
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // Load audio files from localStorage on mount
    const storedFiles = JSON.parse(localStorage.getItem('audioFiles')) || [];
    setAudioFiles(storedFiles);

    // Load last playing file index and time from localStorage
    const lastIndex = localStorage.getItem('lastFileIndex');
    const lastTime = localStorage.getItem('lastTime');

    if (lastIndex !== null && lastTime !== null) {
      setCurrentFileIndex(parseInt(lastIndex));
      setCurrentTime(parseInt(lastTime));
    }
  }, []);

  function handleFileUpload(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);

    setAudioFiles(prevFiles => [...prevFiles, { url }]);

    // Save files to localStorage
    localStorage.setItem('audioFiles', JSON.stringify(audioFiles));
  }

  function handlePlay(index) {
    setCurrentFileIndex(index);
  }

  function handleTimeUpdate(event) {
    setCurrentTime(event.target.currentTime);
  }

  function handleEnded() {
    // Play next file on end
    setCurrentFileIndex(prevIndex => prevIndex + 1);
    setCurrentTime(0);
  }

  // Save last playing file and time to localStorage
  useEffect(() => {
    localStorage.setItem('lastFileIndex', currentFileIndex);
    localStorage.setItem('lastTime', currentTime);
  }, [currentFileIndex, currentTime]);

  // Render UI...
}
