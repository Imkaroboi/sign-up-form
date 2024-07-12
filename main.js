let password = document.getElementById('pass');
let confirm = document.getElementById('confirm-pass');
function validation() {
    if (password.value === confirm.value) {
        
    } else {
        location.reload()
        alert("passwords didn't match")
        return;
    }
    
}