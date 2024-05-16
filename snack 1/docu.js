const primoNumero = parseFloat(prompt('Primo Numero'));
const secondoNumero = parseFloat(prompt('Secondo Numero'));

if (primoNumero > secondoNumero) {
    console.log('Il primo numero è più grande, il numero è:', primoNumero);
} 
else if (primoNumero < secondoNumero) {
    console.log('Il secondo numero è più grande, il numero è:', secondoNumero);
}
 else if (primoNumero === secondoNumero) {
    console.log('I numeri sono uguali')
};
