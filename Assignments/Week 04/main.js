  let customers = [
        {
            firstName:"Joe",
            lastName:"Biden",
            email:"JoeBiden1@yahoo.com",
            address:"1 White House Dr",
            state:"DC",
            zip:"30312"
        },

        {
            firstName:"John",
            lastName:"Smith",
            email:"jsmith1@gmail.com",
            address:"1 Anonymous Lane",
            state:"NY",
            zip:"14619"
        }, 

        {
            firstName:"Barack",
            lastName:"Obama",
            email:"BigObama@gmail.com",
            address:"1 Black House Dr",
            state:"DC",
            zip:"30349"
        },
        
        {
            firstName:"Kanye",
            lastName:"West",
            email:"Yeezy01@gmail.com",
            address:"1 Flashing Lights Lane",
            state:"IL",
            zip:"60106"
        }
    ];

/* function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
   */  
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
    let table = document.querySelector("table");
    let data = Object.keys(customers[0]);    //generateTableHead(table, data);
    generateTable(table, customers);