import './styles/main.css';
import Calculator from './js/calculator.js';
import ThemeManager from './js/theme-manager.js';

document.addEventListener('DOMContentLoaded', () => {
  const calculator = new Calculator();
  const themeManager = new ThemeManager();

  calculator.init();
  themeManager.init();
});
