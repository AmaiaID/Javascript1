let form = document.forms["form"];
form.addEventListener("submit", validaForm, false);
function validaForm(evt) {
    let formOk = true;


    if (!validateAcceptConditions()
        | !checkInputNick()
        | !checkInputPass1()
        | !checkInputPass2()
        | !checkInputEmail()
        | !checkInputDNI()
        | !checkHobby()
        ) {//if conditions are not accepted, it cannot be sent
        formOk = false;
    }
    //	If any of the previous fields does not follow the conditions, it should not be sent
    if (!formOk) {
        evt.preventDefault();
    }

}

/*Everytime the user writes  word in an input a message is shown in green indicating if its value is valid or red
in case it is invalid
*/
form["conditions"].addEventListener("input", validateAcceptConditions);
form["inputNick"].addEventListener("input", checkInputNick);
form["inputPass1"].addEventListener("input", checkInputPass1);
form["inputPass2"].addEventListener("input", checkInputPass2);
form["inputEmail"].addEventListener("input", checkInputEmail);
form["inputDNI"].addEventListener("input", checkInputDNI);
form["hobby"].addEventListener("change", checkHobby);
/** 	The checkbox “I accept the conditions” is checked.*/
function validateAcceptConditions() {
    let ok = form["conditions"].checked;
    let infoSpan = form["conditions"].nextElementSibling;
    if (!ok) {//si no es valido
        infoSpan.innerHTML = "You must accept the conditions";
        infoSpan.style.backgroundColor = "red";
        return false;
    } else {
        infoSpan.innerHTML = "OK";
        infoSpan.style.backgroundColor = "green";
        return true;
    }
}
/*	inputNick  should contain between 2 and 25 characters.*/
function checkInputNick() {
    let input = form["inputNick"];
    let infoSpan = input.nextElementSibling;
    let name = input.value;

    if (name.length < 2 || name.length > 25) {// If it is not valid
        infoSpan.innerHTML = "between 2 & 5 characters";
        infoSpan.style.backgroundColor = "red";
        return false;
    } else {
        infoSpan.innerHTML = "OK";
        infoSpan.style.backgroundColor = "green";
        return true;
    }
}
/*	inputPass1 should have between 4 and 9 numbers or letters.*/
function checkInputPass1() {
    let input = form["inputPass1"];
    let infoSpan = input.nextElementSibling;
    let valor = input.value;

    let expresion = /^([A-z]|[0-9]){4,9}$/;
    if (!expresion.test(valor)) { //If it is not valid
        infoSpan.innerHTML = " entre 4 y 9 letras o números";
        infoSpan.style.backgroundColor = "red";
        return false;
    } else {
        infoSpan.innerHTML = "OK";
        infoSpan.style.backgroundColor = "green";
        return true;
    }
}

/*	inputPass2 should be equal to inputPass2.*/
function checkInputPass2() {
    let input = form["inputPass2"];
    let infoSpan = input.nextElementSibling;
    let value = input.value;

    if (value != form["inputPass1"].value) { //If it is not valid
        infoSpan.innerHTML = "passwords do not match";
        infoSpan.style.backgroundColor = "red";
        return false;
    } else {
        infoSpan.innerHTML = "OK";
        infoSpan.style.backgroundColor = "green";
        return true;
    }
}

/*	InputEmail  should have email format  , with @ & .*/
function checkInputEmail() {
    let input = form["inputEmail"];
    let infoSpan = input.nextElementSibling;
    let valor = input.value;

    let expresion = /^[A-z]+@[A-z]+.([A-z])+$/;
    if (!expresion.test(valor)) { //If it is not valid
        infoSpan.innerHTML = "invalid format";
        infoSpan.style.backgroundColor = "red";
        return false;
    } else {
        infoSpan.innerHTML = "OK";
        infoSpan.style.backgroundColor = "green";
        return true;
    }
}

/*	InputDNI should have ID format with 8 numbers and a letter.*/
function checkInputDNI() {
    let input = form["inputDNI"];
    let infoSpan = input.nextElementSibling;
    let valor = input.value;

    let expresion = /^[0-9]{8}[A-z]{1}$/;
    if (!expresion.test(valor)) { //If it is not valid
        infoSpan.innerHTML = "should have 8 numbers and a letter";
        infoSpan.style.backgroundColor = "red";
        return false;
    } else {
        infoSpan.innerHTML = "OK";
        infoSpan.style.backgroundColor = "green";
        return true;
    }
}

/*	At least one hobby must be checked.*/
function checkHobby() {

    let select = form["hobby"];
    let options = select.options;
    let infoSpan = select.nextElementSibling;

    let selected = 0;
    for (let k = 0; k < options.length; k++) { // check that at least some option is selected
        if (options[k].selected) {
            selected++;
        }
    }
    if (selected<2) { //if at least 2 are not selected
        infoSpan.innerHTML = " It is necessary to select at least 2 fields";
        infoSpan.style.backgroundColor = "red";
        return false;
    } else {
        infoSpan.innerHTML = "OK";
        infoSpan.style.backgroundColor = "green";
        return true;
    }
}


/*3.	When add Hobby is selected,a new option will be added with the same value and text added on  inputHobby. */
function addHobby(){
    let hobby =document.getElementById("newHobby").value;
    let divAficiones= document.getElementById("aficiones");
    let option=document.createElement("OPTION");

    option.innerHTML=hobby;
    option.value=hobby;

    divAficiones.appendChild(option);
    divAficiones.appendChild(checkbox);

    let select = form["hobby"];
    select.appendChild(option);
}


document.getElementById("saveData").addEventListener("click",saveData,false);
document.getElementById("recoverData").addEventListener("click",recoverData,false);

 /**
   When clicking saveData() all the date from the inputs must be saved in a cookie 
  * @returns {undefined}
  */
 function saveData(){
    let conditions= form["conditions"].checked//obtain the value inside the input
    setCookie('conditions',conditions,10); //value stored in a cookie
   
    let inputNick= form["inputNick"].value
    setCookie('inputNick',inputNick,10); 

    let inputPass1= form["inputPass1"].value
    setCookie('inputPass1',inputPass1,10); 

    let inputPass2= form["inputPass2"].value
    setCookie('inputPass2',inputPass2,10); 

    let inputEmail= form["inputEmail"].value
    setCookie('inputEmail',inputEmail,10); 
 
    let inputDNI= form["inputDNI"].value
    setCookie('inputDNI',inputDNI,10); 

}



