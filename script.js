let pswField = document.querySelector('#pwd');
let confirmPwdField = document.querySelector('#pwd-confirm');


    let password=pswField.value;

let password_confirmed = confirmPwdField.value;


function passwordMatch()
{
    let matchWarning = document.querySelector('#match-warning');
    password=pswField.value;
    password_confirmed=confirmPwdField.value;
    if(password===password_confirmed&&password!=='')
    {
        pswField.style.valid='false';
        pswField.style.border = "1px solid green";
        confirmPwdField.style.border="1px solid green";
        matchWarning.textContent ='';

    }
    else{
        pswField.style.border = "2px solid red";
        confirmPwdField.style.border='2px solid red';
        matchWarning.textContent ='*Passwords must match';
    }
}

confirmPwdField.addEventListener('input', ()=>passwordMatch());
pswField.addEventListener('input', ()=>passwordMatch());