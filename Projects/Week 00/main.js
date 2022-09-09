/* function User (username, password, email, name, dob, uid) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.name = name;
    this.dob = dob;
    this.uid = uid;
  } */

// Fetch (Get) Data
fetch ("https://twitter-clone-bce1e-default-rtdb.firebaseio.com/")
    .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
          console.log(error);
      });
// fetch method to POST data
  fetch ("https://twitter-clone-bce1e-default-rtdb.firebaseio.com/", {
      method: 'POST',
      body: JSON.stringify ({
        username: 'foobar1',
        password: 'bar1',
        email: 'foobar@gmail.com',
        name: 'Foo Bar',
        uId: 0
      }),
      headers: {
        "Content-type": "application/json; charset=utf-8"
      }
  })
      .then(res => res.json())
      .then(data => console.log(data));

/*  // fetch method to PUT (update) data
   fetch ("https://twitter-clone-bce1e-default-rtdb.firebaseio.com/", {
    method:'PUT',
    body: JSON.stringify ({
      title: 'foo',
      body: 'bar',
      userId: 0
    }),
    headers: {
      "Content-type": "application/json; charset=utf-8"
    }
})
    .then(res => res.json())
    .then(data => console.log(data));
    
  // fetch method to DELETE data
    fetch ("https://twitter-clone-bce1e-default-rtdb.firebaseio.com/",{
      method: 'DELETE'
    }) */