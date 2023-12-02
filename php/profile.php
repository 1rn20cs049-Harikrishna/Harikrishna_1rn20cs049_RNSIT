
<?php
header('Access-Control-Allow-Origin: *');
require '../assets/mongoDriver/vendor/autoload.php';

use MongoDB\Client;

try{
    // MongoDB server connection string
    $mongoClient = new Client('mongodb://localhost:27017/');
    $database = $mongoClient->Guvi;
    $collection = $database->customers;      
    // echo "Connected to MongoDB successfully";

    if(     isset($_POST['name']) && 
      isset($_POST['email']) 
       && isset($_POST['age']) 
        && isset($_POST['contact'])  
        && isset($_POST['gender'] )
        && isset($_POST['dob']) ) {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $age = $_POST['age'];
        $contact = $_POST['contact'];
        $gender = $_POST['gender'];
        $dob = $_POST['dob'];

        $filter = ['email' => $email];

        // Update fields
        $update = [
            '$set' => [
                'email' => $email,
                'name' => $name,
                'age' => $age,
                'contact' => $contact,
                'gender' => $gender,
                'dob' => $dob,
            ],
        ];
    
      //  Options for the update (upsert is set to false by default)
        $options = [];
    
        //Perform the update
        $result = $collection->updateOne($filter, $update, $options);

        //Check the result
        if ($result->getModifiedCount() > 0) {
            http_response_code(204);
            echo json_encode(array("statusCode" => 204,"responseText" => "Document updated successfully" ,
            "data" => $update));
            return;
        } else {
            http_response_code(404);
            echo json_encode(array("statusCode" => 404,"responseText" => "No document matched the criteria or no changes were made." ,
            "data" => $update
        ));
            return;
        }  

    }else if(isset($_POST['email']) ){
        $email = $_POST['email'];

        $emailToSearch = $email;

        // Criteria to find the document based on the email field
        $filter = ['email' => $emailToSearch];
    
        // Find the document
        $document = $collection->findOne($filter);
    
        // Check if a document was found
        if (!empty($document)) {
            // Access the fields of the document
            $name = $document['name'];
            $age = $document['age'];
            $dob = $document['dob'];
            $contact = $document['contact'];
            $gender = $document['gender'];

             $update = [
        'set' => [
            'email' => $email,
            'name' => $name,
            'age' => $age,
            'contact' => $contact,
            'gender' => $gender,
            'dob' => $dob,
        ],
    ];

            http_response_code(200);
            echo json_encode(array("data"=> $update ,"message" => "data fetch"));

            return;
    
        
        } else {
            http_response_code(404);
            echo "No document found with the provided email.";
            return;
        }
    }else {
        http_response_code(404);
        echo "No document found with the provided email.";
        return;
    }     

}catch(Exception  $e){
    //die("Error connecting to MongoDB: ". $e);
    http_response_code(500);
    echo json_encode(array("statusCode" => 500,"responseText" => "Internal server error(connection to database failed)" ));  
     return;
}


?>











  