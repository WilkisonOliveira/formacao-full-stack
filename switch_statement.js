//A diferenca entre o if e else e que esse compara a mesma variável com vários valores

var place = 'first';

switch (place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
}