const incBtn = document.getElementById('incBtn');
const countEl = document.getElementById('count');

if (incBtn && countEl) {
  let count = 0;
  incBtn.addEventListener('click', () => {
    count += 1;
    countEl.textContent = count;
  });
}