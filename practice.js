// SELECTORS
/* this function utilizes selectors and simply changes "Hello World" to say "Hello Mass"
var hello = "Hello Mass";
var world = document.getElementById("world");
world.textContent = hello;
*/


// EACH
/* this function first puts the elements in the list into an array. Then it loops through each element in the array and changes them to "hello"
*/
function myFunction() {
    var a = [document.getElementById("world"), document.getElementById("planet"), document.getElementById("country"), document.getElementById("state"), document.getElementById("person")];
    var b = "hello";
    for(i=0; i<5; i++){
        a[i].textContent = b;
    }
}


// CHECKLIST
/* Creates a to-do list */

