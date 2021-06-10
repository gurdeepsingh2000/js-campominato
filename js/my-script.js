/*
Consegna Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

//CREO DELLE ARRAY VUOTE DOVRE ANDRANNO A FINIRE I NUMERI GENERATI DAL COMPUTER E DALL'UTENTE

var userNumber = [];
var computerNumber = [];
var output = document.getElementById('game')

//CREO PRIMA UNA FUNZIONA PER IL COMPUTER CHE GENERASSE DEI NUMERI FRA 1 E 100
function generateNumber(min,max){
   randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
   return randomNum;
}



console.log(randomizeNum);

//CREO UN CICLO while CHE GENERI PER 16 VOLTE UN NUMERO DEL COMPUTER
while (computerNumber.length < 16){      //GENERO PEER 16 VOLTE UN NUMERO (COMPUTER)
    var randomizeNum = generateNumber(1,100) ;        //inserisco la variabile randomizenum e ogni volta che il ciclo while finisce ricomincia di nuovo e genera un nuovo numero da inserire all'interno dell'array    
    if(randomizeNum !== computerNumber.length){     // se il numero randomizzato è diverso dal numero presente nell'array computerNumber,
        computerNumber.push(randomizeNum)           //allora pusha il numero random al suo interno
    }
}


//CREO UN CICLO while CHE CHIEDA PER 84 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO

while(userNumber.length < 84){
    var num_request = parseInt(prompt('Inserisci un numero da 1 a 100'));
    while(num_request < 1 || num_request > 100){
        alert('Hai inserito un numero diverso dalla richiesta');
        var num_request = parseInt(prompt('Inserisci un numero da 1 a 100'));
    }
    if (computerNumber.includes(num_request) || (userNumber.includes(num_request))) {
        output.innerHTML += 'Hai perso'
        break
    }
    userNumber.push(num_request)
}

output.innerHTML += "\n" + 'Hai totalizzato ' + userNumber;




