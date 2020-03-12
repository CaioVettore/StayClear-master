function previewImagem() {

    document.querySelector("#profileImage").click();

}

function displayImage(e) {
    if (e.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector("#profileDisplay").setAttribute("src", e.target.result);
        }
        reader.readAsDataURL(e.files[0]);
    }
}
function clearLocalStorage() {
    
    localStorage.clear()

    window.location.href = '../../Login/index.html'

}

var token = localStorage.getItem('token')

if (!token) {
    window.location.href = "../../Register/index.html";
}