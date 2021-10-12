function addNote() {
    let inpNote = document.getElementById("inp");
    let errorNote = document.getElementById("errors");
    let notes = document.getElementById("list");
    document.getElementById("errors").innerHTML = "";

    if (inpNote.value !== "") {
        notes.innerHTML += "<br>" + inpNote.value;
        localStorage.setItem("noted", notes.innerHTML);

    } else {
        errorNote.innerHTML += "Впишите что-нибудь!<br>";
    }
    document.getElementById("inp").value = "";
    document.getElementById("inp").focus();
}

let saveNote = localStorage.getItem("noted");
document.getElementById("list").innerHTML = saveNote +"<br>";

function clearAll() {
    localStorage.clear();
    document.getElementById("list").innerHTML = "";
}