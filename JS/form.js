import { validateEmail } from './utils.js';

export function initForm() {
    const form = document.getElementById("contactForm");
    const emailInput = document.getElementById("email");
    const modal = new bootstrap.Modal(document.getElementById('successModal'));

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!validateEmail(emailInput.value)) {
            emailInput.classList.add("is-invalid");
            emailInput.classList.remove("is-valid");
            return;
        }
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");

        modal.show();

        setTimeout(() => {
            form.action = "https://formsubmit.co/martinfmoran81@gmail.com";
            form.submit();
        }, 1500);
    });
}