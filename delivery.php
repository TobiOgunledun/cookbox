<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>foodie</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="queries.css">

    
    <link rel="stylesheet" type="text/html" href="./user/Downloads/fontawesome-free-6.1.1-web/css/all.css">

	<link rel="stylesheet" href="file:///C:/Users/User/Desktop/iTins/icons/fontawesome-free-6.1.1-web/css/all.css">

	<link rel="stylesheet" href="/icons/fontawesome-free-6.1.1-web/css/all.css">


    <script src="https://kit.fontawesome.com/2bbbf54a3f.js" crossorigin="anonymous"></script>


    <style type="text/css">
        .wrapper{
            width: 100%;
            height: 35em;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            outline: hidden;
        }
        .popUp{
            width: 20em;
            height: 15em;
            background: rgba(255, 0, 0, .5);
            border: 2px solid #dc2f2f;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1em;
        }
    </style>

</head>
<body>
    <?php  

if(isset($_POST['submit'])) {
 $mailto = "ogunledunoluwatobi@gmail.com";  //My email address
 //getting customer data
 $name = $_POST['name']; //getting customer name
 $fromEmail = $_POST['email']; //getting customer email
 $amount = $_POST['amount'];
 $address = $_POST['address']; //getting number of guests
 $phone = $_POST['tel']; //getting customer Phome number
 $event = $_POST['event']; //getting customer Phome number
 $subject = $_POST['subject']; //getting subject line from client
 $subject2 = "Confirmation: Message was submitted successfully | Cookbox inc"; // For customer confirmation
 
 //Email body I will receive
 $message = "Client Name: " . $name . "\n"."\n"
 . "Phone Number: " . $phone . "\n"
 . "Email Address: " . $fromEmail . "\n"
 . "Delivery Address: " . $address . "\n"
 . "Amount Charged " . $amount . "\n"."\n"
 . "Client Message: " . "\n" . $_POST['message'];
 
 //Message for client confirmation
 $message2 = "Dear" . $name . "\n"
 . "Thank you for choosing us. Your items will get to you shortly!" . "\n"."\n"
 . "You submitted the following details: " . "\n" . $message . "\n"."\n"
 . "- Cookbox inc";
 
 //Email headers
 $headers = "From: " . $fromEmail; // Client email, I will receive
 $headers2 = "From: " . $mailto; // The client will receive 
 
 //PHP mailer function
 
  $result1 = mail($mailto, $subject, $message, $headers); // This email sent to My address
  $result2 = mail($fromEmail, $subject2, $message2, $headers2); //This confirmation email to client
 
  //Checking if Mails sent successfully
 
  if ($result1 && $result2) {
    echo $name "Your Order has been recieved";
  } else {
    echo "Sorry! We couldn't complete your request";
  }
 
}
 
?>

    <div class="wrapper">
        <div class="popUp">
            <h2>
                You have successfully placed an order.
                <br><br>
                Thank you!
            </h2>
            <a href="menu.html">Go Back</a>
        </div>
    </div>
    
</body>
</html>