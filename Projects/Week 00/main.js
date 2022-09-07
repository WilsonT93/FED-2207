function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  const User = function (username, password, email, name, dob, uid) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.name = name;
    this.dob = dob;
    this.uid = uid;
  };

  const Post = function (text, uid) {
    this.text = text;
    this.dateCreated = Date.now();
    this.dateUpdated = Date.now();
    this.uid = uid;
  };

var data, users, posts;
const usersList = document.getElementById("users")

console.log(`users: ${users}`);
console.log(`posts: ${posts}`);

fetch("data.json")
    .then((response) =>  {
        return response.json()
    })
    .then((fetchedData) => {
        data = fetchedData
    })
    .then(() => {
        console.log(data)
        for (let i=0; i < data.users.length; i++) {
            let currentUser = data.users[i]
            usersListHTML = usersList.innerHTML
            usersList.innerHTML = `${usersListHTML}\n <li>${data.users[i].username}</li>
            <td>${currentUser.username}}</td>
            <td>${currentUser.name}</td>
            <td>${currentUser.dob}</td>`
        }
    })