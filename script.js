// ============================================================
// QA PLAYGROUND — Login Flow Interactivity
// ============================================================

const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const loginSection = document.getElementById('login');
const secureArea = document.getElementById('secure-area');
const welcomeName = document.getElementById('welcome-name');
const logoutBtn = document.getElementById('logout-btn');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value;

    if (user === 'tester' && pass === 'pass123') {
      loginError.classList.remove('show', 'fail');
      loginSection.classList.add('hidden');
      secureArea.classList.remove('hidden');
      welcomeName.textContent = user;
    } else {
      loginError.textContent = 'Invalid username or password.';
      loginError.classList.remove('pass');
      loginError.classList.add('show', 'fail');
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    secureArea.classList.add('hidden');
    loginSection.classList.remove('hidden');
    loginForm.reset();
    loginError.classList.remove('show');
  });
}
