function generateNumber(){
    let configFetch = {
        method: "GET",
     //  it has no body - get type
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    let promesa = fetch("generateNumber.php", configFetch);
    promesa.then(function (response) {
        //Returns True if response is OK
        if (response.ok) {
            console.log("Response OK");
        }
        response.json().then(
            function (objetoJSON) {
                let respuesta = objetoJSON.info;
                //We show the response on the HTML
                document.getElementById("respuesta").innerHTML = respuesta;
            });
    }).catch(function (error) {
        console.log('Error:' + error.message);
    });
}

function checkNumber() {
    //Obtain the values to be sent to the server
    let numero = document.getElementById("numero").value;
    
    //fetch returns a Promise type object

    let configFetch = {
        method: "POST",
     body: "number=" + numero,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    let promesa = fetch("checkNumber.php", configFetch);
    promesa.then(function (response) {
        //la propiedad ok retorna true si se ha realizado correctamente
        if (response.ok) {
            console.log("Response OK");
        }
        response.json().then(
            function (objetoJSON) {
                let respuesta = objetoJSON.info;
                //Show the answer on the HTML
                document.getElementById("response").innerHTML = response;
            });
    }).catch(function (error) {
        console.log('Error:' + error.message);
    });
}
