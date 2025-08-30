const troops = {
  Pikemen: {
    T1: { name: "Pikemen", food: 40, wood: 40, stone: 0, gold: 0, time: 15, might: 1},
    T2: { name: "Lancers", food: 65, wood: 65, stone: 50, gold: 0, time: 30, might: 2},
    T3: { name: "Toughened Lancer", food: 115, wood: 115, stone: 85, gold: 15, time: 45, might: 4},
    T4: { name: "Armored Lancers", food: 165, wood: 165, stone: 125, gold: 20, time: 70, might: 5},
    T5: { name: "Heavy Lancers", food: 300, wood: 300, stone: 150, gold: 50, time: 56, might: 7},
    T6: { name: "Elite Lancer", food: 400, wood: 400, stone: 300, gold: 150, time: 68, might: 9},
    T7: { name: "Blessed Lancers", food: 600, wood: 600, stone: 450, gold: 500, time: 106, might: 13}
  },
  Infantry: {
    T1: { name: "Infantry", food: 40, wood: 40, stone: 0, gold: 0, time: 15, might: 1, image: "pikemen_t1.jpg" },
    T2: { name: "Axe Fighter", food: 65, wood: 65, stone: 50, gold: 0, time: 30, might: 2, image: "pikemen_t2.png" },
    T3: { name: "Axe Brawler", food: 115, wood: 115, stone: 85, gold: 15, time: 45, might: 4, image: "pikemen_t3.png" },
    T4: { name: "Axe Warrior", food: 165, wood: 165, stone: 125, gold: 20, time: 70, might: 5, image: "pikemen_t4.png" },
    T5: { name: "Berserker", food: 300, wood: 300, stone: 150, gold: 50, time: 56, might: 7, image: "pikemen_t5.png" },
    T6: { name: "Bruiser", food: 400, wood: 400, stone: 300, gold: 150, time: 68, might: 9, image: "pikemen_t6.png" },
    T7: { name: "Warring Guard", food: 600, wood: 600, stone: 450, gold: 500, time: 106, might: 13, image: "pikemen_t7.png" }
  },
    Archer: {
    T1: { name: "Bowman", food: 40, wood: 40, stone: 0, gold: 0, time: 15, might: 1, image: "pikemen_t1.jpg" },
    T2: { name: "Bow Ranger", food: 65, wood: 65, stone: 50, gold: 0, time: 30, might: 2, image: "pikemen_t2.png" },
    T3: { name: "Bow Slinger", food: 115, wood: 115, stone: 85, gold: 15, time: 45, might: 4, image: "pikemen_t3.png" },
    T4: { name: "Bow Hunter", food: 165, wood: 165, stone: 125, gold: 20, time: 70, might: 5, image: "pikemen_t4.png" },
    T5: { name: "Marksman", food: 300, wood: 300, stone: 150, gold: 50, time: 56, might: 7, image: "pikemen_t5.png" },
    T6: { name: "Sniper", food: 400, wood: 400, stone: 300, gold: 150, time: 68, might: 9, image: "pikemen_t6.png" },
    T7: { name: "Glory Sharpshooter", food: 600, wood: 600, stone: 450, gold: 500, time: 106, might: 13, image: "pikemen_t7.png" }
  },
    Porter: {
    T1: { name: "Grunts", food: 40, wood: 40, stone: 0, gold: 0, time: 15, might: 1, image: "pikemen_t1.jpg" },
    T2: { name: "Porters", food: 65, wood: 65, stone: 50, gold: 0, time: 30, might: 2, image: "pikemen_t2.png" },
    T3: { name: "Hauler", food: 115, wood: 115, stone: 85, gold: 15, time: 45, might: 4, image: "pikemen_t3.png" },
    T4: { name: "Scavengers", food: 165, wood: 165, stone: 125, gold: 20, time: 70, might: 5, image: "pikemen_t4.png" },
    T5: { name: "Marauders", food: 300, wood: 300, stone: 150, gold: 50, time: 56, might: 7, image: "pikemen_t5.png" },
    T6: { name: "Raider", food: 400, wood: 400, stone: 300, gold: 150, time: 68, might: 9, image: "pikemen_t6.png" },
    T7: { name: "Pillager", food: 600, wood: 600, stone: 450, gold: 500, time: 106, might: 13, image: "pikemen_t7.png" }
  }
};


