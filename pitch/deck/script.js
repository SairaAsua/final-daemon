(() => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const total = slides.length;
  const counter = document.getElementById('current');
  const totalEl = document.getElementById('total');

  totalEl.textContent = String(total).padStart(2, '0');

  const initial = parseInt(location.hash.replace('#', ''), 10);
  let current = (initial >= 1 && initial <= total) ? initial : 1;

  function render() {
    slides.forEach((s, i) => s.classList.toggle('active', i + 1 === current));
    counter.textContent = String(current).padStart(2, '0');
    history.replaceState(null, '', '#' + current);
  }

  function go(dir) {
    const next = current + dir;
    if (next < 1 || next > total) return;
    current = next;
    render();
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      go(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      go(-1);
    } else if (e.key === 'Home') {
      current = 1; render();
    } else if (e.key === 'End') {
      current = total; render();
    } else if (e.key.toLowerCase() === 'f') {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;
    const x = e.clientX;
    if (x > window.innerWidth / 2) go(1);
    else go(-1);
  });

  let touchStart = null;
  document.addEventListener('touchstart', (e) => { touchStart = e.touches[0].clientX; });
  document.addEventListener('touchend', (e) => {
    if (touchStart === null) return;
    const dx = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchStart = null;
  });

  window.addEventListener('hashchange', () => {
    const n = parseInt(location.hash.replace('#', ''), 10);
    if (n >= 1 && n <= total) { current = n; render(); }
  });

  render();
})();
