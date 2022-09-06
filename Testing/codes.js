    // loops through and finds info based on [.address, .firstName, .lastName etc]
    for(var i = 0; i < customers.length; i++) {
        console.log(customers[i].address);

    }
// displays info inside of arrays
    customers.forEach(function (arrayItem) {
        var x = arrayItem
        console.log(x);
    });
    
// Log each item within array of objects
    const myArray = [{x:100}, {x:200}, {x:300}];
    myArray.forEach((element, index, array) => {
        console.log(element.x); // 100, 200, 300
        console.log(index); // 0, 1, 2
        console.log(array);
    });
// Create a table based on array data 
// One for reading TableHead the other for the rows
    function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}
// this pulls the data from the array of objects (customers)
let table = document.querySelector("table");
let data = Object.keys(customers[0]);    //generateTableHead(table, data);
generateTable(table, customers);