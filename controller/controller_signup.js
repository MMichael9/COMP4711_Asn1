addUser = () => {

    fname = document.getElementById('firstName');
    lname = document.getElementById('lastName');
    email = document.getElementById('email');
    pswd = document.getElementById('password');
    c_pswd = document.getElementById('c_password');

    console.log(fname.value);
    console.log(lname.value);
    console.log(email.value);
    console.log(pswd.value);
    console.log(c_pswd.value);

    addToFirebase();
}

addToFirebase = () => {

    console.log("add user to firebase");

    let flag = 0

    firebase.auth().createUserWithEmailAndPassword(email.value, pswd.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        flag = -1
        // ...
        console.log(errorCode)
        console.log(errorMessage)
    });

}

directToLogin = () => {
    window.location = 'login.html';
}