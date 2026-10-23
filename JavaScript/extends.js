class Animal {
    respirar() {
        console.log("Respirando...");
    }
}

class Cachorro extends Animal {
    latir() {
        console.log("Au au!");
    }
}

const meuCachorro = new Cachorro();
meuCachorro.respirar(); // Herdado da classe Animal
meuCachorro.latir();    // Específico da classe Cachorro

//Aqui, "extends" conecta Cachorro a Animal, permitindo que Cachorro use o método respirar() sem precisar reescrevê-lo. Isso torna o código mais organizado, reutilizável e fácil de manter.

//-----------------------------------//
class Bird {
    useWings() {
        console.log("Flying!");
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings();
        console.log("Barely flapping!");
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!");
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

//-----------------------------------------------//

class computador {
    useWings() {
        console.log("ligando...");
    }
}
class Eagle extends computador {
    useWings() {
        super.useWings();
        console.log("Abrindo o windows...");
    }
}
var baldEagle = new Eagle();
var kingComputador = new computador();
baldEagle.useWings();
//o "kingComputador.useWings();" repete toda a acao do "ligando..."
kingComputador.useWings();