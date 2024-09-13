var myObj = {name:"Triumph", age:18, grade:12};
var myJSON = JSON.stringify(myObj);//convert objects to JSON for sending data
var newObj = JSON.parse(myJSON);//convert JSON to JS object for receiving data
document.getElementById("results").innerHTML = newObj.name;
async function age(a, b) {
    let response = await a-b;
    display(response); 
}
function display(some) {
    document.getElementById("result").innerHTML = some;
}
age(2024, 2006);