<?php  
 
if(isset($_POST['submit'])) {
 $mailto = "ogunledunoluwatobi@gmail.com";  //My email address
 //getting customer data
 $name = $_POST['name']; //getting customer name
 $fromEmail = $_POST['email']; //getting customer email
 $date = $_POST['date'];
 $guest = $_POST['number of guests']; //getting number of guests
 $phone = $_POST['tel']; //getting customer Phome number
 $event = $_POST['event']; //getting customer Phome number
 $subject = $_POST['subject']; //getting subject line from client
 $subject2 = "Confirmation: Message was submitted successfully | Cookbox inc"; // For customer confirmation
 
 //Email body I will receive
 $message = "Client Name: " . $name . "\n"
 . "Phone Number: " . $phone . "\n\n"
 . "Number of Guest: " . $guest . "\n\n"
 . "Date for occasion: " . $date . "\n\n"
 . "Type of Event: " . $event . "\n\n"
 . "Client Message: " . "\n" . $_POST['message'];
 
 //Message for client confirmation
 $message2 = "Dear" . $name . "\n"
 . "Thank you for contacting us. We will get back to you shortly!" . "\n\n"
 . "You submitted the following message: " . "\n" . $_POST['message'] . "\n\n"
 . "Regards," . "\n" . "- Cookbox inc";
 
 //Email headers
 $headers = "From: " . $fromEmail; // Client email, I will receive
 $headers2 = "From: " . $mailto; // This will receive client
 
 //PHP mailer function
 
  $result1 = mail($mailto, $subject, $message, $headers); // This email sent to My address
  $result2 = mail($fromEmail, $subject2, $message2, $headers2); //This confirmation email to client
 
  //Checking if Mails sent successfully
 
  if ($result1 && $result2) {
    $success = "Your Message was sent Successfully!";
  } else {
    $failed = "Sorry! Message was not sent, Try again Later.";
  }
 
}
 
?>