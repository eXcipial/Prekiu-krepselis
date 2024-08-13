export function shoppingList(list) {
    // Jei krepšelis tuščias, grąžina pranešimą
    if (list.length === 0) {
        return "Šiuo metu, jūsų prekių krepšelis yra tuščias.";
    }

    // Pradeda formuoti prekių sąrašo išvedimą ir formuoja daugiskaitą jei daugiau nei 1vnt prideda raidę 's'
    let output = `Jūsų prekių krepšelyje yra ${list.length} prekė${list.length > 1 ? 's' : ''}:\n`;  
    output += "-----------------------------------------------------------\n";
    output += "Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti\n";
    output += "-----------------------------------------------------------\n";

    // Pereina per kiekvieną prekę ir formuoja eilutes
    list.forEach((item, index) => {
        const itemIndex = (index + 1).toString().padEnd(2);   // Išveda prekių numerį sąraše (nukreipiamas į skaičiavimo nuo 1, ne nuo 0).
        const name = item.name.padEnd(10);  // Pavadinimas
        const amount = item.amount.toString().padStart(4);  // Kiekis
        const unitPrice = (item.unitPrice / 100).toFixed(2).padStart(6);  // 2 Skaičiai po kablelio
        const totalPrice = (item.amount * item.unitPrice / 100).toFixed(2).padStart(10); // Apskaičiuoja bendra kainą už visą kiekį (kaina už visą kiekį yra kaina už vienetą padauginta iš kiekio).
        
        output += `${itemIndex}. ${name} | ${amount} vnt | ${unitPrice} Eur | ${totalPrice} Eur\n`;
    });

    // Baigia formuoti prekių sąrašo išvedimą
    output += "-----------------------------------------------------------\n";
    return output;
}
