function logIn() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const correctUsername = "Dammykad";
    const correctPassword = "password1";
    if (!username || !password) {
        document.getElementById("result").innerHTML = ["Please fill in the required fields"];
        return;
    }
    if (username != correctUsername || password != correctPassword) {
        document.getElementById("result").innerHTML = ["Incorrect username or password"];
        return;
    } else {
        window.location.href = "login_page2.html";
    }
}