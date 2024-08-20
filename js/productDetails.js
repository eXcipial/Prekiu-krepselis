export function productDetails(list, id) {
    const product = list.find(item => item.id === id);

    if (!product) {
        return `Prekė, su ID: ${id} neegzistuoja.`;
    }

    const totalPrice = (product.amount * product.unitPrice / 100).toFixed(2);

    const longestFieldLength = Math.max(
        'Pavadinimas   | '.length + product.name.length,
        'Kiekis        | '.length + product.amount.toString().length + 4, // " vnt" užima 4 simbolius
        'Vieneto kaina | '.length + (product.unitPrice / 100).toFixed(2).length + 4, // " Eur" užima 4 simbolius
        'Viso mokėti   | '.length + totalPrice.length + 4 // " Eur" užima 4 simbolius
    );

    const line = '-'.repeat(longestFieldLength);

    return `${line}
Prekės informacija
${line}
ID            | ${product.id}
Pavadinimas   | ${product.name}
Kiekis        | ${product.amount} vnt
Vieneto kaina | ${(product.unitPrice / 100).toFixed(2)} Eur
Viso mokėti   | ${totalPrice} Eur
${line}`;
}

