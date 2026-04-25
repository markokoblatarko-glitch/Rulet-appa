
function obradi() {

    let input = document.getElementById("inputNumbers").value;

    let brojevi = input.split(",")
        .map(b => parseInt(b.trim()))
        .filter(b => !isNaN(b) && b >= 0 && b <= 36)
        .slice(0, 45);

    // 🔴 TVOJIH 7 KOMBINACIJA
    let kombinacije = {
         "Kombinacija 1": [0,32,15,19,4],
        "Kombinacija 2": [21,2,25,17,34],
        "Kombinacija 3": [6,27,13,36,11],
        "Kombinacija 4": [30,8,23,10,5],
        "Kombinacija 5": [24,16,33,1,20],
        "Kombinacija 6": [14,31,9,22,18],
        "Kombinacija 7": [29,7,28,12,35]
    };

    let rezultat = {};

    for (let key in kombinacije) {
        rezultat[key] = {
            count: 0,
            pogodci: [],
            lastIndex: -1
        };
    }

    // 🔄 obrada
    brojevi.forEach((broj, index) => {

        for (let key in kombinacije) {

            if (kombinacije[key].includes(broj)) {

                rezultat[key].count++;
                rezultat[key].pogodci.push(broj);

                // pamti poslednji put kad je pogodjena
                rezultat[key].lastIndex = index;
            }
        }

    });

    // 📊 prikaz
    let div = document.getElementById("rezultat");
    div.innerHTML = "";

    for (let key in rezultat) {

        let data = rezultat[key];

        let distance;

        if (data.lastIndex === -1) {
            distance = "nije upala";
        } else {
            distance = (brojevi.length - 1) - data.lastIndex;
        }

        div.innerHTML += `
            <div class="komb">
                <h3>${key}</h3>
                <p>Pogodaka: ${data.count}</p>
                <p>Brojevi: ${data.pogodci.join(", ") || "-"}</p>
                <p>Zadnji put pre: ${distance} kruga</p>
            </div>
        `;
    }
}