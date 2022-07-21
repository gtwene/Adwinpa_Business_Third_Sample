<?php

$conn = mysql_connect("localhost", "root", "" , "data")

// require 'connection.php';

    if(isset($_POST["submit"])){
        $name = $_POST["name"];
        $contactno = $_POST["contactno"];
        $emailaddress = $_POST["emailaddress"];
        $colorblackorwhite = $_POST["colorblackorwhite"];
        $color = $_POST["color"];
        $blacknwhite = $_POST["blacknwhite"];
        $file = $_POST["file"];
        $color = $_POST["color"];
        $copies = $_POST["copies"];
        $pickup = $_POST["pickup"];
        $deliver = $_POST["deliver"];
        $lamination= $_POST["lamination"];
        $envelope = $_POST["envelope"];
        $binding = $_POST["binding"];
        $above = $_POST["above"];
        $payment = $_POST["payment"];
        $cost = $_POST["cost"];

        $query = "INSERT INTO pickup VALUES('', '$name', '$contactno', '$emailaddress'. '$colorblackorwhit', '$color', '$blacknwhite', '$file', '$copies', '$pickup', '$deliver', '$lamination', '$envelope', '$binding', '$above', '$above', '$payment', '$cost)"
        mysqli_query($conn, $query);
        echo
        "
        <script> alert("Data Inserted")</script>
        "
    }

?>