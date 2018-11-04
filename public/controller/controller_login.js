// Determine if all input fields for login are input correctly
// if they are, log in the user 
loginUser = () => {

    let flag = 0;

    email = document.getElementById('email');
    pswd = document.getElementById('password');

    console.log(email.value);
    console.log(pswd.value);

    if (email.value == "" || pswd.value == "") {
        flag = -1
        displayErrMsg();
    }
    else {
        clearErrMsg();
    }

    if (flag == 0) {
        
        firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            // ...
            invalidUser();
        });
    }

}

// Pass control to sign up page
directToSignup = () => { 
    window.location = 'signup.html';
}