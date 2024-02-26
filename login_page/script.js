function showmodel(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.loginform').classList.add('showloginform');
}


// let bntlogin = document.querySelector('.bnt_login');
// bntlogin.addEventListener("click", showmodel)

const clickme = document.querySelector(".bnt_login");
clickme.addEventListener("click", showmodel)

function closemodel(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.loginform').classList.remove('showloginform');
}

let closedme = document.getElementById("close");
closedme.addEventListener("click" , closemodel)