const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Close' : 'Menu';
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll('.footer-main nav').forEach((footerNav) => {
  if (!footerNav.querySelector('a[href="encyclopedia.html"]')) {
    const biographyLink = document.createElement('a');
    biographyLink.href = 'encyclopedia.html';
    biographyLink.textContent = 'Biography';
    footerNav.appendChild(biographyLink);
  }
});

const formatTrackTime = (seconds) => {
  if (!Number.isFinite(seconds)) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainder}`;
};

const audioPlayers = [...document.querySelectorAll('[data-audio-player]')];
audioPlayers.forEach((player) => {
  const audio = player.querySelector('audio');
  const playButton = player.querySelector('[data-play-button]');
  const progress = player.querySelector('[data-progress]');
  const currentTime = player.querySelector('[data-current-time]');
  const duration = player.querySelector('[data-duration]');
  const trackTitle = player.querySelector('h3')?.textContent || 'track';

  if (!audio || !playButton || !progress || !currentTime || !duration) return;

  const setPlayingState = (isPlaying) => {
    player.classList.toggle('is-playing', isPlaying);
    playButton.setAttribute('aria-label', `${isPlaying ? 'Pause' : 'Play'} ${trackTitle}`);
  };

  audio.addEventListener('loadedmetadata', () => {
    duration.textContent = formatTrackTime(audio.duration);
  });

  audio.addEventListener('timeupdate', () => {
    const percentage = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    progress.value = String(percentage);
    progress.style.setProperty('--progress', `${percentage}%`);
    currentTime.textContent = formatTrackTime(audio.currentTime);
  });

  audio.addEventListener('play', () => setPlayingState(true));
  audio.addEventListener('pause', () => setPlayingState(false));
  audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    setPlayingState(false);
  });

  playButton.addEventListener('click', () => {
    if (audio.paused) {
      audioPlayers.forEach((otherPlayer) => {
        const otherAudio = otherPlayer.querySelector('audio');
        if (otherAudio && otherAudio !== audio && !otherAudio.paused) otherAudio.pause();
      });
      audio.play();
    } else {
      audio.pause();
    }
  });

  const seekToProgress = () => {
    if (!audio.duration) return;
    audio.currentTime = (Number(progress.value) / 100) * audio.duration;
  };
  progress.addEventListener('input', seekToProgress);
  progress.addEventListener('change', seekToProgress);
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion) {
  document.querySelectorAll('[data-reveal]').forEach((node) => node.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('[data-reveal]').forEach((node) => observer.observe(node));
}
