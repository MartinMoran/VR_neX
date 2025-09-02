import { troops } from './data.js';
import { formatTime, setCellValue } from './utils.js';
import { updateInputPlaceholder } from './ui.js';

export function initCalculator() {
    const modeSelect = document.getElementById("mode");
    const typeSelect = document.getElementById("type");
    const inputEl = document.getElementById("input-container");
    const sendBtn = document.querySelector(".btn-calc");
    const troopTableBody = document.querySelector("#troop-table tbody");

    function updateHeader(mode) {
        const headerRow = document.querySelector("#troop-table thead tr");
        const firstRow = troopTableBody.querySelector('tr');
        if (!headerRow || !firstRow) return;

        const mightCellIndex = Array.from(firstRow.cells).findIndex(c => c.classList.contains('might'));
        if (mightCellIndex >= 0 && headerRow.cells[mightCellIndex]) {
            headerRow.cells[mightCellIndex].textContent = mode === 'quantity' ? 'Total might' : 'Total Quantity';
        }
    }

    function updateRow(row, troopData, mode, value) {
        const qty = mode === "quantity" ? value : Math.ceil(value / troopData.might);
        setCellValue(row.querySelector('.food'), troopData.food * qty);
        setCellValue(row.querySelector('.wood'), troopData.wood * qty);
        setCellValue(row.querySelector('.stone'), troopData.stone * qty);
        setCellValue(row.querySelector('.gold'), troopData.gold * qty);
        setCellValue(row.querySelector('.might'), mode === "quantity" ? troopData.might * qty : qty);
        setCellValue(row.querySelector('.time'), formatTime(troopData.time * qty));
    }

    function updateTable(value, mode) {
        const typeData = troops[typeSelect.value];
        if (!typeData) return;

        updateHeader(mode);
        troopTableBody.querySelectorAll('tr').forEach(row => {
            const troopData = typeData[row.dataset.tier];
            if (!troopData) return;
            updateRow(row, troopData, mode, value);
        });
    }

    function calculate() {
        const mode = modeSelect.value;
        const v = parseInt(inputEl?.value, 10) || 0;
        updateTable(v, mode);
    }

    modeSelect.addEventListener("change", () => updateInputPlaceholder(inputEl, modeSelect.value));
    if (sendBtn) sendBtn.addEventListener("click", (e) => { e.preventDefault(); calculate(); });

    updateInputPlaceholder(inputEl, modeSelect.value);
}