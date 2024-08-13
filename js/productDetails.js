export function productDetails(list, id) {
    // Surandu produktą pagal jo ID iš sąrašo
    const product = list.find(item => item.id === id);

    // Jei produktas nerastas, grąžina pranešimą
    if (!product) {
        return `Prekė, su ID: ${id} neegzistuoja.`;
    }

    // Jei produktas rastas, suformuoja išsamią produkto informaciją
    return `
------------------------------
Prekės informacija
------------------------------
ID            | ${product.id}
Pavadinimas   | ${product.name}
Kiekis        | ${product.amount} vnt
Vieneto kaina | ${(product.unitPrice / 100).toFixed(2)} Eur
Viso mokėti   | ${(product.amount * product.unitPrice / 100).toFixed(2)} Eur
------------------------------
    `;
}
