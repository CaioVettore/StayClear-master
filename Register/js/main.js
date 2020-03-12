const token = localStorage.getItem("token");

if(token){
    window.location.href = "../../Dashboard/index.html";
}

function register() {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var category = document.getElementById("professions").value;


  axios
    .post('http://stayclearteste-com.umbler.net/users', {
      name,
      email,
      password,
      category
    }).then(function (response) {

      const { user, token, error } = response.data;


      if (error) {
        alert(error)
      } else {
        localStorage.setItem('token', token)

        localStorage.setItem('userExist', JSON.stringify(user))

        window.location.href = "../../Dashboard/index.html";


      }
      
    })


}

