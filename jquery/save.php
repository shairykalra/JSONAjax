<?php
$conn=mysqli_connect("localhost","root","","jademo");

if($_POST['type']==1){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
        $password=$_POST['password'];
        $duplicate=mysqli_query($conn,"select * from register where email='$email'");
		if (mysqli_num_rows($duplicate)>0)
		{
			echo json_encode(array("statusCode"=>201));
		}
		else{
        $sql = "INSERT INTO register VALUES ('','$name','$email','$phone', '$password')";
			if (mysqli_query($conn, $sql)) {
				echo json_encode(array("statusCode"=>200));
			} 
			else {
				echo json_encode(array("statusCode"=>201));
			}
        }
    }

    if($_POST['type']==2){
		$email=$_POST['email'];
		$password=$_POST['password'];
		$check=mysqli_query($conn,"select * from register where email='$email' and password='$password'");
		if (mysqli_num_rows($check)>0)
		{
			$email=$email;
			echo json_encode(array("statusCode"=>200));
		}
		else{
			echo json_encode(array("statusCode"=>201));
		}
		mysqli_close($conn);
	}
    ?>