const cards = [...document.querySelectorAll('.card')];
const filters = [...document.querySelectorAll('[data-filter]')];
const search = document.querySelector('#search');
const orientation = document.querySelector('#orientation');
const count = document.querySelector('#result-count');
let group = 'all';
function applyFilters() {
  const query = search.value.trim().toLowerCase();
  const visibleTemplates = new Set();
  const visiblePreviews = new Set();
  const visiblePrelaunch = new Set();
  let visible = 0;
  for (const card of cards) {
    const show = (group === 'all' || group === card.dataset.group)
      && (orientation.value === 'all' || orientation.value === card.dataset.orientation)
      && card.dataset.search.includes(query);
    card.hidden = !show;
    if (show) {
      visible += 1;
      (card.dataset.group === 'prelaunch' ? visiblePrelaunch : card.dataset.availability === 'coming-soon' ? visiblePreviews : visibleTemplates).add(card.dataset.templateId);
    } else card.querySelector('video').pause();
  }
  const prelaunchCount = visiblePrelaunch.size ? ` · ${visiblePrelaunch.size} ${count.dataset.prelaunchUnit}` : '';
  const previewCount = visiblePreviews.size ? ` · ${visiblePreviews.size} ${count.dataset.previewUnit}` : '';
  count.textContent = `${visibleTemplates.size} ${count.dataset.unit}${prelaunchCount}${previewCount} · ${visible} ${count.dataset.demoUnit}`;
  document.querySelector('#empty').hidden = visible > 0;
}
for (const button of filters) {
  button.addEventListener('click', () => {
    group = button.dataset.filter;
    filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    applyFilters();
  });
}
search.addEventListener('input', applyFilters);
orientation.addEventListener('change', applyFilters);
for (const card of cards) {
  const video = card.querySelector('video');
  const play = card.querySelector('.play');
  play.addEventListener('click', async () => {
    play.disabled = true;
    try {
      await video.play();
    } catch {
      play.disabled = false;
    }
  });
  video.addEventListener('playing', () => card.classList.add('started'));
  video.addEventListener('play', () => cards.forEach(other => {
    if (other !== card) other.querySelector('video').pause();
  }));
}
