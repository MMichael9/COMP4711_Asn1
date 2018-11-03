displayErrMsg = () => {

    let error = document.getElementById('error');
    error.innerHTML = login_allfields;
    error.setAttribute("class", "errMsg");

}


clearErrMsg = () => {
    let error = document.getElementById('error');
    error.innerHTML = "";
}

invalidUser = () => {

    let error = document.getElementById('error');
    error.innerHTML = login_signup;
    error.setAttribute("class", "errMsg");

}