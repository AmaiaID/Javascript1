<?php 
/* The server needs to compare the introduced value inside the input with the stored inside the session variable*/
session_start();
$random= intval( $_SESSION["number"]);
$userNumber=intval ($_POST["number"]);

if($random==$userNumber){
        echo '{"info":"equal"}';
}
if($random>$userNumber){
        echo '{"info":"generated number is higher"}';
}
if($random<$userNumber){
        echo '{"info":"generated number is lower"}';
}
