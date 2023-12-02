<?php
header('Access-Control-Allow-Origin: *');
 class Db_Connection {

    private $server;
    private $user;
    private $password;
    private $database;
    public $conn; 
 
    function __construct(){
        $this->server = 'localhost';
        $this->user   = 'root';
        $this->password = '';
        $this->database = 'Guvi';
    }
 
   function Establish_Connection(){
         $this->conn = new mysqli($this->server,$this->user,$this->password,$this->database);
  
         if($this->conn->connect_error)
            die("Connection failed ".$this->conn->connect_error);
        
        //  echo 'MYSQL DB Connected successfully'; 
         return $this->conn;
   }
 
 }

 $con = new Db_Connection();
 $conn = $con->Establish_Connection();

if(isset($_POST['username']) &&  isset($_POST['email'])  && isset($_POST['password']) ){

	$name = mysqli_real_escape_string($conn,$_POST['username']);
	$email = mysqli_real_escape_string($conn,$_POST['email']);
  $password = mysqli_real_escape_string($conn,$_POST['password']);
	// $password = password_hash($_POST['password'], PASSWORD_DEFAULT);


  $stmt = $conn->prepare("SELECT email FROM customers WHERE email = ?");
  $stmt->bind_param("s", $email);
  $stmt->execute();
  $stmt->store_result();
  
  // Check if the user already exists
  if ($stmt->num_rows > 0) {
       http_response_code(409);
       echo json_encode(array("statusCode" => 409,"responseText"  => "User with this email already exists."));
  }else{
      
  $stmt = $conn->prepare("INSERT INTO Customers (email, name, password) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $email, $name, $password); 
  $stmt->execute();
  http_response_code(201);
  echo json_encode(array("statusCode" => 201,"responseText" => "New account created Successfully" ));
}


}else{
  // http_response_code(500);
  // echo json_encode(array("statusCode" => 500,"responseText" => "Internal server error" ));

}
 ?>