//# Password Generator
// - Chiedere all'utente il suo nome:
//    - dichiarare una variabile
let firstName;
//    - assegnare alla variabile il valore costituito da un prompt
firstName = prompt('Ciao, qual è il tuo nome?');
console.log(firstName);
//- Chiedere all'utente il suo cognome:
//    - dichiarare una variabile
let lastName;
//    - assegnare alla variabile il valore costituito da un prompt
lastName = prompt('Qual è il tuo Cognome?');
console.log(lastName);
//- Chiedere all'utente il suo colore preferito:
//    - dichiarare una variabile
let favouriteColor;
//    -assegnare alla variabile il valore costituito da un prompt
favouriteColor = prompt('Qual è il tuo colore preferito?');
console.log(favouriteColor);
//- Genero randomicamente il numero da concatenare nella password
let randomNumber = Math.floor(Math.random() * (22 + 1));

//- Concatenare il nome dell'utente, al cognome e al colore
//    - dichiarare una variabile che contiene la prima parte del messaggio
let firstPartOfPassword = firstName;
let secondPartOfPassword = lastName;
let thirdPartOfPassword = favouriteColor;
let fourthPartOfPassword = randomNumber;
//    - dichiarare una variabile "password" dove concatenare nome, cognome, colore
let password = firstPartOfPassword + secondPartOfPassword + thirdPartOfPassword + fourthPartOfPassword;
console.log(password);
//- Stampare un messaggio dentro h1
//    - inserire nell'html un tag h1 con id="password"
//    - recuperare con js l'elemento del dom con id="password"
const passwordDomElement = document.getElementById('password');
//    - modificare l'innerHTML dell'h1 con il valore della variabile message 
passwordDomElement.innerHTML = password;