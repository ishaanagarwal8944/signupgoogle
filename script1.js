function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode")
}

function redirectca() {
    location.replace("/createac.html")
}

let input = localStorage.getItem('input')

function submit() {
    input = document.getElementById("userinput").value
    localStorage.setItem('input', input)
    alert(input)
    location.replace("/pwd.html")
}

console.log(input)