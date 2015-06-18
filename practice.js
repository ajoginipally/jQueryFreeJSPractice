
//practicing using objects, object-oriented style
function Hotel(name, price, rooms) {
    this.name = name;
    this.price = price;
    this.rooms = rooms;
}

var quayHotel = new Hotel("quay", 100, 50);
var parkHotel = new Hotel("park", 200, 100);

console.log(quayHotel.name);
console.log(parkHotel.price);

//simple code generator that takes in a string. Takes every consanant in the string and duplicates and puts an o in the middle. For example tom becomes totomom.
function codeGen(word) {
    var codeWord = word;
    var newWord = "";
    for(i=0; i<word.length; i++) {
        if (codeWord.charAt(i) == "a" || codeWord.charAt(i) == "e" || codeWord.charAt(i) == "i" || codeWord.charAt(i) == "o" || codeWord.charAt(i) == "u") {
            newWord = newWord + codeWord.charAt(i);
        }
        else if (codeWord.charAt(i) == codeWord.charAt(i).toUpperCase) {
            newWord = newWord + codeWord.charAt(i) + "o" + codeWord.charAt(i).toLowerCase;
        }
        else {
            newWord = newWord + codeWord.charAt(i) + "o" + codeWord.charAt(i);
        }
    }
    return newWord;
    }
    
console.log(codeGen("Bill"));

