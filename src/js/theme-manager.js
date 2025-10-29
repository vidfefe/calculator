class ThemeManager {
  constructor() {
    this.currentTheme = 'dark';
    this.themeButtons = null;
  }

  init() {
    this.themeButtons = document.querySelectorAll('.theme-btn');
    this.attachEventListeners();
    this.loadSavedTheme();
  }

  attachEventListeners() {
    this.themeButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const theme = e.target.dataset.theme;
        this.setTheme(theme);
      });
    });
  }

  setTheme(theme) {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);

    this.themeButtons.forEach((btn) => {
      btn.classList.remove('active');
      if (btn.dataset.theme === theme) {
        btn.classList.add('active');
      }
    });

    this.currentTheme = theme;
    this.saveTheme();
  }

  saveTheme() {
    try {
      localStorage.setItem('calculator-theme', this.currentTheme);
    } catch (e) {
      console.error('Error saving theme:', e);
    }
  }

  loadSavedTheme() {
    try {
      const savedTheme = localStorage.getItem('calculator-theme');
      if (savedTheme) {
        this.setTheme(savedTheme);
      } else {
        this.setTheme('dark');
      }
    } catch (e) {
      this.setTheme('dark');
    }
  }
}

export default ThemeManager;
