// Determine if input fields for sign up are correct.
// If they are, add the user to firebase
addUser = () => {

    let flag = 0;

    fname = document.getElementById('firstName');
    lname = document.getElementById('lastName');
    email = document.getElementById('email');
    pswd = document.getElementById('password');

    if (fname.value == "" || lname.value == "" || email.value == "" || pswd.value == "") {
        flag = -1
        displayErrMsg();
    }
    else {
        clearErrMsg();
    }

    if (pswd.value.length < 8) {
        flag = -1
        displayPswdMsg();
    }
    else {
        clearPswdMsg();
    }

    if (flag == 0) {
        addToFirebase();
    }
}

// Add user to firebase with their email and password
addToFirebase = () => {

    console.log("add user to firebase");

    firebase.auth().createUserWithEmailAndPassword(email.value, pswd.value).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
        console.log(errorCode)
        console.log(errorMessage)
        displayEmailMsg();
    });

}

// Send control to login page
directToLogin = () => {
    window.location = 'login.html';
}