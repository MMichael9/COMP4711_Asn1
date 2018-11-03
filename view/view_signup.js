displayErrMsg = () => {

    let error = document.getElementById('error');
    error.innerHTML = "<i>Please fill in all fields</i>";
    error.setAttribute("class", "errMsg");

}

displayEmailMsg = () => {
    let error = document.getElementById('error');
    error.innerHTML = "<i>Use of improper email...Please try again</i>";
    error.setAttribute("class", "errMsg");
}

displayPswdMsg = () => {
    let error = document.getElementById('pswdErr');
    error.innerHTML = "<i>Password must be more than 8 characters</i>";
    error.setAttribute("class", "errMsgPswd");
}

clearPswdMsg = () => {
    let error = document.getElementById('pswdErr');
    error.innerHTML = "";
}

clearErrMsg = () => {
    let error = document.getElementById('error');
    error.innerHTML = "";
}