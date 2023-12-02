<?php


//to maintain the session storage in memory so that access can be fast
// require '../assets/redisDriver/vendor/autoload.php';

// Predis\Autoloader::register();


// $client = new Predis\Client();
// $client->set('foo', 'bar');
// $value = $client->get('foo');
// echo $value;

include("register.php");
$con = new Db_Connection();
$conn = $con->Establish_Connection();

if(isset($_POST['email'])  && isset($_POST['password']) ){


	$email = mysqli_real_escape_string($conn,$_POST['email']);
  $password = mysqli_real_escape_string($conn,$_POST['password']);
    // $hashedPassword = password_hash($_POST['password'], PASSWORD_DEFAULT);


  $stmt = $conn->prepare("SELECT password FROM customers WHERE email = ?");
  $stmt->bind_param("s", $email);
  $stmt->execute();
  $stmt->bind_result($hashedPasswordFromDatabase);

      
    if ($stmt->fetch()) {
  

        if ($password ==  $hashedPasswordFromDatabase) {
            // Passwords match, user is authenticated
            http_response_code(200);
            echo json_encode(array("statusCode"=>200, "responseText" => "Login successful!")) ;
        } else {
            // Passwords do not match, authentication failed         
            http_response_code(401);
            echo json_encode(array("statusCode"=>200, "responseText" => "Login failed. Incorrect password.")) ;
        }
    }   
    
    else {
       
       http_response_code(404);
       echo json_encode(array("statusCode" => 409,"responseText"  => "User with this email not found."));
  } 

}else{   
  http_response_code(500);
  echo json_encode(array("statusCode" => 500,"responseText" => "Internal server error" ));

}

?>