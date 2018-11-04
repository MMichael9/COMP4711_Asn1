// Displays an error message if any fields are empty
displayErrMsg = () => {

    let error = document.getElementById('error');
    error.innerHTML = signup_allfields;
    error.setAttribute("class", "errMsg");

}

// Displays error message if the email the user is trying to use is badly formatted
displayEmailMsg = () => {
    let error = document.getElementById('error');
    error.innerHTML = signup_emailmsg;
    error.setAttribute("class", "errMsg");
}

// DIsplays error message if the password the user is trying to use is less than 8 characters
displayPswdMsg = () => {
    let error = document.getElementById('pswdErr');
    error.innerHTML = signup_pswdmsg;
    error.setAttribute("class", "errMsgPswd");
}

// Clears the password error message
clearPswdMsg = () => {
    let error = document.getElementById('pswdErr');
    error.innerHTML = "";
}

// Clears the email/empty field message
clearErrMsg = () => {
    let error = document.getElementById('error');
    error.innerHTML = "";
}