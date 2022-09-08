function User (username, password, email, name, dob, uid) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.name = name;
    this.dob = dob;
    this.uid = uid;
  }
/*   const Post = function (text, uid) {
    this.text = text;
    this.dateCreated = Date.now();
    this.dateUpdated = Date.now();
    this.uid = uid;
  }; */
//var data, users;
//const usersList = document.getElementById("users")

 $(document).ready(function (){
  let endpointurl = "https://twitter-clone-bce1e-default-rtdb.firebaseio.com/";
  let JSONext = ".json"
  
  // AJAX GET
  $.ajax({
    type: "GET",
    dataType: "Json",
    url: endpointurl+JSONext,
  success: function (data, status, xhr) {
    console.log(data)
}
 });
 
 // AJAX POST
 function addUserAPI () {
 $.ajax({
    type: "POST",
    dataType: JSON.stringify(User),
    url: endpointurl+JSONext,
    data: userOBJ,
    success: (data) => console.log(data),
   })
  }
    })
