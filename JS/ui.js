export function initHoverBtn(btnId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener("mouseenter", () => {
        btn.classList.replace("btn-danger", "btn-outline-danger");
    });
    btn.addEventListener("mouseleave", () => {
        btn.classList.replace("btn-outline-danger", "btn-danger");
    });
}

export function updateInputPlaceholder(inputEl, mode) {
    inputEl.placeholder = mode === "quantity" ? "type in total quantity" : "type in total might";
    inputEl.value = "0";
}