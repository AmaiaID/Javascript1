<?php 
session_start();

//  pida al servidor que genere un número aleatorio entre 1 y 100 y lo almacene en una variable de sesion.

$random = (rand(1,100));
$_SESSION["numero"]=$random;

//retorno el numero para depurar y ver si funciona
echo '{"info":"generated number:'.$random.'"}';
