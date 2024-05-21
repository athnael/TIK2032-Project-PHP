<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tugasphp";

// Create connection
$con = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Connected successfully";
}
?>
