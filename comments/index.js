function saveName() {
    let savedUser = localStorage.getItem("user");
    document.getElementById("login").value = savedUser;
    let savedComm = localStorage.getItem("comments");
    document.getElementById("result").innerHTML = savedUser + ": " + savedComm + "<br>";
}


function sendComment() {

    let name = document.getElementById("login").value;
    let comm = document.getElementById("input").value;


    localStorage.setItem("user", name);
    let text = document.getElementById("result");
    text.innerHTML += "<br>" + comm;

    document.getElementById("input").value = "";

    document.getElementById("input").focus();
    localStorage.setItem("comments", text.innerHTML);

}

saveName();