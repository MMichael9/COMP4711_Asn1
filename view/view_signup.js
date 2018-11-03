displayErrMsg = () => {

    let error = document.getElementById('error');
    error.innerHTML = signup_allfields;
    error.setAttribute("class", "errMsg");

}

displayEmailMsg = () => {
    let error = document.getElementById('error');
    error.innerHTML = signup_emailmsg;
    error.setAttribute("class", "errMsg");
}

displayPswdMsg = () => {
    let error = document.getElementById('pswdErr');
    error.innerHTML = signup_pswdmsg;
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