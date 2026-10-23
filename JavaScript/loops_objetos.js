function testBracketsDynamicAccess() {
    var dynamicKey;
    if (Math.random() > 0.5) {
        dynamicKey = "speed";
    } else {
        dynamicKey = "color";
    }

    var drone = {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();

//---------------------------------------------//

// Objeto base
const car = {
    engine: true,
    steering: true,
    speed: 'slow'
};

// Criando um objeto que herda de car
const sportsCar = Object.create(car);
sportsCar.speed = 'fast';

console.log('The sports car object:', sportsCar);

// For-in loop: itera sobre propriedades do objeto e do protótipo
console.log('For-in loop:');
for (let prop in sportsCar) {
    console.log(prop);
}

// For-of loop com Object.keys(): itera apenas sobre as propriedades próprias do objeto
console.log('For-of loop:');
for (let prop of Object.keys(sportsCar)) {
    console.log(`${prop}: ${sportsCar[prop]}`);
}