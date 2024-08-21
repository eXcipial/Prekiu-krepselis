export function shoppingList(list) {
    if (list.length === 0) {
        return "Šiuo metu, jūsų prekių krepšelis yra tuščias.";
    }

    
    const maxNameLength = Math.max(...list.map(item => item.name.length), "Pavadinimas".length);
    const maxAmountLength = Math.max(...list.map(item => `${item.amount} vnt`.length), "Kiekis".length);
    const maxUnitPriceLength = Math.max(...list.map(item => `${(item.unitPrice / 100).toFixed(2)} Eur`.length), "Vieneto kaina".length);
    const maxTotalPriceLength = Math.max(...list.map(item => `${(item.amount * item.unitPrice / 100).toFixed(2)} Eur`.length), "Viso mokėti".length);

    
    const headerLine = `    Pavadinimas${' '.repeat(maxNameLength - "Pavadinimas".length + 1)}| Kiekis${' '.repeat(maxAmountLength - "Kiekis".length + 1)}| Vieneto kaina${' '.repeat(maxUnitPriceLength - "Vieneto kaina".length + 1)}| Viso mokėti${' '.repeat(maxTotalPriceLength - "Viso mokėti".length)}`;
    const separator = '-'.repeat(headerLine.length);

    let output = `Jūsų prekių krepšelyje yra ${list.length} prekė${list.length > 1 ? 's' : ''}:\n`;
    output += `${separator}\n`;
    output += `${headerLine}\n`;
    output += `${separator}\n`;

    list.forEach((item, index) => {
        const itemIndex = (index + 1).toString().padStart(2, ' ');
        const name = item.name.padEnd(maxNameLength, ' ');
        const amount = `${item.amount} vnt`.padEnd(maxAmountLength, ' ');
        const unitPrice = `${(item.unitPrice / 100).toFixed(2)} Eur`.padEnd(maxUnitPriceLength, ' ');
        const totalPrice = `${(item.amount * item.unitPrice / 100).toFixed(2)} Eur`.padEnd(maxTotalPriceLength, ' ');

        
        output += `${itemIndex}. ${name} | ${amount} | ${unitPrice} | ${totalPrice}\n`;
    });

    output += `${separator}`;

    return output;
}













