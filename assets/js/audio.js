// Get elements
const audio = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const muteToggleButton = document.getElementById('mute-toggle');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const seekBar = document.getElementById('seek-bar');
const volumeBar = document.getElementById('volume-bar');

// Play/Pause functionality
playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
  }
});

// Mute/Unmute functionality
muteToggleButton.addEventListener('click', () => {
  audio.muted = !audio.muted;
  muteToggleButton.innerHTML = audio.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
});

// Update current time and duration
audio.addEventListener('timeupdate', () => {
  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime % 60);
  const durationMinutes = Math.floor(audio.duration / 60);
  const durationSeconds = Math.floor(audio.duration % 60);

  currentTimeElement.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
  durationElement.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;

  seekBar.value = (audio.currentTime / audio.duration) * 100;
});

// Seek functionality
seekBar.addEventListener('input', () => {
  audio.currentTime = (seekBar.value / 100) * audio.duration;
});

// Volume control
volumeBar.addEventListener('input', () => {
  audio.volume = volumeBar.value;
});

// Set initial states
document.addEventListener('DOMContentLoaded', () => {
  // Set initial play/pause button state
  playPauseButton.innerHTML = audio.paused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';

  // Set initial mute button state
  muteToggleButton.innerHTML = audio.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';

  // Set initial duration display
  if (audio.readyState > 0) {
    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60);
    durationElement.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
  } else {
    audio.addEventListener('loadedmetadata', () => {
      const durationMinutes = Math.floor(audio.duration / 60);
      const durationSeconds = Math.floor(audio.duration % 60);
      durationElement.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
    });
  }
});
