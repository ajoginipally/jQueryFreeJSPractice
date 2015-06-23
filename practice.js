
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

var split = "bill";
var mew = split.split("");
console.log(mew[1]);

//Making numbers palindromic
var answer;
function palindrome(num) {
    revNum = num.toString().split('').reverse().join('');
    if (num == revNum) {
        answer = num;
    }
    else {
        palindrome(num + parseInt(revNum));
    }
}
palindrome(567);
console.log(answer);

function palindromeAnswer() {
    var foo = document.getElementById('palin').value;
    var boo = document.getElementById('palinAnswer');
    palindrome(foo);
    boo.innerHTML = 'Your palindrome is : ' + answer;
}


// TO-DO list that you can submit, delete last node, and delete checked nodes
//region
var list = document.getElementById('to-do');
function addToList() {
    var text = document.getElementById('enter').value;
    var newItemEnd = document.createElement('li');
    var newCheckEnd = document.createElement('input');
    newCheckEnd.setAttribute('type', 'checkbox');
    newCheckEnd.checked = false;
    var newTextEnd = document.createTextNode(text);
    newItemEnd.appendChild(newCheckEnd);
    newItemEnd.appendChild(newTextEnd);
    list.appendChild(newItemEnd);
}

function removeLast() {
    var container = list;
    container.removeChild(container.lastChild);    
}

var listQuery = document.getElementsByTagName('li');
function removeChecked() {
    var deleteNodes = [];
    var container = list;
    for (i=0; i<listQuery.length; i++) {
        if (listQuery[i].firstChild.checked == true) {
            deleteNodes.push(listQuery[i]);  
        } 
    }
    for (i=0; i<deleteNodes.length; i++) {
        container.removeChild(deleteNodes[i]);
    }
}
//endregion







