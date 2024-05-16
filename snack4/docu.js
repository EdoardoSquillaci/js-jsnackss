

const invitati = ['giorgio' , 'luca' , 'giovanni' , 'marco'] 

let richiesta = prompt('Inserisci il tuo nome')
 

if(invitati.includes(richiesta)){

    console.log('puoi venire alla festa')

} else {
 console.log('Non puoi entrare alla festa')
}