//for (var i = 1; i <= 3; i++) {
//    console.log(i)
//}
//console.log('Go')

//--------outro exemplo------------//

//for (var i = 10; i > 0; i--) {
//    console.log(i)
//}
//console.log('Happy New Year!!!')

//----- aqui eu decidi colocar um temporizador, achei o print stantaneo muito feio-----//////

let i = 10;

const timer = setInterval(() => {
    console.log(i);
    i--;

    if (i === 0) {
        clearInterval(timer);
        console.log('Happy New Year!!!');
    }
}, 1000); // 1000 = cada segundo aqui no caso e 1 mas posso mudar para 2000, 3000 etc