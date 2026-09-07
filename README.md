# QA Playground — Login Flow

A simple, focused static demo site for practicing browser automation (Selenium, Playwright, Cypress) or manual exploratory testing on authentication flows. No backend, no build step — credentials are validated in the browser.

## Credentials

- **Username:** `tester`
- **Password:** `pass123`

## Interactive Elements & Selectors

- **Form:** `#login-form`
- **Username Input:** `#username` (`data-testid="input-username"`)
- **Password Input:** `#password` (`data-testid="input-password"`)
- **Login Button:** `#login-submit` (`data-testid="btn-login"`)
- **Error Box:** `#login-error` (`data-testid="login-error"`)
- **Secure Area Section:** `#secure-area` (`data-testid="secure-area"`)
- **Welcome Display:** `#welcome-name` (`data-testid="welcome-name"`)
- **Logout Button:** `#logout-btn` (`data-testid="btn-logout"`)

## Run locally

No build step needed. Open `index.html` directly in a browser, or serve it:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```
