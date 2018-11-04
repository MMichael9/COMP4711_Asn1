// Displays an error message if any fields are empty
displayErrMsg = () => {

    let error = document.getElementById('error');
    error.innerHTML = login_allfields;
    error.setAttribute("class", "errMsg");

}

// Clears the error message 
clearErrMsg = () => {
    let error = document.getElementById('error');
    error.innerHTML = "";
}

// Displays an error message if an invalid user tries to sign up
invalidUser = () => {

    let error = document.getElementById('error');
    error.innerHTML = login_signup;
    error.setAttribute("class", "errMsg");

}