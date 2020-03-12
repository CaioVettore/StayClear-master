const token = localStorage.getItem("token");

if(token){
    window.location.href = "../../Dashboard/index.html";
}


function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    axios
        .post('http://stayclearteste-com.umbler.net/auth', {

            email,
            password

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
