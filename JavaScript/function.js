function addTwoNums() {
    var a = 10;
    var b = 20;
    var c = a + b;

    console.log(c);
}

//--------------------------//

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i + 1, arr[i])
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

//-------------------------//

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i * 100, "tomato!")
        } else {
            console.log(i * 100, arr[i])
        }
    }
}