document.addEventListener("DOMContentLoaded", () => {

    //-- Validation and modal --\\
    const form = document.getElementById("contactForm");
    const emailInput = document.getElementById("email");
    const modal = new bootstrap.Modal(document.getElementById('successModal'));

    form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");
        return;
    } else {
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
    }

    // Show modal
    modal.show();

    // Form sent after modal show
    setTimeout(() => {
        form.action = "https://formsubmit.co/martinfmoran81@gmail.com"; // Your email
        form.submit();
    }, 1500);
});

    //-- Hover Btn --\\
    const btn = document.getElementById("myBtn");

    function hoverBtn(){
    if (btn) {
        btn.addEventListener("mouseenter", () => {
            btn.classList.remove("btn-danger");
            btn.classList.add("btn-outline-danger");
        });

        btn.addEventListener("mouseleave", () => {
            btn.classList.remove("btn-outline-danger");
            btn.classList.add("btn-danger");
        });
    };
    }

    //-- DOM -->
    const modeSelect = document.getElementById("mode");
    const typeSelect = document.getElementById("type");
    const inputContainer = document.getElementById("inputContainer");
    const troopTableBody = document.querySelector("#troop-table tbody");

    // ---- TIME FORMAT ---->
    function formatTime(seconds) {
        const days = Math.floor(seconds / 86400);
        seconds %= 86400;
        const hours = Math.floor(seconds / 3600);
        seconds %= 3600;
        const minutes = Math.floor(seconds / 60);
        seconds %= 60;

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // ---- INPUT ADDITION ---->
    function updateInputField(){
        if (modeSelect.value === "quantity"){
            inputContainer.innerHTML = `
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" min="0" />`;
            const quantityInput = document.getElementById("quantity");
            quantityInput.addEventListener("input", calculate);

        } else{
            inputContainer.innerHTML = `
                <label for="might">Might:</label>
                <input type="number" id="might" min="0" />`;
            const mightInput = document.getElementById("might");
            mightInput.addEventListener("input", calculate);
        }
    }

    modeSelect.addEventListener("change", updateInputField);
    updateInputField();

    // ---- CALCULATOR ---->
    function calculate() {
        const type = typeSelect.value;   
        let totalQuantity = 0;

        if (!troops[type]) {
            // si no hay datos, solo reseteamos los valores numéricos y salimos
            troopTableBody.querySelectorAll('tr').forEach(r => {
                ['.food','.wood','.stone','.gold','.might','.time'].forEach(sel => {
                    const c = r.querySelector(sel);
                    if (c) c.textContent = (sel === '.time' ? '0s' : '0');
                });
            });
            return;
        }

        if (modeSelect.value === "quantity") {

            const quantityInput = document.getElementById("quantity");
            totalQuantity = parseInt(quantityInput.value) || 0;

            } else {
            const mightInput = document.getElementById("might");
            const desiredMight = parseInt(mightInput.value || 0);

            const basePower = troops[type]["T1"].might; // ejemplo: T1 como referencia
            totalQuantity = Math.ceil(desiredMight / basePower);
            }
        
        if (isNaN(totalQuantity) || totalQuantity < 1) {
            // limpiar números y salir
            troopTableBody.querySelectorAll('tr').forEach(r => {
                ['.food','.wood','.stone','.gold','.might','.time'].forEach(sel => {
                    const c = r.querySelector(sel);
                    if (c) c.textContent = (sel === '.time' ? '0s' : '0');
                });
            });
            return;
        }

        // Limpiar todas las celdas numéricas de la tabla (mantener imagen, level, name)
        troopTableBody.querySelectorAll('tr').forEach(row => {
            ['.food','.wood','.stone','.gold','.might','.time'].forEach(sel => {
            const cell = row.querySelector(sel);
                if (cell) cell.textContent = (sel === '.time' ? '0s' : '0');
            });
        });

        troopTableBody.querySelectorAll('tr').forEach(row => {
            const tier = row.dataset.tier;  // "T1", "T2", etc.
            const troopData = troops[type][tier];

            if (troopData) {     
                row.querySelector('.food').textContent  = (troopData.food  * totalQuantity).toLocaleString('en-US');
                row.querySelector('.wood').textContent  = (troopData.wood  * totalQuantity).toLocaleString('en-US');
                row.querySelector('.stone').textContent = (troopData.stone * totalQuantity).toLocaleString('en-US');
                row.querySelector('.gold').textContent  = (troopData.gold  * totalQuantity).toLocaleString('en-US');
                row.querySelector('.might').textContent = ((troopData.might || 0) * totalQuantity).toLocaleString('en-US'); // usar .might
                row.querySelector('.time').textContent  = formatTime((troopData.time || 0) * totalQuantity);
            }
            });     
    }

    typeSelect.addEventListener("change", calculate);
    modeSelect.addEventListener("change", calculate);
   
    hoverBtn();
    
    calculate(); // Start with default values
});








