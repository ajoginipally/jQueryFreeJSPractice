
//practicing using objects, object-oriented style
function Hotel(name, price, rooms) {
    this.name = name;
    this.price = price;
    this.rooms = rooms;
}

/*literal notation
var Hotel = {
    name: garden,
    price: 300,
    rooms: 200
}; */

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
        else if (codeWord.charAt(i) == codeWord.charAt(i).toUpperCase()) {
            newWord = newWord + codeWord.charAt(i) + "o" + codeWord.charAt(i).toLowerCase();
        }
        else {
            newWord = newWord + codeWord.charAt(i) + "o" + codeWord.charAt(i);
        }
    }
    return newWord;
    }    
console.log(codeGen("Bill"));

//anonymous functions
(function(x) {
    return x*x;
})(5);


//simple recursion of outputting factorial of a number
function factorial(x) {
    if (x==0 || x==1) {
        return 1;
    }
    else {
        return x * factorial(x-1);
    }
}
console.log(factorial(3));


//tried to use recursion to find range of numbers from a start to end point
function range(x, y) {
    var foo = [];
    if (x == y || (x+1) == y) {
        return "";
    }
    else { 
}
}

//putting objects inside of an array
var headphones = [
    {cost:100, style:"in ear", sound:"warm"},
    {cost:200, style:"on ear", sound:"crisp"},
    {cost:300, style:"around ear", sound:"natural"}
    ]
console.log(headphones[1].style);

//putting arrays inside of an object
var HeadPhones = {
    name: "hifi",
    sound: ["warm", "crisp", "natural"],
    cost: 400
};
console.log(HeadPhones.sound[1]);


//testing code
var split = "bill";
var mew = split.split("");
console.log(mew[1]);
var a = "5";
var b = 121;
if (b == parseInt((((b.toString()).split("")).reverse()).join("")) ) {
    console.log("true");}
else {
    console.log("false");}


//Making numbers palindromic
function palindrom(x) {
    var boo = x;
    var foo = x.toString();
    var splitFoo = foo.split("");
    if (parseInt(foo) == parseInt(((splitFoo.reverse()).join("")))) {       //figured out how to reverse
        return foo;
    }
    else {
        var mew = parseInt(foo) + parseInt(((splitFoo.reverse()).join("")));        //have to figure out the recursion
        if (parseInt(foo) == parseInt(((splitFoo.reverse()).join("")))) {
            return mew;
        }
    }
}

console.log(palindrom(24));  //function not executing says undefined

 





