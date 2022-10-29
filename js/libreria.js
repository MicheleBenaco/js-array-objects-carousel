// GENERA NUMERO RANDOM
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// RITORNA TRUE SE è UN NUMERO E' PARI ALTRIMENTI FALSE
function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

// CREA DIV ALERT DI NOTIFICA ERRORE E STAMPA UN MESSAGGIO DI ERRORE DINAMICO
function notificationError(msgError){
    const alerta = document.createElement('div');
    alerta.className='alert alert-danger';
    alerta.innerHTML = msgError;
    return alerta;
}

// RIMUOVE IL PRIMO DIV CON CLASSE ALERT CHE TROVA
function removeFirstNotification(){
    const alertToRemove = document.querySelector('.alert');
    console.log(alertToRemove);
   if(alertToRemove) alertToRemove.remove();
}



