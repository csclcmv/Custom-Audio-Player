const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const volumeControl = document.getElementById('volume');
const progressControl = document.getElementById('progress');

playButton.addEventListener('click', () => {
  audio.play();
});

pauseButton.addEventListener('click', () => {
  audio.pause();
});

stopButton.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

volumeControl.addEventListener('input', (event) => {
  audio.volume = event.target.value;
});

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressControl.value = progress || 0;
});

progressControl.addEventListener('input', (event) => {
  const seekTime = (event.target.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});
