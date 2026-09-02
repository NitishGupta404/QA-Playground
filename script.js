// ============================================================
// QA PLAYGROUND — index page interactivity
// ============================================================

// --- 01 Form submit ---
const demoForm = document.getElementById('demo-form');
if (demoForm) {
  demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const result = document.getElementById('form-result');
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    result.classList.remove('pass', 'fail');
    if (name && emailOk) {
      result.textContent = `Submitted — thanks, ${name}. (This is a demo; nothing was sent.)`;
      result.classList.add('show', 'pass');
    } else {
      result.textContent = 'Fix the highlighted fields: name and a valid email are required.';
      result.classList.add('show', 'fail');
    }
  });
}

// --- 03 Native alert / confirm ---
const btnAlert = document.getElementById('btn-alert');
if (btnAlert) {
  btnAlert.addEventListener('click', () => {
    alert('This is a native browser alert().');
  });
}

const btnConfirm = document.getElementById('btn-confirm');
if (btnConfirm) {
  btnConfirm.addEventListener('click', () => {
    const ok = confirm('This is a native confirm(). Click OK or Cancel.');
    const result = document.getElementById('confirm-result');
    result.classList.remove('pass', 'fail');
    result.textContent = ok ? 'You clicked OK.' : 'You clicked Cancel.';
    result.classList.add('show', ok ? 'pass' : 'fail');
  });
}

// --- 04 Modal ---
const openModalBtn = document.getElementById('open-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalCancel = document.getElementById('modal-cancel');
const modalConfirm = document.getElementById('modal-confirm');

function closeModal() { modalBackdrop.classList.remove('show'); }

if (openModalBtn) {
  openModalBtn.addEventListener('click', () => {
    modalBackdrop.classList.add('show');
    modalConfirm.focus();
  });
  modalCancel.addEventListener('click', closeModal);
  modalConfirm.addEventListener('click', () => {
    closeModal();
  });
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// --- 05 Sortable table ---
const table = document.getElementById('results-table');
if (table) {
  const tbody = document.getElementById('table-body');
  let sortState = {};

  table.querySelectorAll('th[data-sort]').forEach((th) => {
    th.addEventListener('click', () => {
      const key = th.dataset.sort;
      const colIndex = Array.from(th.parentNode.children).indexOf(th);
      const asc = !sortState[key];
      sortState = { [key]: asc };

      table.querySelectorAll('th .arrow').forEach((a) => (a.textContent = ''));
      th.querySelector('.arrow').textContent = asc ? '▲' : '▼';

      const rows = Array.from(tbody.querySelectorAll('tr'));
      rows.sort((a, b) => {
        const aText = a.children[colIndex].textContent.trim();
        const bText = b.children[colIndex].textContent.trim();
        const aNum = parseFloat(aText);
        const bNum = parseFloat(bText);
        const bothNumeric = !isNaN(aNum) && !isNaN(bNum);
        let cmp;
        if (bothNumeric) {
          cmp = aNum - bNum;
        } else {
          cmp = aText.localeCompare(bText);
        }
        return asc ? cmp : -cmp;
      });
      rows.forEach((r) => tbody.appendChild(r));
    });
  });
}

// --- 06 Drag and drop ---
document.querySelectorAll('.drag-item').forEach((item) => {
  item.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', item.id);
  });
});

document.querySelectorAll('.dnd-zone').forEach((zone) => {
  zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    zone.classList.add('over');
  });
  zone.addEventListener('dragleave', () => zone.classList.remove('over'));
  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('over');
    const id = e.dataTransfer.getData('text/plain');
    const el = document.getElementById(id);
    if (el) zone.appendChild(el);
  });
});
