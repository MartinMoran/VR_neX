import { initForm } from './form.js';
import { initHoverBtn } from './ui.js';
import { initCalculator } from './calculator.js';

document.addEventListener("DOMContentLoaded", () => {
    initForm();
    initHoverBtn("myBtn");
    initCalculator();
});