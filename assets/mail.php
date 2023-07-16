<?php
   if ($_SERVER["REQUEST_METHOD"] == "POST") {
       $name = $_POST['name'];
       $email = $_POST['email'];
       $message = $_POST['message'];
   
       if (empty($name) || empty($email) || empty($message)) {
           echo "All fields are required, please fill <a href=\"contact.html\">the form</a> again.";
           exit;
       }
   
       $to = 'connectwithkaleria@gmail.com'; // Replace with your email address
       $subject = 'New Contact Form Submission';
       $headers = "From: $email\r\n";
       $headers .= "Reply-To: $email\r\n";
   
       $mailBody = "Name: $name\n";
       $mailBody .= "Email: $email\n";
       $mailBody .= "Message: $message\n";
   
       if (mail($to, $subject, $mailBody, $headers)) {
           echo "Thank you for your message! We will get back to you shortly.";
       } else {
           echo "Oops! Something went wrong. Please try again later.";
       }
   }
   ?>
   