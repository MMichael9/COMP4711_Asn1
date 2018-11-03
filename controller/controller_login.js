loginUser = () => {

    email = document.getElementById('email');
    pswd = document.getElementById('password');

    console.log(email.value);
    console.log(pswd.value);

    firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

}

directToSignup = () => { 
    window.location = 'signup.html';
}