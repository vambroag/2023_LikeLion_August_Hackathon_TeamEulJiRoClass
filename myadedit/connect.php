<?php
$server = "192.168.50.148:3308";
$user = "likelion";
$password = "qpalzm1234";
$dbname = "likelion";

$conn = new mysqli($server, $user, $password, $dbname);

if($conn -> connect_error) echo "<h2>접속에 실패하였습니다</h2>";
else echo "<h2>접속에 성공하였습니다</h2>";
?>