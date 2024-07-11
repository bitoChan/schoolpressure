<?php
$servername = "18.162.152.78";  // 您的 MySQL 服务器 IP
$username = "root";  // 您的 MySQL 用户名
$password = "Medsim-1234";  // 您的 MySQL 密码
$dbname = "SchoolPressure_Score";  // 您的 MySQL 数据库名

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$score = $_POST['score'];
$sql = "INSERT INTO scores (score) VALUES ('$score')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
