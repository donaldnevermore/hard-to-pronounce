const data = {
    "Kobe": "kou-bee",
    "Neymar": "nei-mar",
    "Euler": "oi-liir",
    "Gauss": "gaus",
    "Vinci": "vin-chee",
    "international": ".in-tiir-NAASH-iin-iil",
};

const c = document.getElementById("content");

for (const k in data) {
    if (Object.hasOwn(data, k)) {
        const d = document.createElement("div");
        d.innerHTML = `<div class="left">${k}</div><div class="right">/${data[k]}/</div>`;
        c.appendChild(d);
    }
}
