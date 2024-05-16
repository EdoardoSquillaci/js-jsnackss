

const invitati = ['giorgio' , 'luca' , 'giovanni' , 'marco'] 

let richiesta = prompt('Inserisci il tuo nome')
 

if(invitati.includes(richiesta)){

    window.alert('puoi venire alla festa')

} else {

 window.alert('Non puoi entrare alla festa')
}