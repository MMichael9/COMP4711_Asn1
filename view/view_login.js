displayErrMsg = () => {

    let error = document.getElementById('error');
    error.innerHTML = "<i>Please fill in all fields</i>";
    error.setAttribute("class", "errMsg");

}


clearErrMsg = () => {
    let error = document.getElementById('error');
    error.innerHTML = "";
}

invalidUser = () => {

    let error = document.getElementById('error');
    error.innerHTML = "<i>You must sign up to play !</i>";
    error.setAttribute("class", "errMsg");

}